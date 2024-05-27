import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [names, setNames] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setNames((prevNames) => {
        const newNames = { ...prevNames };
        if (newNames[name]) {
          newNames[name]++;
        } else {
          newNames[name] = 1;
        }
        return newNames;
      });
      setName("");
    }
  };

  const sortedNames = Object.entries(names)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  console.log(sortedNames);

  return (
    <div className="App">
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">Top 10 Names</h1>

        <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter name"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
        <ul className="w-full max-w-md">
          {sortedNames.map(([name, count]) => (
            <li
              key={name}
              className="bg-white p-4 mb-2 rounded shadow-md flex justify-between items-center transform transition-all duration-500 ease-in-out"
            >
              <span>{name}</span>
              <span className="text-gray-600">{count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
