import './App.css'
import Feed from './pages/Feed'
import Leaderboard from './pages/Leaderboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Submission from './pages/Submission'
import Profile from './pages/Profile'
import Map from "./pages/Map"
import NoPage from './pages/NoPage'
import HeaderComponent from './components/HeaderComponent'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <HeaderComponent></HeaderComponent>
        <Routes>
          <Route path="/" element={<Feed/>}></Route>
          <Route path="leaderboard" element={<Leaderboard />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register/>}></Route>
          <Route path="submission" element={<Submission />}></Route>
          <Route path="profile" element={<Profile/>}></Route>
          <Route path="map" element={<Map />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;