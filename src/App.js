import { useState } from "react";
import "./App.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  const [name, setName] = useState("");
  const [names, setNames] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const lowerCaseName = name.trim().toLowerCase();
    if (lowerCaseName) {
      setNames((prevNames) => {
        const newNames = { ...prevNames };
        if (newNames[lowerCaseName]) {
          newNames[lowerCaseName]++;
        } else {
          newNames[lowerCaseName] = 1;
        }
        return newNames;
      });
      setName("");
    }
  };

  const sortedNames = Object.entries(names)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  // console.log(sortedNames);

  return (
    <div className="App">
      <div className=" bg-gradient-to-r from-purple-600 to-blue-600 min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4 text-white">Top 10 Names</h1>

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
            className="group relative inline-flex items-center justify-start overflow-hidden rounded-full px-5 py-3 font-bold"
          >
            <span className="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-black opacity-[3%]"></span>
            <span className="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-black opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Submit
            </span>
            <span className="absolute inset-0 rounded-full border-2 border-white"></span>
          </button>
        </form>
        <ul className="w-full max-w-md">
          <TransitionGroup component={null}>
            {sortedNames.map(([name, count]) => (
              <CSSTransition key={name} timeout={500} classNames="item">
                <li className="bg-white p-4 mb-2 rounded shadow-md flex justify-between items-center">
                  <span>{name}</span>
                  <span className="text-gray-600">{count}</span>
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
      </div>
    </div>
  );
}

export default App;
