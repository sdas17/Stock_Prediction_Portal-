# Setup & Installation

This document covers installing and using `python-decouple` for the Python backend, adding a `.env` file and examples for Django usage, and installing Bootstrap in the React (Vite) frontend.

## Python — `python-decouple`

- Install into your Python environment (recommended inside a virtualenv):

```bash
pip install python-decouple
```

- Add to `requirements.txt` if you track dependencies:

```
python-decouple
```

- Basic usage (example in a Django `settings.py` or any Python module):

```python
from decouple import config, Csv

# read simple values
SECRET_KEY = config('SECRET_KEY')
DEBUG = config('DEBUG', default=False, cast=bool)

# lists (comma separated in .env)
ALLOWED_HOSTS = config('ALLOWED_HOSTS', default='', cast=Csv())

# typed value with default
PORT = config('PORT', default=8000, cast=int)
```

## .env file example

Create a file named `.env` at your project root (do NOT commit this file). Example contents:

```
SECRET_KEY=super-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
PORT=8000
DATABASE_URL=sqlite:///db.sqlite3
```

Add `.env` and sensitive files to `.gitignore`:

```
.env
db.sqlite3
__pycache__/
```

## Django-specific notes

- In `settings.py`, replace hard-coded secrets with `config(...)` calls (see example above).
- For production, set `DEBUG=False` and provide a secure `SECRET_KEY` via environment variables or your deployment platform.

## Git setup quick checklist

- Initialize repo (if not already):

```bash
git init
git add .
git commit -m "Initial commit"
```

- Ensure `.env` and local DB files are ignored (see `.gitignore` example above).

## Frontend — Installing Bootstrap in the React (Vite) app

This workspace contains a Vite React app at `frontend_portal/my-react-app/`.

- From the project root, change to the React app folder and install Bootstrap:

```powershell
cd frontend_portal/my-react-app
npm install bootstrap
# or: yarn add bootstrap
```

- Import Bootstrap CSS in your entry file (e.g., `src/main.jsx` or `src/index.jsx`):

```javascript
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'

createRoot(document.getElementById('root')).render(<App />)
```

- If you need Bootstrap JS (for tooltips, dropdowns), import the bundle:

```javascript
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
```

- Optional: use `react-bootstrap` for React components:

```bash
npm install react-bootstrap
```

## Run the apps

- Backend (Django dev server):

```powershell
cd backend_api/stocpredicationapi
python manage.py runserver
```

- Frontend (Vite dev):

```powershell
cd frontend_portal/my-react-app
npm run dev
```

## Next steps

- I updated this documentation file to include clear install and usage steps. If you'd like, I can:
	- Add a sample `.env.example` file to the repo
	- Add the `python-decouple` import and example usage to `backend_api/stocpredicationapi/settings.py`
	- Install Bootstrap in the frontend project and import it into `src/main.jsx`

If you want any of the above automated, tell me which one to do next.

#boostrap class name documetnaiotn
#python manage.py migreate
