"use strict";

module.exports = {
  routes: [
    //custom router
    {
      method: "GET",
      path: "/activity/:id/count",
      handler: "activity.count",
    },
    {
      method: "PUT",
      path: "/activity/:id/discount",
      handler: "activity.discount",
    },
  ],
};
