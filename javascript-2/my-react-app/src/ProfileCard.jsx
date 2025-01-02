function ProfileCard(props) {
  return (
    <div className="profile-card">
      <img src="https://picsum.photos/200/200" alt="Profilbild" />
      <h2>{props.name}</h2>
      <p>{props.title}</p>
      <button>Knapp</button>
    </div>
  );
}

export default ProfileCard;
