import { Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage/loginpage";
import RegisterPage from "./pages/RegisterPage/register";
import CoursesPage from "./pages/CoursesPage/courses";

function App() {
  return (
    <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/courses" element={<CoursesPage />} />
    <Route path="*" element={<div>404</div>} />
    </Routes>
    )
}

export default App;
