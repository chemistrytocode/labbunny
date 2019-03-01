var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: 329929199455-fqofslrb94m67a3liamgoh9sck0j2j4e.apps.googleusercontent.com,
    clientSecret: dasFa4MPrjp6kD7gZBCRjONl,
    callbackURL: "http://localhost:3000"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
