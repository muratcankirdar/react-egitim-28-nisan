import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const [people, setPeople] = useState([
    {
      name: "Elif",
      age: 18,
    },
    {
      name: "Murat",
      age: 25,
    },
    {
      name: "Mert",
      age: 30,
    },
    {
      name: "Hako",
      age: 15,
    },
  ]);

  // const namesStartsWithLetterM = people.filter((person) =>
  //   person.name.startsWith("M")
  // );

  const addNewPerson = () => {
    setPeople([...people, { name, age }]);
  };

  const namesStartsWithLetterM = useMemo(() => {
    // useMemo ile yalnızca dependency array içindeki değişkenler değiştiğinde çalışır
    console.log("tekrar hesaplandı");

    return people.filter((person) => person.name.startsWith("M"));
  }, [people]);

  return (
    <>
      <h5>Name</h5>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h5>Age</h5>
      <input
        type="number"
        value={age}
        onChange={(e) => Number(setAge(e.target.value))}
      />

      <br />
      <br />
      <button onClick={addNewPerson}>Add New Person</button>

      <br />

      {namesStartsWithLetterM.map((person, index) => (
        <h5 key={index}>
          {person.name} - {person.age}
        </h5>
      ))}
    </>
  );
}

export default App;
