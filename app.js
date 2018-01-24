const express = require("express");
const cors = require("cors");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());

app.get("/", (response, request) => {
  .list("invite")
  .then(invite => {
    queries.list("guests").then(guests => {
      response.json({
        invite: invite,
        guests: guests
      })
    })
  })
  .catch(error => console.log(error));
})

app.get("/invite", (request, response) => {
  queries
    .list("invite")
    .then(invite => {
      response.json({ invite });
    })
    .catch(error => console.log(error));
});

app.get("/guests", (request, response) => {
  queries
    .list("guests")
    .then(guests => {
      response.json({ guests });
    })
    .catch(console.error);
});

app.get("/invite/:id", (request, response) => {
  queries
    .read(request.params.id, "invite")
    .then(invite => {
      invite ? response.json({ invite }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.get("/guests/:id", (request, response) => {
  queries
    .read(request.params.id, "guests")
    .then(guests => {
      guests ? response.json({ guests }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.post("/invite", (request, response) => {
  queries
    .create(request.body)
    .then(invite => {
      response.status(201).json({ invite: invite });
    })
    .catch(console.error);
});

app.post("/guests", (request, response) => {
  queries
    .create(request.body)
    .then(guests => {
      response.status(201).json({ guests: guests });
    })
    .catch(console.error);
});

app.delete("/invite/:id", (request, response) => {
  queries
    .delete(request.params.id)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.put("/invite/:id", (request, response) => {
  queries
    .update(request.params.id, request.body)
    .then(invite => {
      response.json({ invite: invite[0] });
    })
    .catch(console.error);
});

app.put("/guests/:id", (request, response) => {
  queries
    .update(request.params.id, request.body)
    .then(guests => {
      response.json({ guests: resolution[0] });
    })
    .catch(console.error);
});

app.use((request, response) => {
  response.send(404);
});

module.exports = app;
