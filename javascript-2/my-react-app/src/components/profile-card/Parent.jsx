export default function Parent() {
  const user = {
    name: "Nicodemus Naveltuta",
    age: "47",
    title: "vice ninja",
    email: "nicokick@theoffice.net",
  };

  return (
    <div className="profile-card">
      <ProfileCards
        name={user.name}
        title={user.title}
        img="https://picsum.photos/199/200"
      />
    </div>
  );
}

function ProfileCards({ name, title, img }) {
  return (
    <div>
      <img src={img} alt={name} />
      <h2 className="name">{name}</h2>
      <h3 className="status">{title}</h3>
    </div>
  );
}
