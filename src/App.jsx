import { useState } from "react";
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

  return (
    <>
      <label>İsim: </label>
      <input
        value={name}
        onChange={(e) => {
          // if (name.length < 10) {
          //   console.log("if 1");
          //   setName(e.target.value);
          // } else {
          //   alert("hop hemşerim nereye");
          // }

          if (e.target.value.length < 10) {
            console.log("if 2");
            setName(e.target.value);
            console.log(name);
          } else {
            alert("hop hemşerim nereye");
          }
        }}
      />
      <p>{name}</p>
    </>
  );
}

export default App;
