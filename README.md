# PPOB REST API

This is a RESTful API for a simple PPOB (Payment Point Online Bank) system built with **Node.js**, **Express.js**, **MySQL** and **Cloudinary**.

## 📚 Available API Endpoints

**Base URL**: `https://ntpay.up.railway.app`  
You can test endpoints using Postman or other API clients.

### 🔐 Authentication

- **POST** `/registration` — User Registration

  **Request Body:**

  ```json
  {
    "email": "jhondoe@gmail.com",
    "first_name": "Jhon",
    "last_name": "Doe",
    "password": "jhon1234"
  }
  ```

- **POST** `/login` — User Login (JWT + cookie)

  **Request Body:**

  ```json
  {
    "email": "jhondoe@gmail.com",
    "password": "jhon1234"
  }
  ```

- **POST** `/logout` — User Logout

### 👤 User Profile

- **GET** `/profile` — View Profile

- **PUT** `/profile/update` — Update Profile

  **Request Body:**

  ```json
  {
    "first_name": "Jhon Edited",
    "last_name": "Doe Edited"
  }
  ```

- **PUT** `/profile/image` — Update Profile Image (via Cloudinary)

  **Request Body:**

  - Content-Type: `multipart/form-data`
  - Field: `file` (file upload)
  - File Type: `jpeg` or `png`

### 📢 Public Info

- **GET** `/banner` — View Banner

- **GET** `/services` — View Services (with JWT)

### 💰 Balance & Top Up

- **GET** `/balance` — Check Balance

- **POST** `/topup` — Top Up Balance

  **Request Body:**

  ```json
  {
    "top_up_amount": 100000
  }
  ```

### 💳 Transactions

- **POST** `/transaction` — Make Transaction (Pulsa, Game Voucher, etc.)

  **Request Body:**

  ```json
  {
    "service_code": "PULSA"
  }
  ```

- **GET** `/transaction/history` — View Transaction History

## ⚙️ Tech Stack

- Node.js
- Express.js
- MySQL (Raw Queries with Prepared Statements)
- JWT (JSON Web Tokens)
- Cookies (Tokens are stored in cookies)
- Cloudinary (Media storage for profile image)
- Railway (Cloud Deployment)

## 📁 Folder Structure

- Please check the top of this repo

## 🗃️ Database Schema (DDL)

The SQL script to create the database schema is available at:

- **/ backend / databases / ddl.sql**
- **/ backend / databases / seed.sql**

### 🧪 Import to MySQL

Use the following command to import it:

```bash
mysql -u root -p yourdatabasename < backend/databases/ddl.sql
mysql -u root -p yourdatabasename < backend/databases/seed.sql
```

## 📌 How to Run Locally

Follow these steps to run this project locally:

### 1. Clone repository

```bash
git clone https://github.com/ridhohakiki00/ntpay.git
cd ntpay
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a .env file:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_db_name
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

NODE_ENV=development
PORT=3000
```

### 4. Start the server:

```bash
npm run dev
```

## ✅ Requirements Checklist

- ✅ REST API sesuai kontrak Swagger
- ✅ Raw query dengan prepared statements
- ✅ Validasi input & error handling
- ✅ Perhitungan saldo akurat (Top Up & Transaksi)
- ✅ DDL dan Seed disertakan
- ✅ Deploy ke Railway
- ✅ Kode bersih dan terstruktur

## 👨‍💻 Author

**Ridho Hakiki**  
📧 [ridhohakiki00@gmail.com](mailto:ridhohakiki00@gmail.com)  
🔗 [GitHub: ridhohakiki00](https://github.com/ridhohakiki00)
