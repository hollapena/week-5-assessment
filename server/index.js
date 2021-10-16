const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["Good vibes are coming your way!", "You will find new solutions to old problems this week!", "Your positivity will become a catalyst for change!", "Your biggest achievement lies in helping others first!", "You hold the key to success!", "Today is your lucky day!", "Your charming nature will open many doors for you!", "You are original and creative!"];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune)
});

const gratitude = []

app.post("/api/gratitude", (req, res) => {
  const{gratitudeText}=req.body
  gratitude.push(gratitudeText);
  console.log(gratitude);
  res.status(200).send("Your gratitude has been recorded! Remember, if you need to be reminded, click the gratitude reminder!")
});

app.get("/api/gratitude", (req, res) => {
  let randomIndex = Math.floor(Math.random() * gratitude.length);
  let randomGratitude = gratitude[randomIndex];

  res.status(200).send(randomGratitude)
});

globalID=0
const toDoList = []

app.post("/api/todo", (req, res) => {
  const{toDoText, descriptionText}=req.body
  let task = [globalID, toDoText, descriptionText]
  toDoList.push(task);
  globalID++
  console.log(toDoList);
  res.status(200).send(toDoList);
});

app.delete("/api/todo/:id", (req,res) => {
  const {id}=req.params
  let index = toDoList.findIndex((elem) => +elem[0] === +id)
    toDoList.splice(index, 1);
    console.log(toDoList);
    res.status(200).send(toDoList);
});

app.listen(4000, () => console.log("Server running on 4000"));
