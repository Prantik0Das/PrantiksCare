import DashboardMainContent from "./components/DashboardMainContent.jsx";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="top">
        <Header />
      </div>
      <div className="bottom">
        <div className="side">
          <Sidebar />
        </div>
        <div className="dash">
          <DashboardMainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
