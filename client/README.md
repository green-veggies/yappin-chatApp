
## Frontend Setup

The frontend of Yappin Chat App is built using Next.js and TypeScript. It offers a fast and interactive user experience with server-side rendering and static site generation capabilities.

---

## Prerequisites
1. **Node.js**: Version 16 or higher.
2. **Package Manager**: npm, Yarn, or pnpm.

---

## Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/green-veggies/yappin-chatApp.git
cd yappin-chatApp/frontend
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
Create a `.env.local` file in the `frontend` directory and configure the environment variables:


### 4. Start the Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
The frontend will be available at [http://localhost:3000](http://localhost:3000).

---

## Key Features
- **Responsive Design**: Developed with ShadCN components and modern CSS techniques.
- **Real-time Updates**: Integrated with Supabase for real-time data synchronization.
- **Authentication**: Google OAuth for user login.
