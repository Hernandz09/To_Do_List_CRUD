import { useEffect, useState } from 'react'
import { API_BASE } from './config'
import Notification from './Notification'

const ENDPOINT = `${API_BASE}/tasks/`

export default function App() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('')
  const [notification, setNotification] = useState(null)

  const fetchTasks = async () => {
    setLoading(true)
    try {
      const res = await fetch(ENDPOINT)
      const data = await res.json()
      setTasks(data)
    } catch (err) {
      console.error(err)
      showNotification('Error al cargar tareas. Revisa tu conexión al backend.', 'error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchTasks() }, [])

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const addTask = async (e) => {
    e.preventDefault()
    if (!title.trim()) {
      showNotification('La tarea no puede estar vacía.', 'error');
      return;
    }
    try {
      await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title.trim() })
      })
      setTitle('')
      fetchTasks()
      showNotification('¡Tarea agregada con éxito!', 'success')
    } catch (error) {
      console.error('Error al agregar tarea:', error);
      showNotification('No se pudo agregar la tarea.', 'error');
    }
  }

  const toggleTask = async (task) => {
    try {
      await fetch(`${ENDPOINT}${task.id}/`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !task.completed })
      })
      fetchTasks()
      if (task.completed) {
        showNotification('¡Tarea marcada como pendiente! 🤔', 'success');
      } else {
        showNotification('¡Tarea completada, bien hecho! ✨', 'success');
      }
    } catch (error) {
      console.error('Error al cambiar estado de tarea:', error);
      showNotification('No se pudo actualizar la tarea.', 'error');
    }
  }

  const deleteTask = async (task) => {
    try {
      await fetch(`${ENDPOINT}${task.id}/`, { method: 'DELETE' })
      fetchTasks()
      showNotification('Tarea eliminada. Adiós, tarea.', 'success');
    } catch (error) {
      console.error('Error al eliminar tarea:', error);
      showNotification('No se pudo eliminar la tarea.', 'error');
    }
  }

  const completedCount = tasks.filter(t => t.completed).length

  return (
    <div className="container">
      <h1><span role="img" aria-label="retro-game"> 📝 </span> To‑Do List</h1>
      <div className="card">
        <form onSubmit={addTask}>
          <input
            type="text"
            placeholder="Nueva tarea..."
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <button type="submit">Agregar</button>
        </form>

        <div className="row" style={{ justifyContent: 'space-between', marginBottom: 20 }}>
          <span className="badge">{completedCount} completadas / {tasks.length} total</span>
          <button className="secondary" onClick={fetchTasks}>{loading ? 'Cargando...' : 'Refrescar Datos'}</button>
        </div>

        {loading ? <p className="loading">Cargando datos holográficos...</p> : (
          <ul>
            {tasks.map(task => (
              <li key={task.id}>
                <div className={`task ${task.completed ? 'done' : ''}`}>
                  <input type="checkbox" checked={!!task.completed} onChange={() => toggleTask(task)} />
                  <span>{task.title}</span>
                </div>
                <div className="row">
                  <button className="secondary" onClick={() => toggleTask(task)}>
                    {task.completed ? 'Marcar Pendiente' : 'Marcar Completada'}
                  </button>
                  <button onClick={() => deleteTask(task)}>Eliminar Tarea</button>
                </div>
              </li>
            ))}
            {tasks.length === 0 && <p className="no-tasks">No hay tareas. ¡Hora de crear nuevas misiones! 🚀</p>}
          </ul>
        )}
      </div>

      {notification && <Notification message={notification.message} type={notification.type} />}
    </div>
  )
}