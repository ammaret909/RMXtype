import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Rcc } from "./pages/Rcc";
import { LosLogin } from "./pages/LosLogin";
import { Register } from "./pages/Register";
import { EditUser } from "./pages/EditUser";
import { ShowUser } from "./pages/ShowUser";
import { RoleUser } from "./pages/RoleUser";
import { UserDashBoard } from "./pages/UserDashBoard";
import { PostFileAsp } from "./pages/PostFileAsp";
import { SearchAndEditPage } from "./pages/SearchAndEditPage";
import { CreatePage } from "./pages/CreatePage";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/rcc" element={<Rcc />} />
      <Route path="/loslogin" element={<LosLogin />} />
      <Route path="/create_user" element={<Register />} />
      <Route path="/edit_user" element={<EditUser />} />
      <Route path="/show_user" element={<ShowUser />} />
      <Route path="/role_user" element={<RoleUser />} />
      <Route path="/dashboard_user" element={<UserDashBoard />} />
      <Route path="/post_asp" element={<PostFileAsp />} />
      <Route path="/search_page" element={<SearchAndEditPage />} />
      <Route path="/create_page" element={<CreatePage />} />
    </Routes>
  );
}
