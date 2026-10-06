import { toMinutes } from "./utils/time";
import { useState } from "react";

const initialSessions = [
  { id: 1, start: "09:00", end: "10:30", activity: "University" },   
  { id: 2, start: "10:30", end: "11:00", activity: "YouTube" },      
  { id: 3, start: "11:00", end: "12:00", activity: "Programming" },  
  { id: 4, start: "13:00", end: "14:00", activity: "Lunch" }         
]

function App() {
  const [sessions, setSessions] = useState(initialSessions)
  const [showSessions, setShowSessions] = useState(false)

  function handleShow() {
    setShowSessions(!showSessions)
  }

  function handleAdd() {
    const newSession = { id: Date.now(), start: "16:00", end: "18:00", activity: "Dinner" }  
    const updated = [...sessions, newSession]
    setSessions(updated)
  }

  function handleDelete(id){
    const keepSessions = sessions.filter((s) => s.id !== id)
    setSessions(keepSessions)
  }


  return (
    <div>
      <h1>TimeRun</h1>
      <p>Easiest way to keep track of where your time is going!</p>

      <h2>Today</h2>

      <button onClick={handleShow}>
        Show all sessions
      </button>

      <button onClick={handleAdd}>
        Add session
      </button>

      {showSessions && (
        <ul>
          {sessions.map((s) => (
            <li key={s.id}>
              {s.start} → {s.end} {s.activity} ({toMinutes(s.end) - toMinutes(s.start)} min)
              <button onClick={() => handleDelete(s.id)}> 
                X
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App