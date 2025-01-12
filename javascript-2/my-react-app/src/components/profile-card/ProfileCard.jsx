import React, { useState } from "react";

function ProfileCard() {
  const [changeName, setChangeName] = useState("Jonas");
  const [changeStatus, setChangeStatus] = useState("Student");

  const valueChange = () => {
    setChangeName("Ändrat namn!");
    setChangeStatus("Ändrad status!");
  };

  return (
    <div className="profile-card">
      <img src="https://picsum.photos/200/200" alt="Profilbild" />
      <h2 className="name">{changeName}</h2>
      <p className="status">{changeStatus}</p>
      <button onClick={valueChange}>Knapp</button>
    </div>
  );
}

export default ProfileCard;
