# Backend (Django + DRF)

## Pasos rápidos (Windows / macOS / Linux)
```bash
cd backend
python -m venv venv
# Windows
venv\Scripts\activate
# macOS/Linux
# source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```

Endpoints:
- `GET    /tasks/`  -> lista de tareas
- `POST   /tasks/`  -> crear (JSON: {"title": "texto"})
- `GET    /tasks/<id>/` -> detalle
- `PATCH  /tasks/<id>/` -> actualizar parcial (por ejemplo {"completed": true}) o sin body alterna estado
- `PUT    /tasks/<id>/` -> actualizar total
- `DELETE /tasks/<id>/` -> eliminar
