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

## 🗄️ Database Setup
Create a table named **`schools`** in MySQL:

```sql
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL
);

```
---

##  Technologies Used

| Technology  | Role                          |
|-------------|-------------------------------|
| Node.js     | JavaScript runtime environment|
| Express.js  | Web framework for API          |
| PostgreSQL  | Relational database system     |
| `pg`        | PostgreSQL client for Node.js  |
| dotenv      | Manage environment variables   |
| cors        | Enable cross-origin requests   |

---




