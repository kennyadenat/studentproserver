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

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// Deserialize User. .
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

// Google Strategy Implementation
passport.use(new GoogleStrategy({
  clientID: Keys.google.clientID,
  clientSecret: Keys.google.clientSecret,
  callbackURL: Keys.google.callbackURL
}, (accessToken, refreshToken, profile, cb) => {
  // User.findOrCreate({
  //   googleId: profile.id
  // }, (err, user) => {
  //   return cb(err, user);
  // });
  console.log(profile);
}));