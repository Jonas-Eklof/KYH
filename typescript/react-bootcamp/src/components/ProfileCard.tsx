import { useState } from "react";

interface profileCardProps {
  name: string;
  title: string;
  handleClick: () => void;
}

const ProfileCard = ({ name, title, handleClick }: profileCardProps) => {
  return (
    <div className="card bg-blue-400 rounded-2xl p-4 ">
      <h2>{name}</h2>
      <h3>{title}</h3>
      <img
        className="mt-4 mb-6"
        src="https://picsum.photos/id/1/200/200"
        alt="Lorem Picsum"
      />
      <button className="w-[7rem] h-12" onClick={handleClick}>
        Klicka här
      </button>
    </div>
  );
};

export default ProfileCard;
