const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

function welcomeMessage() {
  let message = 'Welcome to our service!';
  return message;
}

app.get('/welcome', (req, res) => {
  res.send(welcomeMessage());
});

function greetingMessage(username) {
  return 'Hello, ' + username + '!';
}

app.get('/greet', (req, res) => {
  let username = req.query.username;
  res.send(greetingMessage(username));
});

function checkPassword(password) {
  if (password.length > 15) return 'Password is strong';
  else return 'Password is weak';
}

app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send(checkPassword(password));
});

function sumCalculate(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

app.get('/sum', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(sumCalculate(num1, num2).toString());
});

function subscriptionStatus(username, isSubscribed) {
  if (isSubscribed === 'true') return username + ' is subscribed';
  else return username + ' is not subscribed';
}

app.get('/subscription-status', (req, res) => {
  let username = req.query.username;
  let isSubscribed = req.query.isSubscribed;
  res.send(subscriptionStatus(username, isSubscribed));
});

function finalPrice(price, discount) {
  let discountedPrice = price - (price * discount) / 100;
  return discountedPrice;
}

app.get('/discounted-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(finalPrice(price, discount).toString());
});

function greetingMessage(age, gender, name) {
  return (
    'Hello, ' + name + '!' + ' You are a ' + age + ' year old ' + gender + '.'
  );
}

app.get('/personalized-greeting', (req, res) => {
  let age = parseFloat(req.query.age);
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(greetingMessage(age, gender, name));
});

function finalPrice(price, discount, tax) {
  let discountedPrice = price - (price * discount) / 100;
  let priceFinal = discountedPrice + (discountedPrice * tax) / 100;
  return priceFinal;
}

function totalExerciseTime(running, cycling, swimming) {
  let totalTime = running + cycling + swimming;
  return totalTime;
}

app.get('/total-exercise-time', (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);
  res.send(totalExerciseTime(running, cycling, swimming).toString());
});

app.get('/final-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(finalPrice(price, discount, tax).toString());
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
