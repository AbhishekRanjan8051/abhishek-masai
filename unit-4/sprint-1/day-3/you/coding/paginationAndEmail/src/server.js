const connect = require("./config/db");
const app = require("./index");

app.listen(2345, async () => {
  await connect();
  console.log("listening on 2345");
});
