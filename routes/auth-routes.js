const express = require('express');
const router = express.Router();
const passport = require('passport');

// auth with google
router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

// callback route for google redirect
router.get('/google/redirect',
  passport.authenticate('google', {
    failureRedirect: '/login'
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


module.exports = router;