import "./App.css";
import SuperPage from "./Pages/SuperPage/SuperPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import AccountPage from "./Pages/AccountPage/AccountPage";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReservationPage from "./Pages/ReservationPage/ReservationPage";
import NoPage from "./Pages/NoPage/NoPage";
import HiddenRoute from "./Route/HiddenRoute";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NoPage/>} />
                <Route path="/" element={<HiddenRoute />}>
                    <Route
                        path="/home"
                        element={<HomePage />} />
                    <Route
                        path="/super"
                        element={<SuperPage/>}
                    />
                    <Route
                        path="/myrezervations"
                        element={<ReservationPage/>}
                    />
                    <Route
                        path="/account"
                        element={<AccountPage />}
                    />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
