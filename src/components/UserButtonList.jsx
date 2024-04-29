import { useStore } from "../utils/store";

// eslint-disable-next-line react/prop-types
const UserButtonList = ({ data }) => {
  const { fetchUser, deleteUser, setId } = useStore((state) => state);

  const handleClick = () => {
    console.log(data.id);
    setId(data.id);
    fetchUser(data.id);
  };

  return (
    <li
      className="bg-slate-600 hover:bg-slate-500 p-2 rounded flex justify-between"
      onClick={handleClick}
    >
      <div className="flex-grow">
        <h4 className="text-center">{data.name}</h4>
      </div>

      <button
        className="bg-red-500 hover:bg-red-400 rounded px-2 py-1"
        onClick={() => deleteUser(data.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default UserButtonList;
