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

  return (
    <>
      <div>
        {/* {JSON.stringify(people)} */}

        {people
          .filter((person) => person.name.startsWith("M"))
          .map((person) => (
            <h2 key={person.name}>{person.name}</h2>
          ))}
      </div>
    </>
  );
}

export default App;
