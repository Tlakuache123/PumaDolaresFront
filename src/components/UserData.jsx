import { useState } from "react";
import { useStore } from "../utils/store";

const UserData = () => {
  const { userData, updateMoney, id, sendNotification } = useStore(
    (state) => state
  );
  const [money, setMoney] = useState(0);

  if (Object.keys(userData).length == 0) return;

  return (
    id && (
      <div className="bg-slate-700 p-2 rounded mx-4">
        <h2 className="text-center text-2xl">Informacion de {userData.name}</h2>
        <p>Id: {userData.id}</p>
        <p>Correo: {userData.email}</p>
        <div className="flex justify-around py-4 rounded border border-slate-800 my-2">
          <p>Monedero: {userData.currency}</p>
          <input
            type="number"
            className="text-slate-900 px-2 rounded"
            value={money}
            onChange={(e) => setMoney(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              type="button"
              className="bg-slate-800 hover:bg-slate-600 rounded px-2 py-1"
              onClick={() => updateMoney(userData.id, money)}
            >
              Actualizar
            </button>
            <button
              className="bg-slate-800 hover:bg-slate-600 rounded px-2 py-1"
              onClick={() => sendNotification(userData.id)}
            >
              Notificar cambio
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default UserData;
