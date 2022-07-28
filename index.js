const express = require("express");
const app = express();
const port = 3000;
const hello = require("./api/mail");
const selfmail = require("./api/selfmail");
app.use(express.json({ extended: false }));

app.use("/api/mail", hello);
app.use("/api/selfmail", selfmail);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
