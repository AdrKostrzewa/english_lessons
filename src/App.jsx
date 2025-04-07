import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // czyszczenie po odmontowaniu
  }, []);

  return (
    <div style={styles.container}>
      <h1>Hej! Tutaj nauczysz się języka angielskiego! 🚀</h1>
      <p>To naprawdę proste!</p>

      <p>Aktualna godzina: {time.toLocaleTimeString()}</p>

      <button style={styles.button} onClick={() => setCount(count + 1)}>
        Zamów kurs
      </button>

      <p style={styles.counter}>Zamówiono już {count} kursów</p>
      <img src="https://flagcdn.com/w80/gb.png" alt="Flaga Wielkiej Brytanii" style={{ width: "40px", verticalAlign: "middle", marginRight: "10px" }}/>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "sans-serif",
    textAlign: "center",
    padding: "2rem",
    backgroundColor: "#182b3d",
    minHeight: "100vh",
    width: "100vw",
    boxSizing: "border-box",
    color: "#fff", // tekst biały
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    marginTop: "1rem",
    cursor: "pointer",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
  counter: {
    marginTop: "1rem",
    fontSize: "1.2rem",
  },
};

export default App;
