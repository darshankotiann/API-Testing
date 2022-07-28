const express = require("express");
const app = express();
const port = 3000;
const hello = require("./api/mail");
app.use("/api/mail", hello);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
