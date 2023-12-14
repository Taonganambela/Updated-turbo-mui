import "./App.css";
import { SideBar } from "./components/SideBar";
import { NavBar } from "./components/NavBar";
import { AsideBar } from "./components/AsideBar";
function App() {
  return (
    <>
      <div className="flex w-full flex-row p-2">
        <div className="w-1/4">
          <SideBar />
        </div>

        <div className="w-3/4">
          <NavBar />
          <AsideBar />
        </div>
      </div>
    </>
  );
}

export default App;
