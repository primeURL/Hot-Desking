import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar"
import SingUp from "./auth/SingUp";
import Login from "./auth/Login";
import EmailVerify from "./auth/EmailVerify";
import SingleRoom from "./components/SingleRoom";
import Rooms from "./components/Rooms";
import BookDesk from './screens/BookDesk'
import Home from './screens/Home'
import About from "./screens/About";
import Profile from "./screens/Profile";
import Admin from './screens/Admin'
function App() {
  return (
   <>
    <NavBar/>
    <Routes>
        <Route path="bookdesk" element={<BookDesk/>}></Route>
        <Route path="home" element={<Home/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="signup" element={<SingUp/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="profile" element={<Profile/>}></Route>
        <Route path="admin" element={<Admin/>}></Route>
        <Route path="aboutus" element={<About/>}></Route>
        <Route path="user/:id/verify/:token" element={<EmailVerify />} />
        <Route path="rooms/:location/:checkIn/:checkOut" element={<Rooms />} />
        <Route path="singleroom/:checkIn/:checkOut/:id" element={<SingleRoom />} />
        {/* <Route path="workoutlog" element={<WorkoutLog />}></Route> */}
        {/* <Route
          path="basic"
          element={<Protected Component={BasicTimer} />}
        ></Route> */}
      </Routes>
   </>
  )
}

export default App
