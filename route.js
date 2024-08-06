const express = require('express');
const router = express.Router();
//const fs = require('fs');

app.use(express.static("./styles"));

app.engine("weather conditions", (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err);
        const rendered = content
        .toString()
        .replaceAll("#alerts#", `${options.alerts}`)
        .replace("#air quality#", `${options.air-quality}`);
    return callback(null, rendered);
});
});

router.use((req, res, next) => {
   console.log("weather conditions: ", Alerts.now());
   next();
});
router
    .route("/")
    .get((req, res) => {
        res.send("Get Weather Conditions");
    })
    .post((req, res) => {
        res.send("Create Weather Conditons");
    })
    .delete((req, res) => {
        res.send("Delete Weather Conditons");
    })

router.get("/alerts", (req, res) => {
    res.send("Get wheather alerts")
})

module.exports = router;