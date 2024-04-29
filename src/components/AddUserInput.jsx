import { useState } from "react";
import { useStore } from "../utils/store";

const AddUserInput = () => {
  const { addUser } = useStore((state) => state);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(name, email);

    if (name == "" || email == "") return;

    setName("");
    setEmail("");
  };

  return (
    <div className="p-8 bg-slate-700 rounded">
      <p className="text-2xl text-center mb-4">Agregar Usuario</p>
      <form className="grid grid-cols-5 gap-4 p-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="col-span-2 rounded px-2 text-slate-900"
        />
        <input
          type="email"
          placeholder="Correo Electronico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="col-span-2 rounded px-2 text-slate-900"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-500 rounded px-2 py-1"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default AddUserInput;
