import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavMenu } from "./components/NavMenu";
import { ActivePage } from "./pages/ActivePage";
import { CompletedPage } from "./pages/CompletedPage";
import { ToDoPage } from "./pages/ToDoPage";

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<ToDoPage />} />
        <Route path="/active" element={<ActivePage />} />
        <Route path="/completed" element={<CompletedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
