import { toMinutes } from "./utils/time";
import { useState } from "react";
import "./App.css";

const initialSessions = [
  { id: 1, start: "09:00", end: "10:30", activity: "University" },
  { id: 2, start: "10:30", end: "11:00", activity: "YouTube" },
  { id: 3, start: "11:00", end: "12:00", activity: "Programming" },
  { id: 4, start: "13:00", end: "14:00", activity: "Lunch" },
];

function App() {
  const [sessions, setSessions] = useState(initialSessions);
  const [activityName, setActivityName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  function handleAdd() {
    if (
      activityName === "" ||
      startTime === "" ||
      endTime === "" ||
      toMinutes(endTime) <= toMinutes(startTime)
    ) {
      return;
    }

    const newSession = {
      id: Date.now(),
      start: startTime,
      end: endTime,
      activity: activityName,
    };
    const updated = [...sessions, newSession];
    setSessions(updated);
  }

  function handleDelete(id) {
    const keepSessions = sessions.filter((s) => s.id !== id);
    setSessions(keepSessions);
  }

  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const total = sessions.reduce(
    (sum, s) => sum + (toMinutes(s.end) - toMinutes(s.start)),
    0,
  );

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
          <header className="page-header">
            <h2>{today}</h2>
            <span>{total} min logged</span>
          </header>

          <div className="cards">
            {
              <div className="sessions-card">
                <h3> Sessions </h3>

                <ul>
                  {sessions.map((s) => (
                    <li key={s.id} className="session-row">
                      <span className="session-time">
                        {s.start} → {s.end}
                      </span>
                      <span className="session-activity">{s.activity}</span>
                      <span className="session-duration">
                        {toMinutes(s.end) - toMinutes(s.start)} min
                      </span>

                      <button onClick={() => handleDelete(s.id)}>X</button>
                    </li>
                  ))}
                </ul>
              </div>
            }

            <div className="form-card">
              <h3> Add manually </h3>

              <label> Activity</label>
              <input
                value={activityName}
                onChange={(event) => setActivityName(event.target.value)}
              />

              <label> Start</label>
              <input
                type="time"
                value={startTime}
                onChange={(event) => setStartTime(event.target.value)}
              />

              <label> End</label>
              <input
                type="time"
                value={endTime}
                onChange={(event) => setEndTime(event.target.value)}
              />

              <button onClick={handleAdd}>Add session</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
