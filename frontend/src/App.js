import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckLoginPage from "./pages/CheckLoginPage";
import HeaderPage from "./components/HeaderPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import AddNewBirthdayPage from "./pages/AddNewBirthdayPage";
import SingleBirthdayPage from "./pages/SingleBirthdayPage";
import DeleteBirthdayPage from "./pages/DeleteBirthdayPage";
import UpdateBirthdayPage from "./pages/UpdateBirthdayPage";

const App = () => {
  const [username, setUsername] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderPage />
        <Routes>
          <Route
            path="/login"
            element={<LoginPage setUsername={setUsername} />}
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <HomePage username={username} />}
              />
            }
          />
          <Route
            path="/birthdays/add"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <AddNewBirthdayPage username={username} />}
              />
            }
          />
          <Route
            path="/birthdays/:id"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <SingleBirthdayPage username={username} />}
              />
            }
          />
          <Route
            path="/birthdays/:id/delete"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <DeleteBirthdayPage username={username} />}
              />
            }
          />
          <Route
            path="/birthdays/:id/update"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <UpdateBirthdayPage username={username} />}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
