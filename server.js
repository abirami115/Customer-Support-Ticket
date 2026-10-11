// Load environment variables
require("dotenv").config();

// Import packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("✅ MongoDB Connected");
})
.catch((err) => {
    console.log("❌ MongoDB Connection Error:", err);
});

// Ticket Schema
const ticketSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Model
const Ticket = mongoose.model("Ticket", ticketSchema);

// Home Route
app.get("/", (req, res) => {
    res.send("Customer Support Ticket API Running...");
});

// Create Ticket
app.post("/tickets", async (req, res) => {
    try {

        const ticket = new Ticket(req.body);

        await ticket.save();

        res.status(201).json({
            message: "Ticket Created Successfully",
            data: ticket
        });

    } catch (error) {

        res.status(500).json({
            message: "Error Creating Ticket",
            error: error.message
        });

    }
});

// Get All Tickets
app.get("/tickets", async (req, res) => {

    try {

        const tickets = await Ticket.find();

        res.json(tickets);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

// Get Single Ticket
app.get("/tickets/:id", async (req, res) => {

    try {

        const ticket = await Ticket.findById(req.params.id);

        res.json(ticket);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

// Update Ticket
app.put("/tickets/:id", async (req, res) => {

    try {

        const ticket = await Ticket.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({
            message: "Ticket Updated Successfully",
            data: ticket
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

// Delete Ticket
app.delete("/tickets/:id", async (req, res) => {

    try {

        await Ticket.findByIdAndDelete(req.params.id);

        res.json({
            message: "Ticket Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

// Server
const PORT = process.env.PORT || 3000; 



app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
}); 





