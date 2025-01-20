
## Backend Setup

The backend of Yappin Chat App is built with Express.js and TypeScript, ensuring scalability, maintainability, and high performance for real-time communication and API management.

---

## Prerequisites
1. **Node.js**: Version 16 or higher.
2. **Package Manager**: npm, Yarn, or pnpm.
3. **Database**: PostgreSQL.
4. **Redis Server**: For caching and real-time event management.
5. **Supabase**: For cloud database synchronization.

---

## Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/green-veggies/yappin-chatApp.git
cd yappin-chatApp/backend
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Variables
Create a `.env` file in the `backend` directory and configure the environment variables:


### 4. Run Database Migrations
Use Prisma to set up your database schema:
```bash
npx prisma migrate dev
```

### 5. Start the Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
The backend server will start on [http://localhost:8000](http://localhost:8000).

---

## Key Features
- **Real-time Messaging**: Powered by Socket.IO for instant communication.
- **Database Management**: PostgreSQL with Prisma ORM for robust and scalable data handling.
- **Caching**: Redis integration for efficient caching and event handling.
- **Authentication**: Google OAuth is used for user authentication and JWT is used for session management.

---

## Deployment
For production, make sure to:
1. Set the environment variables in your deployment environment.
2. Use a process manager like PM2 or Docker to run the backend.
3. Configure your database and Redis server for production.
