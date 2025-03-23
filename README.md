# FORMIG.IA
This repository is where we will track changes and advancements to the backend.
The system will allow individual users or groups to record and manage their expenses and income, view detailed financial reports and set personalized budgets. With this, I hope to help people (and myself!) have more control over their finances in a practical and intuitive way. 💡
Claro! Vou criar dois arquivos `README.md` separados: um para o **back-end** e outro para o **front-end**. Cada um será específico para sua parte do projeto, com instruções claras sobre como configurar e executar localmente.

---

# **Backend README**

## 📖 Project Objective
The **Expense Tracker Backend** is a robust API designed to power the **Expense Tracker Multi-User System**. It provides endpoints for user authentication, expense tracking, group management, and financial reporting. Built with scalability and security in mind, this backend supports individual and shared financial tracking for multiple users.

Key features include:
- User registration and login with JWT authentication.
- CRUD operations for managing transactions (income/expenses).
- Group-based expense sharing and collaboration.
- Real-time financial data retrieval for reporting.

---

## ⚙️ How to Run Locally

### Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MySQL](https://www.mysql.com/) (or any compatible database)
- [Prisma CLI](https://www.prisma.io/) (installed via `npm`)
- [Git](https://git-scm.com/)

### Steps to Run the Backend

#### 1. Clone the Repository
```bash
git clone https://github.com/your-repo/expense-tracker-backend.git
cd expense-tracker-backend
```

#### 2. Install Dependencies
Install all required dependencies using npm:
```bash
npm install
```

#### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add the following variables:
```env
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"
JWT_SECRET=your_jwt_secret_key
PORT=5000
```
Replace `USER`, `PASSWORD`, `HOST`, `PORT`, and `DATABASE_NAME` with your MySQL credentials.

#### 4. Run Database Migrations with Prisma
Apply the database schema using Prisma migrations:
```bash
npx prisma migrate dev --name init
```

#### 5. Start the Server
Start the backend server in development mode:
```bash
npm run dev
```
The backend will run on `http://localhost:5000`.

#### 6. Test the API
You can test the API endpoints using tools like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/). The base URL for the API is `http://localhost:5000/api`.

---

## 📌 Technologies Used
- **Framework**: Node.js with Express
- **ORM**: Prisma (for MySQL database interactions)
- **Database**: MySQL
- **Authentication**: JSON Web Tokens (JWT)
- **Environment Variables**: Dotenv
- **Language**: TypeScript
- **API Documentation**: Swagger (optional)

---

## 🙋 Contributions Welcome (After Project Completion)

Once the project is complete, contributions are welcome! Here's how you can contribute:

### 1. Fork the Repository
Click the "Fork" button on the GitHub repository page to create your own copy.

### 2. Create a New Branch
```bash
git checkout -b feature/your-feature-name
```

### 3. Make Your Changes
Implement your feature or fix. Ensure your code adheres to the project's coding standards.

### 4. Test Your Changes
Run tests locally to ensure everything works as expected:
```bash
npm test
```

### 5. Submit a Pull Request
Push your changes to your forked repository and submit a pull request to the main repository. Provide a clear description of your changes and why they are valuable.

### Contribution Guidelines
- Follow the existing code style and structure.
- Write clear commit messages.
- Include tests for new features or bug fixes.
- Document any new functionality in the README.

---

Thank you for your interest in contributing to the **Expense Tracker Backend**! Together, we can make this project even more robust and secure. 😊

---


