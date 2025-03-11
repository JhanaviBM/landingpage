const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jbm123",  // Add your MySQL password
  database: "contact_db",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL Database");
  }
});

// Handle Contact Form Submission
app.post("/contact", (req, res) => {
  const { name, email, phone, message } = req.body;
  const sql = "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, phone, message], (err, result) => {
    if (err) {
      console.error("Error saving data:", err);
      res.status(500).json({ error: "Database error" });
    } else {
      res.status(200).json({ message: "Message saved successfully!" });
    }
  });
});

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
