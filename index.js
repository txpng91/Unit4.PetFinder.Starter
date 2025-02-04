// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

const PORT = 8081;

// app.use(express.static('public')); //Wouldn't you rather use "app.use" instead??

// GET - / - returns homepage ???
app.get('/', (req, res) => {
  // serve up the public folder as static index.html file
  res.sendFile(__dirname + '/public/index.html');
});

// hello world route
app.get('/api', (req, res) => {
  res.send(`<h1>Hello World!</h1>`);
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
  // send the pets array as a response
  res.send(pets); // Set response to send an array of owners
});

// get pet by owner with query string
app.get('/api/v1/pets/owner/:owner', (req, res) => {
  // get the owner from the request
  const owner = req.params.owner; // declaring a request and setting params as owner
  // find the pet in the pets array
  const pet = pets.find((pet) => pet.owner === owner);

  // send the pet as a response
  res.send(pet); // Returning the name of the pet and the name of owner
});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
  // get the name from the request
  const name = req.params.name; //declaring a request and setting params as name
  // find the pet in the pets array
  const pet = pets.find((pet) => pet.name === name);

  // send the pet as a response
  res.send(pet); // Set the response to return the pet by name
});

app.listen(PORT, () => {
  console.log('Server is listening on port ' + PORT);
});

module.exports = app;
