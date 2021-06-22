const app = require("express")();

app.get("/", (req, res) => res.send("hello!"));

app.get("/stream/:sid", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  const sid = req.params.sid;
  send(res, sid);
});

let i = 1;
function send(res, sid) {
  // We have to follow this method of sending message -> add data: before and \n\n after each message to denote that it is an event
  res.write("data: " + `hello!${sid + " -> " + i++}\n\n`);
  setTimeout(() => send(res, sid), 1000);
}
app.listen(8080, () => console.log("Listening on port 8080"));
