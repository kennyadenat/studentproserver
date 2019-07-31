const express = require('express');
const router = express.Router();
const passport = require('passport');
const crypto = require('crypto');
const User = require('../models/user');
const UserToken = require('../models/usertoken');
const Service = require('../services/emailservice');
const Avatar = require('../config/avatar');
const Profile = require('../models/profile');
const Config = require('../config/key');

// user signup route
router.post('/signup', (req, res) => {

  const avatars = Avatar.chooseAvatar(Avatar.avatarthree())
  const newUser = new User(req.body);
  newUser.avatar = avatars;
  newUser.provider = 'Local';
  const newAcc = newUser.save((err, user) => {
    if (err) {
      res.status(400).send({
        msg: err
      });
    } else {

      // create a token and send email confirmation to user email address
      const token = new UserToken({
        userid: user._id,
        token: crypto.randomBytes(16).toString('hex')
      })

      token.save((err) => {
        //generate the mail link token
        const url = 'http:\/\/' + req.headers.host + '\/auth\/confirmemail?token=' + token.token;
        const payload = {
          email: user.email,
          subject: 'Almost Set!. Please confirm your email address',
          link: 'Hello ' + user.fullname + ',\n\n' + 'Please verify your account by clicking the link below: <br> <a href="' + url + '"> Click Here </a>'
        }
        // Create User Profile
        createProfile(user);
        // Service.mailService(payload);
        res.status(200).send(user);
      })
    }
  });
});

function createProfile(user) {
  const newProfile = new Profile({
    userid: user._id,
    fullname: user.fullname,
    avatar: user.avatar,
    email: user.email
  })
  newProfile.save((err) => {

  });
}

// user email confirmation router
router.get('/confirmemail', (req, res, next) => {
  UserToken.findOne({
    token: req.query.token
  }, (err, token) => {
    if (err) return res.status(400).send('error confirming your email');
    if (token) {
      User.findOne({
        _id: token.userid
      }, (err, user) => {
        if (user.isVerified) {
          res.status(200).send('email has already been successfully verified');
        } else {
          //confirm the user information. 
          User.findOneAndUpdate({
            _id: token.userid
          }, {
            isVerified: true
          }, (err, user) => {
            res.status(200).send('email has been successfully verified');
          })
        }
      })
    }
  })

})

//resend email confirmation
router.post('/resend', (req, res) => {
  const urls = 'localhost:4200'
  const url = 'http:\/\/' + urls + '\/authredirect\/';
  console.log(url);
})

// user password recovery


// user signin router
router.post('/signin', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      res.status(400).send(err);
      // return next(err);
    }
    if (!user) {
      return res.status(400).send('Users do not exist or password do not match');
      //  return res.redirect('/login');
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      // return res.redirect('/users/' + user.username);
      res.status(200).send(user);
    });
  })(req, res, next);
});


router.post('/authgoogle', (req, res) => {

  User.findOne({
    _id: req.body.id
  }, (err, user) => {
    if (err) return res.status(400).send(err);
    if (!user) {
      return res.status(400).send({
        err: 'User not found'
      });
    }
    User.authentication(user, (users) => {
      return res.status(200).send(users);
    });
  })

});

// router.get('/google/redirect',
//   passport.authenticate('google', (err, user, req, res) => {
//     if (err) {
//       failureRedirect: 'http://localhost:4200/'
//     }
//     if (!user) {
//       console.log(res);
//       // return res.status(400).send('Users do not exist or password do not match');
//     }
//     console.log('Call Back Reached');
//     // res.status(200).send(user);
//   }));

var requestAuth = function (req, res, next) {

}

// user auth with google
router.get('/google', passport.authenticate('google', {
  scope: ['email', 'profile']
}));


// callback route for google redirect
router.get('/google/redirect',
  passport.authenticate('google', {
    failureRedirect: 'http://localhost:4200/'
  }), (req, res) => {
    // console.log(req.user);
    // const urls = 'localhost:4200'
    const url = Config.client.dev + '\/authredirect\/' + req.user._id;

    // Successful authentication, redirect home.
    res.redirect(url);
  });



module.exports = router;