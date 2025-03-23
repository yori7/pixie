import './App.css';
import ImageArea from './components/ImageArea';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <div className="bg-base-100 drawer max-w-[100rem] mx-auto lg:drawer-open">
        <input id="drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <ImageArea />
        </div>
        <div className="drawer-side z-40">
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default App;
