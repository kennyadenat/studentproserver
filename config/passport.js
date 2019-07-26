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
const Profile = require('../models/profile')


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
  }
));

// Google Strategy Implementation
passport.use(new GoogleStrategy({
  clientID: Keys.google.clientID,
  clientSecret: Keys.google.clientSecret,
  callbackURL: Keys.google.callbackURL
}, (accessToken, refreshToken, profile, cb) => {
  User.findOne({
    googleId: profile.id
  }, (err, user) => {
    if (err) {
      return cb(err);
    }

    if (user) {
      //update the database with the new information. 
      User.findOneAndUpdate({
        googleId: profile.id
      }, {
        fullname: profile.displayName,
        avatar: profile.photos[0].value
      }, (err, res) => {
        if (err) {
          return cb(err);
        }

        return cb(null, res);
        // User.authentication(res, (users) => {
        //   return cb(null, users);
        // });
      })
    } else {
      //create a new user
      const newUser = new User();
      newUser.googleId = profile.id;
      newUser.fullname = profile.displayName;
      newUser.provider = profile.provider;
      newUser.email = profile.emails[0].value;
      newUser.avatar = profile.photos[0].value;
      newUser.isVerified = true;

      newUser.save((err, user) => {
        createProfile(user);
        // Generate token and pass it to the profile
        return cb(null, user);
        // User.authentication(user, (users) => {
        //   return cb(null, users);
        // });
      });
    }

  })

}));


function createProfile(user) {
  const newProfile = new Profile({
    userid: user._id,
    fullname: user.fullname,
    avatar: user.avatar
  })
  newProfile.save((err) => {

  });
}