import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
//import { Avatar } from "../../components/ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../../components/ui/dropdown-menu";
import { ChevronDown, User, LogOut,SquareUserRound,Search,MessageCircleMore } from "lucide-react"; // Icons from Lucide
import logo from '../../assets/logo.png'
export default function Navbar() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo / Brand Name */}
      <div className="flex text-2xl font-bold text-green-600">
        Cravecure<img src={logo} alt="Logo" className="w-10 h-8 mx-auto" />
      </div>

      {/* Nav Menu */}
      <ul className="flex space-x-6 items-center">
        <li>
          <Button variant="ghost">Home</Button>
        </li>

        {/* Donate Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-1">
              <span>Donate</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2 bg-white shadow-lg rounded-lg">
            <DropdownMenuItem onSelect={() => alert("Donate Food clicked")}>
              Food
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => alert("Donate Cloth clicked")}>
              Cloth
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => alert("Donate Cloth clicked")}>
              Stationary Items
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <li>
           <Button variant="ghost">Community</Button>
        </li>
        <li>
          <Link to="/aboutus"><Button variant="ghost">About Us</Button></Link>
        </li>
      </ul>
      <div className="flex items-center w-full max-w-md px-3 py-2 bg-white border border-gray-300 rounded-full shadow-sm">
      <Search className="w-5 h-5 text-gray-500" />
      <input
        type="text"
        placeholder="Search Here..."
        className="w-full px-2 py-1 ml-2 text-sm text-gray-700 bg-transparent border-none focus:outline-none"
      />
    </div>
        <div className="flex space-x-8">
        {/* Notifiaction DropDown */}
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <MessageCircleMore />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-60 mt-2 shadow-lg border rounded-lg">
          <p>This will updated later</p>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* Profile Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <SquareUserRound />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-32 mt-2 shadow-lg border rounded-lg">
          <DropdownMenuItem onSelect={() => alert("Profile clicked")} className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => alert("Logout clicked")} className="flex items-center space-x-2">
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    </nav>
  );
}
