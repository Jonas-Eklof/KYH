import { useEffect, useState } from "react";

export default function Greeting() {
  const [namn, setNamn] = useState("");

  useEffect(() => {
    const userInput = prompt("Vad heter du?");
    if (userInput) {
      setNamn(userInput);
    }
  }, []);

  if (!namn) return null;

  return <h1>Hejsan, {namn}!</h1>;
}
