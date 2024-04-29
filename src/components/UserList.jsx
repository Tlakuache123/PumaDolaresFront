import { useEffect } from "react";
import UserButtonList from "./UserButtonList";
import { useStore } from "../utils/store";

const UserList = () => {
  const { allUsers, fetchAllUsers } = useStore((state) => state);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div>
      <h2 className="text-center text-lg">Usuarios Registrados</h2>
      <div className="bg-slate-700 mx-8 my-2 p-4 rounded max-h-32 overflow-auto">
        <ul className="flex flex-col gap-1 overflow-x-scroller">
          {allUsers.map((user) => (
            <UserButtonList key={user.id} data={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
