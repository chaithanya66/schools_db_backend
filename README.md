# 🏫 School Management API (Node.js + MySQL)

A simple **RESTful API** built with **Node.js** and **Express.js**, connected to a **MySQL database**, to manage school data.  
This project demonstrates **API development, input validation, and geolocation-based sorting** of schools by proximity to a user-specified location.  

---

## 📋 Assignment Details
**Task:** Develop Node.js APIs for School Management  
**Objective:** Allow users to:
- ➕ Add new schools  
- 📍 Retrieve schools sorted by distance from a user’s location  

---

## ⚙️ Tech Stack
- **Backend:** Node.js, Express.js  
- **Database:** MySQL  
- **Validation:** Express Middleware  
- **Geolocation:** Haversine Formula for distance calculation  
- **Testing:** Postman / cURL  

---

## 🗄️ Database Setup
Run the following SQL to create the database and table:

```sql
CREATE DATABASE school_db_assign;

USE school_db_assign;

CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL
);
```
🚀 API Endpoints
1️⃣ Add School API

Endpoint: /addSchool
Method: POST
Description: Adds a new school to the database.

✅ Request (cURL)
curl -X POST http://localhost:5000/addSchool \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Green Valley High School",
    "address": "123 Main Street, City",
    "latitude": 17.385044,
    "longitude": 78.486671
  }'

📦 Example Response
{
  "success": true,
  "message": "School added successfully",
  "school": {
    "id": 1,
    "name": "Green Valley High School",
    "address": "123 Main Street, City",
    "latitude": 17.385044,
    "longitude": 78.486671
  }
}

2️⃣ List Schools by Distance API

Endpoint: /listSchools
Method: GET
Description: Fetch all schools and return them sorted by proximity to user’s location.

✅ Request (cURL)
curl -X GET "http://localhost:5000/listSchools?latitude=17.3850&longitude=78.4867"

📦 Example Response
{
  "success": true,
  "schools": [
    {
      "id": 1,
      "name": "Green Valley High School",
      "address": "123 Main Street, City",
      "latitude": 17.385044,
      "longitude": 78.486671,
      "distance_km": 0.00
    },
    {
      "id": 2,
      "name": "Blue Ridge Academy",
      "address": "456 Elm Street, City",
      "latitude": 17.400000,
      "longitude": 78.490000,
      "distance_km": 1.74
    }
  ]
}

📐 Distance Calculation (Haversine Formula)

To calculate the distance between two latitude/longitude points, the Haversine formula is used:

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(2); // Distance in KM
}

🧪 Testing with Postman

Import the Postman collection (School Management API.postman_collection.json).

Test /addSchool and /listSchools APIs with your desired input.

📤 Deliverables

✅ Source code repository with complete API implementation

✅ MySQL database schema

✅ Live API endpoints (if hosted)

✅ Postman collection for testing

👨‍💻 Author

Chaithanya Neelam
📌 GitHub: chaithanya66
