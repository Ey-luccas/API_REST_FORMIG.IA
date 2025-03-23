# FORMIG.IA
This repository is where we will track changes and advancements to the backend.
The system will allow individual users or groups to record and manage their expenses and income, view detailed financial reports and set personalized budgets. With this, I hope to help people (and myself!) have more control over their finances in a practical and intuitive way. 💡


# Expense Tracker Multi-User System

## 📖 Project Objective
The **Expense Tracker Multi-User System** is a full-stack application designed to help users manage their personal and shared expenses effectively. It allows individual users or groups (e.g., families, teams) to track income, expenses, and budgets, generate financial reports, and collaborate on shared financial goals. The system provides a secure, scalable, and user-friendly platform for managing finances.

Key features include:
- User authentication and authorization (JWT).
- Individual and group-based expense tracking.
- Real-time financial reporting with charts and graphs.
- Budgeting tools to set spending limits and savings goals.
- Notifications for bill reminders and budget alerts.

---

## ⚙️ How to Run Locally

### Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MySQL](https://www.mysql.com/) (or any compatible database)
- [Prisma CLI](https://www.prisma.io/) (installed via `npm`)
- [Git](https://git-scm.com/)

### Steps to Run the Project

#### 1. Clone the Repository
```bash
git clone https://github.com/your-repo/expense-tracker.git
cd expense-tracker
```

#### 2. Backend Setup
Navigate to the `backend` directory:
```bash
cd backend
```

Install dependencies:
```bash
npm install
```

Set up the `.env` file:
Create a `.env` file in the `backend` directory and add the following variables:
```env
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"
JWT_SECRET=your_jwt_secret_key
```

Run database migrations with Prisma:
```bash
npx prisma migrate dev --name init
```

Start the backend server:
```bash
npm run dev
```
The backend will run on `http://localhost:5000`.

#### 3. Frontend Setup
Navigate to the `frontend` directory:
```bash
cd ../frontend
```

Install dependencies:
```bash
npm install
```

Start the frontend development server:
```bash
npm start
```
The frontend will run on `http://localhost:3000`.

#### 4. Access the Application
Open your browser and navigate to `http://localhost:3000`. You can now register, log in, and start using the expense tracker.

---

## 📌 Technologies Used

### Backend
- **Framework**: Node.js with Express
- **ORM**: Prisma (for MySQL database interactions)
- **Database**: MySQL
- **Authentication**: JSON Web Tokens (JWT)
- **Environment Variables**: Dotenv
- **Language**: TypeScript

### Frontend
- **Framework**: React with TypeScript
- **State Management**: Redux Toolkit or Context API
- **Styling**: Tailwind CSS or Material-UI
- **Charts**: Chart.js or Recharts
- **HTTP Client**: Axios

### DevOps and Tools
- **API Documentation**: Swagger (optional)
- **Version Control**: Git
- **Hosting**: AWS, Heroku, Render, Netlify, or Vercel
- **Testing**: Jest and React Testing Library (optional)

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

Thank you for your interest in contributing to the **Expense Tracker Multi-User System**! Together, we can make this project even more robust and user-friendly. 😊
