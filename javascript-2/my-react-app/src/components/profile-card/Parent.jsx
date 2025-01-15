export default function Parent() {
  const user = {
    name: "Nicodemus Naveltuta",
    age: "47",
    title: "vice ninja",
    email: "nicokick@theoffice.net",
  };

  return (
    <div>
      <ProfileCard name={user.name} title={user.title} />
    </div>
  );
}

function ProfileCard({ name, title }) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{title}</h1>
    </div>
  );
}
