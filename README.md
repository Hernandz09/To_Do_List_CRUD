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
#### Diagrama de casos de uso 
<img width="705" height="199" alt="NT0ngiCm383XNQSGsJEy9FCZ9UtMhKrtuOXYS6AGvAMbTwz3izZUVlXiB8rg99RM0EGi2iwQI7m447P6spCmDZUlnYlXFRRdYDTS3Ru1yqdAZZIJIPW4ZOIfGLASfxyIF5Wmv9k42_-S7h0huSbPek1VrNDzgIx1htwhp00VW6C0RDl__HTLTrNtLGymyhRiw_W2" src="https://github.com/user-attachments/assets/c5133de7-c875-4e11-ac16-56fb0fc11f0a" />

#### Diagrama de Secuencia 
![Imagen de WhatsApp 2025-09-07 a las 15 28 42_413acd98](https://github.com/user-attachments/assets/6f49971d-39b3-4688-8ac4-39a32f72661c)
