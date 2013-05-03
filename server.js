var connect = require("connect");

connect()
  .use(connect.logger())
  .use(connect.static(__dirname + "/public"))
  .listen(3000);
