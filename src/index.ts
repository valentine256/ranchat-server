// Import the express library here
import express from "express";
import User from "./model/userList";
// Instantiate the app here
const app = express();

const PORT = process.env.PORT || 4001;

// Invoke the app's `.listen()` method below:
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


// postgres example

const asd = new User;

asd.setNewId();