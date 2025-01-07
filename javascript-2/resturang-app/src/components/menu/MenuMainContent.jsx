import MenuItem from "./MenuItem";
import "./Menu.css";

export default function MenuMainContent() {
  const menuItems = [
    {
      name: "KARLSTAD",
      price: 9,
      description: "kantarell, scharlottenlök, morot, bladpersilja",
    },
    {
      name: "BANGKOK",
      price: 9,
      description: "morot, salladslök, chili, kokos, lime, koriander",
    },
    {
      name: "HO CHI MINH",
      price: 9,
      description: "kål, salladslök, chili, vitlök, ingefära, tofu",
    },
    {
      name: "PARIS",
      price: 9,
      description: "kål, chèvre, honung, basilika, valnötspasta",
    },
    {
      name: "OAXACA",
      price: 9,
      description: "majs, tomat, rostade ärtor, vitlök, lime",
    },
    {
      name: "DIPSÅS",
      price: 19,
      description: null,
      dips: [
        "sweet chili",
        "sweet & sour",
        "guacamole",
        "wonton std",
        "hot mango",
        "chili mayo",
      ],
    },
  ];

  return (
    <section className="menu">
      <h2>MENY</h2>
      {menuItems.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </section>
  );
}
