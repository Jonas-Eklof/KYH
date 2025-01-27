import React, { useState } from "react";

function Grandparent() {
  const [candy, setCandy] = useState("");

  const string = "Hej barnbarnet!";

  const handleClick = () => {
    setCandy("Du har fått godis");
  };

  return (
    <div>
      <Parent string={string} candy={candy} />
      <button onClick={handleClick}>Ge godis</button>
    </div>
  );
}

export default Grandparent;

function Parent({ string, candy }) {
  return <Child string={string} candy={candy} />;
}

function Child({ string, candy }) {
  return (
    <div>
      <p>{string}</p>
      <p>{candy}</p>
    </div>
  );
}
