import { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Link } from "react-router-dom";
import { SendHorizontal,CircleX,User,Mail,KeyRound} from "lucide-react";
import video from "../../assets/introvid.mp4"; // Update the path accordingly
import logo from "../../assets/logo.png"; // Update the path accordingly
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async(e) => {
    e.preventDefault();
    // Registration logic here
    await createUserWithEmailAndPassword(auth, name, email, password)
    console.log("Name:", name, "Email:", email, "Password:", password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="container flex">
        {/* Video Section */}
        <div className="relative w-3/5">
        <video src={video} autoPlay muted loop></video>
        <CardDescription>
          <h2 className="text-3xl font-bold text-teal-800">Cravecure</h2>
          <p className="text-xl font-serif text-green-900">Platform Helping Needy People!</p>
        </CardDescription>
        <Card className="p-2 flex items-center space-x-2">
          <Label>Already have an account?</Label>
          <Link to="/signin">
            <Button variant="outline" className="bg-green-700">Sign In</Button>
          </Link>
        </Card>
      </div>
        <div className="flex flex-col justify-center items-center w-2/5 px-4">
          <div className="mb-4 text-center">
            <img src={logo} alt="Logo" className="w-20 h-16 mx-auto" />
            <h2>Join Us!</h2>
          </div>
          <Card className="max-w-md w-full bg-white rounded-lg shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-teal-700">Create an Account</CardTitle>
              <CardDescription>Register to start helping others</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleRegister} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <div className="relative mt-1">
                  <User className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10"
                  />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative mt-1">
                  <Mail className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                  />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative mt-1">
                  <KeyRound className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                  />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => {
                setName('');
                setEmail('');
                setPassword('');
              }}>
                Clear<CircleX color="#c47373" />
              </Button>
              <Button className="bg-green-600 text-white" onClick={handleRegister}>
                Register <SendHorizontal />
              </Button>
            </CardFooter>
            <div className="text-center mt-4">
              <a href="#" className="text-gray-600 text-sm underline">
                Need help? Contact us
              </a>
            </div>
          </Card>
        </div>
      </div>
      </div>
  );
}

export default RegisterForm;
