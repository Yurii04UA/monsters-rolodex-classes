import { useEffect, useState } from "react";

export const Filter = () => {
  const [users, setUsers] = useState();
  const [input, setInput] = useState("");
  const [filteredUsers, setFilteredUsers] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((e) => e.json())
      .then((e) => {
        setUsers(e);
        setFilteredUsers(e);
      });
  }, []);

  const onFilter = (e) => {
    //to lowerCase
    setFilteredUsers(users.filter((el) => el.name.includes(e)));
  };
  const onInput = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <>
      <button onClick={() => console.log(filteredUsers)}>asd</button>
      <h1>APP2</h1>
      <input value={input} onChange={onInput} />
      {filteredUsers && filteredUsers.map((e) => <h1 key={e.id}>{e.name}</h1>)}
    </>
  );
};
