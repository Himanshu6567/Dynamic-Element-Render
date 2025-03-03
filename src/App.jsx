import HomePage from "./Component/Pages/HomePage";
import LeftSideBar from "./Component/SideBar/LeftSideBar";
import Navbar from "./Component/Pages/Navbar";
import RightSideBar from "./Component/SideBar/RightSideBar";
import BottomMenu from "./Component/SideBar/BottomMenu";
import { AssetProvider } from "./Component/Context";

function App() {
  return (
    <div>
      <AssetProvider>
        <Navbar />
        <HomePage />
        <LeftSideBar />
        <RightSideBar />
        <BottomMenu />
      </AssetProvider>
    </div>
  );
}

export default App;
