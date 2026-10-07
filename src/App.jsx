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
  const [activityName, setActivityName] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")

  function handleShow() {
    setShowSessions(!showSessions)
  }

  function handleAdd() {

    if (activityName === "" || startTime === "" || endTime === "" || toMinutes(endTime) <= toMinutes(startTime)) {
      return 
    }


    const newSession = { id: Date.now(), start:startTime, end:endTime, activity:activityName }  
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

      <div>
        <input type="time" value={startTime} onChange={(event) => setStartTime(event.target.value)}>
        
        </input>

        <input type="time" value={endTime} onChange={(event) => setEndTime(event.target.value)}>
        
        </input>

      

      <input value={activityName} onChange={(event) => setActivityName(event.target.value)}>
      
      </input>

      <button onClick={handleAdd}>
        Add session
      </button>

      </div>

      <div>
         <button onClick={handleShow}>
          Show all sessions
        </button>
      </div>

     

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