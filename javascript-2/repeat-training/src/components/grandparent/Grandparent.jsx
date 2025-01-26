import React from "react";

function Grandparent() {
  const string = "Hej barnbarnet!";
  return <Parent string={string} />;
}

export default Grandparent;

function Parent({ string }) {
  return <Child string={string} />;
}

function Child({ string }) {
  return (
    <div>
      <p>{string}</p>
    </div>
  );
}
