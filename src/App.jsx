import { useState } from "react";
import "./App.css";
import AddPerson from "./AddPerson";

function App() {
  const [people, setPeople] = useState([]);

  return (
    <>
      <AddPerson people={people} setPeople={setPeople} />

      {people.map((person, index) => (
        <div key={index}>
          <h3>Name: {person.name}</h3>
          <h3>Age: {person.age}</h3>
        </div>
      ))}
    </>
  );
}

export default App;
