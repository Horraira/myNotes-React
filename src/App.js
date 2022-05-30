import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header";
import NotesListPages from "./pages/NotesListPages";
import NotePage from "./pages/NotePage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header></Header>
          <Routes>
            <Route path="/" element={<NotesListPages />} />
            <Route path="/note/:noteId" element={<NotePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
