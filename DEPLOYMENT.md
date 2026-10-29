# Otake Website Deployment Guide (Render)

## Project Structure
- `otake-backend/` - Node.js/Express API (MongoDB)
- `Otake-Frontend/` - React + Vite marketing website
- `otake-admin/` - React + Vite admin panel

## Steps to Deploy on Render

### 1. Push to GitHub
Push this entire project to your GitHub repository.

### 2. Deploy Backend
1. Go to [render.com](https://render.com) → New → Web Service
2. Connect your repo
3. Settings:
   - Name: `otake-backend`
   - Root Directory: `otake-backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
4. Add Environment Variables:
   - `MONGO_URI` - Your MongoDB Atlas connection string
   - `JWT_SECRET` - A strong secret key
   - `CLIENT_URL` - Your frontend URL (e.g., https://otake-frontend.onrender.com)
   - `ADMIN_URL` - Your admin URL (e.g., https://otake-admin.onrender.com)
   - `ALLOW_ORIGINS` - Comma separated URLs
   - `NODE_ENV` - `production`
   - `PORT` - `5000` (optional)

### 3. Deploy Frontend
1. New → Static Site
2. Name: `otake-frontend`
3. Root Directory: `Otake-Frontend`
4. Build Command: `npm install && npm run build`
5. Publish Directory: `dist`
6. Environment Variable:
   - `VITE_API_URL` - Your backend URL (e.g., https://otake-backend.onrender.com)

### 4. Deploy Admin Panel
1. New → Static Site
2. Name: `otake-admin`
3. Root Directory: `otake-admin`
4. Build Command: `npm install && npm run build`
5. Publish Directory: `dist`
6. Environment Variable:
   - `VITE_API_URL` - Your backend URL (e.g., https://otake-backend.onrender.com)

### 5. Update URLs
After deployment, update backend `.env`/Render env vars with actual frontend and admin URLs, then redeploy backend.

## Local Development
1. Backend: `cd otake-backend && npm install && npm run dev`
2. Frontend: `cd Otake-Frontend && npm install && npm run dev`
3. Admin: `cd otake-admin && npm install && npm run dev`
