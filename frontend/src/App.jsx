import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar"
import BookDesk from './components/BookDesk'
import SingUp from "./components/SingUp";
import Login from "./components/Login";
import EmailVerify from "./components/EmailVerify";
function App() {

  return (
   <>
    <NavBar/>
    <Routes>
        <Route path="bookdesk" element={<BookDesk/>}></Route>
        <Route path="signup" element={<SingUp/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="user/:id/verify/:token" element={<EmailVerify />} />
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
