import { NavLink } from "react-router-dom"
import "./Nav.scss"

export const Nav = () => {
  return (
    <nav className="w-full px-8 h-9 border border-gray-100 border-r-0 border-l-0">
        <ul className="h-full flex">
            <li className="h-full last:mr-0 mr-6">
                <NavLink className="nav_link h-full flex items-center hover:border-gray-400 hover:border-b" to="/">Overview</NavLink>
            </li>
            <li className="h-full last:mr-0 mr-6">
                <NavLink className="nav_link h-full flex items-center hover:border-gray-400 hover:border-b" to="/tasks">Tasks</NavLink>
            </li>
            <li className="h-full last:mr-0 mr-6">
                <NavLink className="nav_link h-full flex items-center hover:border-gray-400 hover:border-b" to="/projects">Projects</NavLink>
            </li>
            <li className="h-full last:mr-0 mr-6">
                <NavLink className="nav_link h-full flex items-center hover:border-gray-400 hover:border-b" to="/payments">Payments</NavLink>
            </li>
            <li className="h-full last:mr-0 mr-6">
                <NavLink className="nav_link h-full flex items-center hover:border-gray-400 hover:border-b" to="/users">Users</NavLink>
            </li>
        </ul>
    </nav>
  )
}
