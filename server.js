// Importing the express library
const express = require("express");

// Creating an express application instance
const app = express();

// Defining a function to add two numbers
const add = (n1, n2) => { return n1 + n2; }

// Route to handle addition operation
app.get("/add", (req, res) => {
    try {
        // Parsing input numbers from query parameters
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);

        // Checking if inputs are valid numbers
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
            logg
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }

        // Calculating the result
        const result = n1 + n2;

        // Sending the result as JSON response
        res.status(200).json({ statuscode: 200, data: result });
    } catch (error) {
        // Handling errors and sending error response
        console.log(error);
        res.status(500).json({ statuscode: 500, msg: error.toString() });
    }
});

// Similar routes for subtraction, multiplication, division, exponentiation, square root, and modulo
app.get("/sub", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }
        const result = n1 - n2;
        res.status(200).json({ statuscode: 200, data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ statuscode: 500, msg: error.toString() });
    }
});

app.get("/multiply", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }
        const result = n1 * n2;
        res.status(200).json({ statuscode: 200, data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ statuscode: 500, msg: error.toString() });
    }
});

app.get("/divide", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }
        //Check if dividing by 0
        if (n2 == 0) {
            throw new Error("Cannot divide by 0")
        }
        const result = n1 / n2;
        res.status(200).json({ statuscode: 200, data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ statuscode: 500, msg: error.toString() });
    }
});

app.get("/expo", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }
        const result = n1 ** n2;
        res.status(200).json({ statuscode: 200, data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ statuscode: 500, msg: error.toString() });
    }
});

app.get("/sqrt", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        const result = Math.sqrt(n1);
        res.status(200).json({ statuscode: 200, data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ statuscode: 500, msg: error.toString() });
    }
});

app.get("/modulo", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }
        //Check if modulo by 0
        if (n2 == 0) {
            throw new Error("Cannot modulo by 0")
        }
        const result = n1 % n2;
        res.status(200).json({ statuscode: 200, data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ statuscode: 500, msg: error.toString() });
    }
});

// Setting the port to listen for incoming connections
const port = 3000;

// Starting the server
app.listen(port, () => {
    console.log("hello I'm listening to port " + port);
});
