import { useCallback, useState } from "react";

interface Contact {
  id: number;
  name: string;
  phone: string;
}

interface ContactProps {
  contact: Contact;
  onCall: (phone: string) => void;
}

const UseCallback = ({ contact, onCall }: ContactProps) => {
  console.log("Rendering Contact:", contact.name);
  return (
    <div>
      <h3>{contact.name}</h3>
      <p>{contact.phone}</p>
      <button onClick={() => onCall(contact.name)}>Llamar</button>
    </div>
  );
};

export const PhoneBook = () => {
  const [contacts, setContact] = useState<Contact[]>([
    { id: 1, name: "Diego", phone: "987944407" },
    { id: 2, name: "Ana", phone: "912345678" },
    { id: 3, name: "Luis", phone: "923456789" },
  ]);

  const [log, setLog] = useState<string>("");

  const makeCall = useCallback(
    (name: string) => setLog(`Llamando a: ${name}`),
    [],
  );
  const addContact = () => {
    const newContact: Contact = {
      id: contacts.length + 1,
      name: `Contacto ${contacts.length + 1}`,
      phone: `90000000${contacts.length + 1}`,
    };
    setContact([...contacts, newContact]);
  };
  return (
    <div>
      <h2>Agenda de Contactos</h2>

      {contacts.map((contact) => (
        <UseCallback key={contact.id} contact={contact} onCall={makeCall} />
      ))}

      <button onClick={addContact}>Agregar Contacto</button>
      <p>{log}</p>
    </div>
  );
};
