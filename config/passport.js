const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const LinkedInStrategy = require('passport-linkedin').Strategy;
const InstagramStrategy = require('passport-instagram').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const GoogleStrategy = require('passport-google-oauth20');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const Keys = require('./key');
const bcrypt = require('bcryptjs');

passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize User. .
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(new LocalStrategy(
  (username, password, done) => {

    User.findOne({
      email: username
    }, (err, user) => {
      if (err) return done(err);
      if (!user) {
        return done(null, false)
      } else {
        // console.log(user);
        bcrypt.compare(password, user.hash, (err, res) => {
          if (err) {
            return done(err);
          }
          if (!res) return done(null, false);
          User.authentication(user, (users) => {
            return done(null, users);
          });
        });
      }
    })

    // const params = {
    //   email: username,
    //   password: password
    // }

    // User.authentication(params, (err, user) => {
    //   if (err) {
    //     console.log(err);
    //     return done(err);
    //   }
    //   console.log(user);
    //   return done(null, user)
    // })
  }
));

// Google Strategy Implementation
passport.use(new GoogleStrategy({
  clientID: Keys.google.clientID,
  clientSecret: Keys.google.clientSecret,
  callbackURL: Keys.google.callbackURL
}, (accessToken, refreshToken, profile, cb) => {
  User.findOne({
    id: profile.id
  }, (err, user) => {
    if (err) {
      return done(err);
    }

    if (user) {
      //update the database with the new information. 
      User.findOneAndUpdate({
        googleId: profile.id
      }, {
        fullname: profile.displayName,
        avatar: profile.photos[0].value
      }, (err) => {
        if (err) {
          return done(err);
        }
      })
    } else {
      //create a new user
      const newUser = new User();
      newUser.googleId = profile.id;
      newUser.fullname = profile.displayName;
      newUser.provider = profile.provider;
      newUser.email = profile.email;
      newUser.avatar = profile.photos[0].value;

      newUser.save();
      return cb(null, profile);
    }

  })

}));