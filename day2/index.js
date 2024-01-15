import express, { request, response } from "express";

const server = express();

const classes = [
  {
    name: "mindx 1",
    members: 50,
  },
  {
    name: "mindx 2",
    members: 10,
  },
  {
    name: "mindx 3",
    members: 20,
  },
];

//request bao gồm: đường dẫn - url, method - phương thức get/post/put/delet, headers, body

server.get("/home", (request, response) => {
  // console.log("requestHeader", request.headers);
  // console.log("requestUrl", request.url);
  // console.log("requestBody", request.body);
  // console.log("requestMethod", request.method);

  response.status(200).send({ name: "mindx" });
});

//Request: method - POST, đường dẫn :/users
//Respond: status - 201, data là 1 object user bao gồm tên và tuổi.

server.post("/users", (request, response) => {
  response.status(201).send({ name: "khoa", age: 22 });
});

//request: method - GET, đường dẫn: /classes
//Respond: status - 200 , data là classess

server.get("/classes", (req, res) => {
  const query = req.query;
  res.status(200).send(classes);
});

//request: method - POST, đường dẫn: /classes, body là 1 class mới
//Respond: status - 201 , data là NEW classess

server.get("/classes/over40", (req, res) => {
  res.status(201).send(classes.filter((item) => item.members > 40));
});

server.listen(3000, () => {
  console.log("Server Running~");
});
