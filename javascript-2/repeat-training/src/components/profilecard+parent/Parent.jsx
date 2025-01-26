import React from "react";

function Parent() {
  const user = {
    name: "Nicodemus Naveltuta",
    age: "47",
    title: "vice ninja",
    email: "nicokick@theoffice.net",
  };

  const { name, age, title, email } = user;

  return <ProfileCardUser name={name} age={age} title={title} email={email} />;
}

export default Parent;

function ProfileCardUser({ name, age, title, email }) {
  return (
    <div className="bg-gradient-to-br from-blue-400 to-blue-900 via-purple-700 p-6 rounded-2xl mt-6">
      <h1 className="font-bold">{name}</h1>
      <h2 className="text-2xl font-bold capitalize">{title}</h2>
      <p className="text-lg">{age}</p>
      <p className="text-xl tracking-wider">{email}</p>
    </div>
  );
}
