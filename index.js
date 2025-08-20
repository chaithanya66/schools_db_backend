const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false,
  },
});

const createTableQuery = `
CREATE TABLE IF NOT EXISTS schools (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
`;

pool
  .query(createTableQuery)
  .then(() => {
    console.log("Schools table created or already exists.");

    const PORT = process.env.PORT || 5004;
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error creating schools table:", err);
    process.exit(1);
  });

function calculateDistance(lat1, lon1, lat2, lon2) {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const R = 6371;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

app.get("/", (req, res) => {
  res.send("School Management API is running");
});

app.post("/addSchool", async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;

    if (
      !name ||
      !address ||
      latitude === undefined ||
      longitude === undefined ||
      typeof name !== "string" ||
      typeof address !== "string" ||
      isNaN(parseFloat(latitude)) ||
      isNaN(parseFloat(longitude))
    ) {
      return res
        .status(400)
        .json({ error: "All fields are required with valid data types" });
    }

    const insertQuery =
      "INSERT INTO schools (name, address, latitude, longitude) VALUES ($1, $2, $3, $4) RETURNING id";

    const { rows } = await pool.query(insertQuery, [
      name,
      address,
      parseFloat(latitude),
      parseFloat(longitude),
    ]);

    return res.status(201).json({
      id: rows[0].id,
      name,
      address,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
    });
  } catch (error) {
    console.error("Error in /addSchool:", error);
    return res.status(500).json({ error: "Server error" });
  }
});

app.get("/listSchools", async (req, res) => {
  try {
    const userLat = parseFloat(req.query.latitude);
    const userLon = parseFloat(req.query.longitude);

    if (isNaN(userLat) || isNaN(userLon)) {
      return res.status(400).json({ error: "Invalid coordinates" });
    }

    const { rows } = await pool.query("SELECT * FROM schools");

    const sortedSchools = rows
      .map((school) => {
        const distance = calculateDistance(
          userLat,
          userLon,
          school.latitude,
          school.longitude
        );
        return { ...school, distance: distance.toFixed(2) };
      })
      .sort((a, b) => a.distance - b.distance);

    return res.json(sortedSchools);
  } catch (error) {
    console.error("Error in /listSchools:", error);
    return res.status(500).json({ error: "Server error" });
  }
});
