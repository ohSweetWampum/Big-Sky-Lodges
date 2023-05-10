const authRequired = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    console.log("not login")
  } else {
    next();
    console.log("login-next")
  }
};

module.exports = { authRequired };
