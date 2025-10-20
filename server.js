const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello...! ELEVATE LABS THANK YOU FOR GIVING INTERNSHIP OPPORTUNITY");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
};
