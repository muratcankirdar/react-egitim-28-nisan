import { useState } from "react";
import "./App.css";
import AddPerson from "./AddPerson";

function App() {
  const [people, setPeople] = useState([]);

  const addNewPerson = (person) => {
    console.log(person);
    const { name, age } = person;
    setPeople([...people, { name, age }]);
  };

  const handleSave = () => {
    console.log("kayıt işlemi yapıldı");
  };

  return (
    <>
      <AddPerson
        people={people}
        addPerson={(person) => {
          addNewPerson(person);
          console.log("22. satır");
          handleSave();
        }}
        onSave={handleSave}
      />

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
