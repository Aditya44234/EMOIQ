# EMOIQ 

A mobile-first web app for quick emotion analysis from text reflections.

## Features
- Enter a short reflection and get a mock emotion analysis.
- Clean, mobile-first UI.
- Fast, simple, and privacy-friendly (no real data stored).

## Tech Stack
- **Frontend:** React.js (TypeScript)
- **Backend:** Python Flask API

---

## Getting Started

### 1. Backend (Flask API)

#### Setup
```bash
cd backend
python -m venv venv
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate
pip install -r requirements.txt
```

#### Run the API
```bash
python app.py
```
The API will be available at `http://localhost:5000/analyze`.

---

### 2. Frontend (React)

#### Setup
```bash
cd frontend
npm install
```

#### Run the App
```bash
npm start
```
The app will open at `http://localhost:3000` and will connect to the backend automatically.

---

## Usage
1. Type your reflection (e.g., "I feel nervous about my first job interview").
2. Click **Submit**.
3. See the detected emotion and confidence score.

---

## Project Structure
```
EMOIQ/
  backend/        # Flask API
    app.py
    requirements.txt
  frontend/       # React app (TypeScript)
    src/
    public/
    ...
  README.md
```

---

## Notes
- For development, the React app proxies API requests to the Flask backend.
- If you change backend port, update the `proxy` field in `frontend/package.json`.
- This is a demo app; emotion analysis is randomly generated.

---

## License
MIT 

---

## Deploying to Production

Absolutely! Here’s a clear, step-by-step guide for deploying your EMOIQ app, covering both the **frontend (React)** and **backend (Flask)**.  
I’ll use **Vercel** for the frontend and **Render** for the backend, as these are free, beginner-friendly, and require no credit card.

---

## 1. Deploy the Flask Backend (Render)

### **A. Prepare your backend for deployment**
1. **Add a `requirements.txt`** (already done).
2. **Add a `render.yaml` (optional, but helps automate):**
   - Not strictly required, but you can add it for auto-deploys and config.

3. **(Optional but recommended) Use Gunicorn for production:**
   - Add to `requirements.txt`:
     ```
     gunicorn
     ```
   - Create a `wsgi.py` in your backend folder:
     ```python
     from app import app

     if __name__ == "__main__":
         app.run()
     ```
   - Your start command will be:  
     ```
     gunicorn wsgi:app
     ```

### **B. Push your backend to GitHub**
- Create a new repo (e.g., `emoiq-backend`).
- Push your `backend/` folder contents (including `requirements.txt`, `app.py`, and optionally `wsgi.py`).

### **C. Deploy on Render**
1. Go to https://render.com and sign up/log in.
2. Click **“New +” → “Web Service”**.
3. Connect your GitHub and select your backend repo.
4. Set:
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `gunicorn wsgi:app` (or `python app.py` for dev, but Gunicorn is better for prod)
   - **Environment:** Python 3.x
5. Click **Create Web Service**.
6. Wait for deploy. You’ll get a public URL like `https://emoiq-backend.onrender.com`.

---

## 2. Deploy the React Frontend (Vercel)

### **A. Push your frontend to GitHub**
- Create a new repo (e.g., `emoiq-frontend`).
- Push your `frontend/` folder contents.

### **B. Deploy on Vercel**
1. Go to https://vercel.com and sign up/log in.
2. Click **“New Project”** and import your frontend repo.
3. Set:
   - **Framework Preset:** React
   - **Root Directory:** `frontend` (if your repo has both frontend and backend folders)
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
4. **Set environment variable for API URL:**
   - In Vercel dashboard, go to Project → Settings → Environment Variables.
   - Add:  
     ```
     REACT_APP_API_URL = https://your-backend-url.onrender.com/analyze
     ```
   - In your React code, use:
     ```ts
     const API_URL = process.env.REACT_APP_API_URL || '/analyze';
     ```
5. Click **Deploy**.

---

## 3. Update Your React App to Use the Deployed Backend

- In production, you must use the full backend URL (not `/analyze`).
- Use the environment 