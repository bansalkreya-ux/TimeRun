const sessions = [
  { start: "09:00", end: "10:30", activity: "University" },
  { start: "10:30", end: "11:00", activity: "YouTube" },
  { start: "11:00", end: "12:00", activity: "Programming" },
  { start: "13:00", end: "14:00", activity: "Lunch"}
]

function App() {
  return (
    <div>
      <h1>TimeRun</h1>
      <p>Easiest way to keep track of where your time is going!</p>

      <h2>Today</h2>
      <ul>
        {sessions.map((s) => (
          <li key={s.start}>
            {s.start} → {s.end} {s.activity}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App