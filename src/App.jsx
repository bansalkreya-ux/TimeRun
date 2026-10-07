import { toMinutes } from "./utils/time";
import { useState } from "react";
import "./App.css"

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

    <div className="app">


    <nav className="sidebar">
      <h1>TimeRun</h1>
      <p>Today</p>
      <p>History</p>
      <p>Stats</p>
    </nav>

    <main className="main">

    <div>
      <h2>Today</h2>

      <div className="form-card">
      
      <h3> Add manually </h3>


        <label> Start</label>
        <input type="time" value={startTime} onChange={(event) => setStartTime(event.target.value)} /> 
        
      

        <label> End</label>
        <input type="time" value={endTime} onChange={(event) => setEndTime(event.target.value)} /> 
        
       

        <label> Activity</label>
        <input value={activityName} onChange={(event) => setActivityName(event.target.value)} /> 
        
       

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
    </main>

    </div>
  )
}

export default App