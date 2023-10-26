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
import { TestFunction } from "./pages/TestFunction";
import { ManageErrorMassage } from "./pages/ManageErrorMassage";
import { CreateErrorMassage } from "./pages/CreateErrorMassage";
import { Kmt2main } from "./pages/Kmt2main";
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
      <Route path="/page/asp" element={<PostFileAsp />} />
      <Route path="/page/search" element={<SearchAndEditPage />} />
      <Route path="/page/create" element={<CreatePage />} />
      <Route path="/massage/search" element={<ManageErrorMassage />} />
      <Route path="/massage/create" element={<CreateErrorMassage />} />
      <Route path="/menu/test" element={<TestFunction />} />
      <Route path="/kmt2main" element={<Kmt2main />} />
    </Routes>
  );
}
