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
        {people.map((person) => {
          return (
            <>
              <h5>{`${person.name} ${person.age}`}</h5>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
