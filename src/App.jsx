import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const people = [
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
  ];

  // const namesStartsWithLetterM = people.filter((person) =>
  //   person.name.startsWith("M")
  // );

  useEffect(() => {
    // Bu effect her re-render olduğunda çalışır.
    console.log("useEffect çalıştı, re-render");
  });

  useEffect(() => {
    // Component ilk render olduğunda ve BİR kez çalışır.
    console.log("Ben sadece bir kez çalışırım");
  }, []);

  useEffect(() => {
    console.log("name ya da age degisti.");
    if (age > 18) {
      console.log("teebrikler, büyüdünüz");
    }
  }, [name, age]);

  return (
    <>
      <label>İsim: </label>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <br />

      <label>Yaş: </label>
      <input
        type="number"
        value={age}
        onChange={(e) => {
          setAge(Number(e.target.value));
        }}
      />
      <p>{name}</p>
    </>
  );
}

export default App;
