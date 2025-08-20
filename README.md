# School Assignment Backend API

A RESTful backend API for managing school data, built with Node.js, Express, and PostgreSQL. It supports adding new schools and listing schools sorted by distance from a user's geographic location.

---

##  Features

- Add schools with details: name, address, latitude, and longitude.
- Retrieve schools sorted by proximity to given coordinates.
- Accurate distance calculation using the Haversine formula.
- PostgreSQL for persistent and reliable data storage.
- Cross-Origin Resource Sharing (CORS) enabled.
- Environment variable configuration for seamless deployment.

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

##  Installation & Setup

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v14+ recommended)
- A PostgreSQL database instance (hosted or local)
- npm (comes with Node.js)

### Steps

1. **Clone the repository**

2. **Install dependencies**


3. **Create a `.env` file** in the project root with the following content—replace values accordingly:

4. **Run the server**


5. The server will start on `http://localhost:5004` (or your defined port).

---

## 📡 API Endpoints

### Add a New School


#### Request Body


#### Success Response (201 Created)


---

### List Schools by Proximity

#### Query Parameters

| Parameter  | Description          | Required |
|------------|----------------------|----------|
| latitude   | User's latitude      | Yes      |
| longitude  | User's longitude     | Yes      |

#### Success Response (200 OK)


---

## ⚠️ Error Handling

- Returns `400 Bad Request` for invalid or missing parameters.
- Returns `500 Internal Server Error` for unexpected server issues.

---

## 🎨 Project Structure


---

## 🤝 Contribution

Contributions, issue reports, and feature requests are welcome! Feel free to fork and submit pull requests.

---

## 📄 License

This project is licensed under the MIT License.

---

## ✉️ Contact

For any inquiries, please reach out via GitHub or email.

---

*Thank you for checking out the School Assignment Backend API!*

---

# Visual Design Elements for GitHub README (Markdown)

> - Use badges (optional) for build status, license, etc. Example:
> 
> ```
> ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg emoji/icons for better visual appeal:
> 
> ```
> ## 🚀 Features
> ## 🔧 Technologies Used
> ## 🛠️ Installation & Setup
> ## 📡 API Endpoints
> ## ⚠️ Error Handling
> ## 🤝 Contribution
> ## 📄 License
> ## ✉️ Contact
> ```
>
> - Use code blocks (fenced with ```
> - Use tables for neat presentation of data like technologies or parameters.
> - Separate sections with horizontal rules (`---`).
>
> - Maintain consistent indentation and spacing in code blocks and lists.

***

If you want, I can generate this README file for immediate upload or provide a styled HTML preview for visual reference.

