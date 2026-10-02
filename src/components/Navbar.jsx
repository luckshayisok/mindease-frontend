import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { Button } from "./ui/button"

const Navbar = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Left Side - Brand */}
      <div className="text-xl font-bold text-indigo-600">
        MindEase
      </div>

      {/* Middle - Links */}
      <div className="flex space-x-6">
        <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600">Dashboard</Link>
        <Link to="/history" className="text-gray-700 hover:text-indigo-600">History</Link>
        {/* Future: Rewards / Profile */}
      </div>

      {/* Right Side - User Info */}
      <div className="flex items-center space-x-4">
        {user && <span className="text-gray-600">Hi, {user.username}</span>}
        <Button variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </nav>
  )
}

export default Navbar
