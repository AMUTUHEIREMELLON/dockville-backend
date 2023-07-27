const express = require("express");
const path = require("path");
const app = express();

// importing bodaRoutes
const bodaRoutes = require("./controllers/bodaRoutes");
const indexRoutes = require("./controllers/indexRoutes");
const loginRoutes = require("./controllers/loginRoutes");
const registerRoutes = require("./controllers/registerRoutes");
const parkingRoutes = require("./controllers/parkingRoutes");
const carRoutes = require("./controllers/carRoutes");
const receiptRoutes = require("./controllers/receiptRoutes");
const taxiRoutes = require("./controllers/taxiRoutes");
const truckRoutes = require("./controllers/truckRoutes");
const sectionsRoutes = require("./controllers/sectionsRoutes");



// setting up pug as our view engine
app.engine("pug", require("pug").__express);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// setting up directory for static files
app.use(express.static(path.join(__dirname, "public")));

// using imported routes
app.use("/api", bodaRoutes);
app.use("/api", indexRoutes);
app.use("/api", loginRoutes);
app.use("/api", registerRoutes);
app.use("/api", parkingRoutes);
app.use("/api", carRoutes);
app.use("/api", receiptRoutes);
app.use("/api", taxiRoutes);
app.use("/api", truckRoutes);
app.use("/api", sectionsRoutes);





// running the server on a spefic port
// this should be the last line in the server line
app.listen(3000, () => console.log("listening on port 3000"));
