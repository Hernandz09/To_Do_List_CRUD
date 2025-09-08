# 🧩 Sala 5: CRUD de Tareas (To-Do List)

## 👥 Integrantes y Roles (Scrum)

| Nombre             | Rol Scrum        | Rol Técnico        |
|--------------------|-----------------|--------------------|
| Adrian Gallardo    | 🧑‍🏫 Scrum Master | Backend Developer  |
| Jose Hernandez     | 👨‍💻 Developer     | Backend Developer  |
| Yasumy Pastor      | 👨‍💻 Developer     | Backend Developer  |
| Alexa Montenegro   | 👩‍💻 Developer     | Frontend Developer |
| Camila Romero      | 👩‍💻 Developer     | Frontend Developer |


## 📌 Descripción
Aplicación **Fullstack** para administrar pendientes (**To-Do List**) desarrollada con:
- **Backend:** Django REST Framework (API REST).
- **Frontend:** React (interfaz de usuario).

El sistema permite crear, leer, actualizar y eliminar tareas en tiempo real.

---

## 🎯 Objetivo
Crear una aplicación donde los usuarios puedan **gestionar sus tareas** de manera simple e intuitiva.

---

## ⚙️ Funcionalidades

### 🔹 Backend (Django REST Framework)
1. Modelo **Task** con los atributos:
   - `title` (texto de la tarea).
   - `completed` (booleano: completada o no).
2. API REST con operaciones CRUD:
   - ➕ Crear una tarea.
   - 📄 Leer todas las tareas.
   - 🔄 Actualizar el estado de una tarea (pendiente ↔ completada).
   - ❌ Eliminar una tarea.
3. Endpoints expuestos en:  
