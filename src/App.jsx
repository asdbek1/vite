import { useState } from "react";

function App() {
  const [name, setName] = useState("asadbek");
  const [message, setMessage] = useState("8");

  return (
    <div>
      <h2> Ismni ko'rsatish</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
       <p>Salom, {name}</p>

      <h2> Belgilar soni</h2>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      <p>Belgilar: {message.length}</p>
    </div>
  );
}
export default App;