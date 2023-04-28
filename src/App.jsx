import "./App.css";

function App() {
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

  const alertMe1 = (text = "") => {
    alert("Hello", text);
  };

  const alertMe2 = () => {
    alert("Hello alert me 2");
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <button onClick={alertMe2}>Click 1</button>

        <button onClick={() => alertMe1("murat can")}>Click 2</button>

        <button
          onClick={() => {
            alertMe1("murat can");
            alertMe2();
          }}
        >
          Click 3 (multiple)
        </button>
      </div>
    </>
  );
}

export default App;
