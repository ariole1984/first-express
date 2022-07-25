// import express library
import express, { request, response } from "express";

// initialize express server
const app = express();


app.post('/students', (request, response) => {
const newStudent = request.body;
students.push(newStudent);
response.status(201).send(students);


})

// List requests that we want express to respond to
const students = [
    { firstName: "Johnathan", lastName: "Vegas" },
    { firstName: "Bridgette", lastName: "Lemus" },
    { firstName: "Mason", lastName: "Madaras" },
    { firstName: "Logan", lastName: "McCalley" },
    { firstName: "Sebastien", lastName: "Placide" },

];

app.get("/hello", (request, response) => {
  // do something...
  console.log("Hello World🤪!");
  response.send("Hello World!");
});


app.get("/students", (request, response) => {
   response.send(students)
    
});


app.get("/students/:firstName", (request, response) => {
const student = students.find(stud => stud.firstName === request.params.firstName)

response.send(student);

});

// start listening on port
app.listen(3001, () => {
  console.log("Now listening on port 3001");
});
