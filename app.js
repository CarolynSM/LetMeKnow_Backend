const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/resolutions", (request, response) => {
  queries
    .list()
    .then(resolutions => {
      response.json({ resolutions });
    })
    .catch(console.error);
});

app.get("/resolutions/:id", (request, response) => {
  queries
    .read(request.params.id)
    .then(resolution => {
      resolution ? response.json({ resolution }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.post("/resolutions", (request, response) => {
  queries
    .create(request.body)
    .then(resolution => {
      response.status(201).json({ resolution: resolution });
    })
    .catch(console.error);
});

app.delete("/resolutions/:id", (request, response) => {
  queries
    .delete(request.params.id)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.put("/resolutions/:id", (request, response) => {
  queries
    .update(request.params.id, request.body)
    .then(resolution => {
      response.json({ resolution: resolution[0] });
    })
    .catch(console.error);
});

app.use((request, response) => {
  response.send(404);
});

module.exports = app;
