Steg för funktionaliteten i en todo-app med react + TS

** App.tsx **

steg 1:

- skapa en interface/type för hur själva todo-item ska vara uppbyggd

steg 2:

- skapa state för todo-arrayen
- skapa state för todo-item

steg 3:

- se till att göra en e.preventDefault för att förhindra att sidan laddas om
  när man skapar en ny todo.
- kom ihåg att man måste ange en typannotation i parametern
- se till att inget händer om input-fältet är tomt
- skapa ett nytt objekt för todo som är uppbyggd på det sätt du angett i type/interface,
  det som ska vara content för todo anger du med state som du har satt för todo-item
- ta den befintliga todo-arrayen och lägg till den senaste todo-item
- rensa input-fältet

steg 4: <!-- Om du ska kunna göra en toggle för om en todo är avklarad eller ej -->

- skapa en funktion för toggleTodo med id som parameter, tänk på att ange typ för TS
- använd setTodos för att uppdatera ett state av en todo
- map:a igenom alla todos för att skapa en ny array av alla todos
  - för varje todo i listan; kolla om todo:s id matchar med det som skickas av funktionen
  - Om det matchar;
    - skapa ett nytt objekt med egenskaperna från todo:n, ändra värdet på "completed" till värdet som är motsatt det nuvarande
  - Om det inte matchar;
    - returnera todo som den är
  - skicka den resulterande arrayen med uppdaterad todo till state för todo:n

steg 5:

- rendera ut allt så det syns i browsern
