

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Signup from "./components/Signup";

import Users from "./User/Users";
import ApplideJobs from "./User/comopnents/applideJobs";
import Joblisting from "./User/comopnents/Joblisting";
import Recruiter from "./recruiter/Recruiter";
import Create from "./recruiter/components/create";

import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/users/dashbord" element={<Users />} />
        <Route path="/users/dashboard/applidjob" element={<ApplideJobs />} />
        <Route path="/users/joblisting" element={<Joblisting />} />
        <Route path="/recruiter/create" element={<Create />} />
        <Route path="/recruiter" element={<Recruiter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
