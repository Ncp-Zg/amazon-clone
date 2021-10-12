const functions = require("firebase-functions");
const express = require("express");

const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")("secret_key");


// API

// App config

const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes

app.get("/",(request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request,response) => {
    const total = request.query.total;
    console.log("payment request recieved >>>>",total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
});

// Listen Command

exports.api = functions.https.onRequest(app)


// Example endpoint
// http://localhost:5001/clone-71863/us-central1/api