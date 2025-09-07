import { useEffect, useState } from 'react'
import { API_BASE } from './config'

const ENDPOINT = `${API_BASE}/tasks/`

export default function App() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('')

  const fetchTasks = async () => {
    setLoading(true)
    try {
      const res = await fetch(ENDPOINT)
      const data = await res.json()
      setTasks(data)
    } catch (err) {
      console.error(err)
      alert('No se pudo obtener tareas. Asegúrate que el backend esté en http://localhost:8000')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchTasks() }, [])

  const addTask = async (e) => {
    e.preventDefault()
    if (!title.trim()) return
    await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: title.trim() })
    })
    setTitle('')
    fetchTasks()
  }

  const toggleTask = async (task) => {
    await fetch(`${ENDPOINT}${task.id}/`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !task.completed })
    })
    fetchTasks()
  }

  const deleteTask = async (task) => {
    if (!confirm('¿Eliminar tarea?')) return
    await fetch(`${ENDPOINT}${task.id}/`, { method: 'DELETE' })
    fetchTasks()
  }

  const completedCount = tasks.filter(t => t.completed).length

  return (
    <div className="container">
      <h1>🧩 Sala 5: To‑Do List</h1>
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

        <div className="row" style={{justifyContent:'space-between', marginBottom: 12}}>
          <span className="badge">{completedCount} completadas / {tasks.length} total</span>
          <button className="secondary" onClick={fetchTasks}>{loading ? 'Cargando...' : 'Refrescar'}</button>
        </div>

        {loading ? <p>Cargando...</p> : (
          <ul>
            {tasks.map(task => (
              <li key={task.id}>
                <div className={`task ${task.completed ? 'done' : ''}`}>
                  <input type="checkbox" checked={!!task.completed} onChange={() => toggleTask(task)} />
                  <span>{task.title}</span>
                </div>
                <div className="row">
                  <button className="secondary" onClick={() => toggleTask(task)}>
                    {task.completed ? 'Marcar pendiente' : 'Marcar completada'}
                  </button>
                  <button onClick={() => deleteTask(task)}>Eliminar</button>
                </div>
              </li>
            ))}
            {tasks.length === 0 && <p>No hay tareas aún. ¡Agrega una! ✨</p>}
          </ul>
        )}
      </div>
    </div>
  )
}
