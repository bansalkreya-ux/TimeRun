import { toMinutes } from "./utils/time";
import { useState } from "react";


const initialSessions = [
  { start: "09:00", end: "10:30", activity: "University" },
  { start: "10:30", end: "11:00", activity: "YouTube" },
  { start: "11:00", end: "12:00", activity: "Programming" },
  { start: "13:00", end: "14:00", activity: "Lunch"}
]




function App() {
  
  const [sessions, setSessions] = useState(initialSessions)

  const [showSessions, setShowSessions] = useState(false)

  function handleShow() {
    setShowSessions(!showSessions)
  }
  
  return (
    <div>
      <h1>TimeRun</h1>
      <p>Easiest way to keep track of where your time is going!</p>

      <h2>Today</h2>

      <button onClick={handleShow}>
        Show all sessions
      </button>

      {showSessions && (
        <ul>
        {sessions.map((s) => (
          <li key={s.start}>
            {s.start} → {s.end} {s.activity} ({toMinutes(s.end) - toMinutes(s.start)} min)
          </li>
        ))}
      </ul>
      )}
    </div>
  )
}

export default App