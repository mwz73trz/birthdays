import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddNewBirthdayPage from "./pages/AddNewBirthdayPage";
import SingleBirthdayPage from "./pages/SingleBirthdayPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/birthdays/add" element={<AddNewBirthdayPage />} />
          <Route path="/birthdays/:id" element={<SingleBirthdayPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
