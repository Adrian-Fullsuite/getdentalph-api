import express from "express";
import appointment from "./routes/appointment.js";
import customer from "./routes/customer.js";
import dentist from "./routes/dentist.js";
import transaction from "./routes/transaction.js";
import authentication from "./routes/authentication.js";
import benchmark from "express-status-monitor";

const serverStart = performance.now();
const app = express();
const port = process.env.PORT || 3000;

app.use(benchmark());
app.use(express.json());
app.use(appointment);
app.use(customer);
app.use(dentist);
app.use(transaction);
app.use(authentication);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const serverIdle = performance.now();
console.log("------------------------------");
console.log(
  "\x1b[32m",
  `Server took ${(serverIdle - serverStart).toFixed(2)}ms to start.`,
  "\x1b[0m"
);
console.log("------------------------------");
const used = process.memoryUsage();
console.log(used);
