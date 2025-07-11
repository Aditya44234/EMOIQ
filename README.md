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