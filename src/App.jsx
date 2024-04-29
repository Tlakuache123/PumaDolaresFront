import AddUserInput from "./components/AddUserInput";
import UserData from "./components/UserData";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="p-2">
      <h1 className="text-2xl text-center">Gestor de Puma Dolares</h1>
      <div className="flex flex-col gap-2 mt-4">
        <AddUserInput />
        <UserList />
        <UserData />
      </div>
    </div>
  );
}

export default App;
