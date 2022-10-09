import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddNewBirthdayPage from "./pages/AddNewBirthdayPage";
import SingleBirthdayPage from "./pages/SingleBirthdayPage";
import DeleteBirthdayPage from "./pages/DeleteBirthdayPage";
import UpdateBirthdayPage from "./pages/UpdateBirthdayPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/birthdays/add" element={<AddNewBirthdayPage />} />
          <Route path="/birthdays/:id" element={<SingleBirthdayPage />} />
          <Route
            path="/birthdays/:id/delete"
            element={<DeleteBirthdayPage />}
          />
          <Route
            path="/birthdays/:id/update"
            element={<UpdateBirthdayPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
