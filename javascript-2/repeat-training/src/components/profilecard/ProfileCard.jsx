import React from "react";

function ProfileCard({ name, title, buttonText }) {
  return (
    <div className="flex flex-col items-center justify-evenly h-94 rounded-xl mt-5 bg-gradient-to-br from-purple-600 to-fuchsia-700 p-12">
      <h1 className="bg-gradient-to-b from-blue-300 to-blue-400 p-4 rounded-xl shadow-xl">
        {name}
      </h1>
      <h2 className="text-3xl capitalize font-bold bg-gradient-to-b from-indigo-200 to-blue-200 text-transparent bg-clip-text">
        {title}
      </h2>
      <button className="button bg-gradient-to-b from-blue-300 to-blue-400 shadow-md hover:from-blue-400 hover:to-blue-300 ">
        {buttonText}
      </button>
    </div>
  );
}

export default ProfileCard;
