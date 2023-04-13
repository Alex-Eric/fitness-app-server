const express = require("express");
const router = express.Router();
const request = require("request");

// GET /api/exercises
router.get("/exercises", (req, res, next) => {
  request.get(
    {
      url: "https://api.api-ninjas.com/v1/exercises?muscle=biceps",
      headers: {
        "X-Api-Key": "SESp/8Nz4NWIYG6FDDerNA==RD1ZbMZltIomlxMU",
      },
      json:true
    },
    function (error, response, body) {
      if (error) return console.error("Request failed:", error);
      else if (response.statusCode != 200)
        return console.error(
          "Error:",
          response.statusCode,
          body.toString("utf8")
        );
      else res.json(body)
    }
  );
});

module.exports = router;
