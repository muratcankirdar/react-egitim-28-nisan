import { useState } from "react";

/* eslint-disable react/prop-types */
// const AddPerson = ({ people, setPeople }) => {
// const { people, setPeople } = props;
const AddPerson = ({ people, addPerson, onSave }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <>
      <h2>Total People: {people.length}</h2>

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

      <button onClick={() => addPerson({ name, age })}>Add Person</button>

      <button onClick={onSave}>Save</button>
    </>
  );
};

export default AddPerson;
