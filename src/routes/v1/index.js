const express = require("express");
const userRoute = require("./user.route.js");
const entriesRoute = require("./entries.route.js")
const router = express.Router()

const defaultRoutes = [
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/entries",
    route: entriesRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;