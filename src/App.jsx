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

  const age = 12;

  // const namesStartsWithLetterM = people.filter((person) =>
  //   person.name.startsWith("M")
  // );

  return (
    <>
      <div>
        {/* {JSON.stringify(people)} */}

        {people.map((person) => (
          <h2
            className={person.age > 23 ? "red-text" : "blue-text"}
            style={{ textDecoration: person.age > 23 ? "underline" : "none" }}
            key={person.name}
          >
            {person.name}
          </h2>
        ))}

        {age > 18 ? (
          <h2>18 yaşından büyüksünüz</h2>
        ) : age === 18 ? (
          <h2>18 yaşındasınız</h2>
        ) : (
          <h2>18 yaşından küçüksünüz</h2>
        )}
      </div>
    </>
  );
}

export default App;
