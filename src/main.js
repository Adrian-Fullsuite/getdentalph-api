import express from "express";
import authenticate from "./routes/authenticate.js";
import appointment from "./routes/appointment.js";
import customer from "./routes/customer.js";
import dentist from "./routes/dentist.js";

const serverStart = performance.now();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(authenticate);
app.use(appointment);
app.use(customer);
app.use(dentist);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const serverIdle = performance.now();
console.log(
  "\x1b[42m",
  `Server took ${(serverIdle - serverStart).toFixed(2)}ms to start.`,
  "\x1b[0m"
);
