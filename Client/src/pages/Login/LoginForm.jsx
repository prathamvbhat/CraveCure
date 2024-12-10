import { useState, useEffect } from "react";
import  {Link} from "react-router-dom";
import { Button } from "../../components/ui/button";
import { SendHorizontal, X,User,Building2,Lock } from "lucide-react";
import Axios from "axios";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../../components/ui/input-otp";

// Import your assets here
import video from "../../assets/introvid.mp4"; // Update the path accordingly
import logo from "../../assets/logo.png"; // Update the path accordingly

//Import firebase componentes
import {auth} from "../../../config/firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"

function LoginForm() {
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [statusHolder, setStatusHolder] = useState("message");

  // const loginUser = (e) => {
  //   const [email, ]
  // }

  const loginUser = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3002/login", {
      LoginUserName: loginUserName,
      LoginPassword: loginPassword,
    }).then((response) => {
      if (response.data.message || loginUserName === "" || loginPassword === "") {
        setLoginStatus(`Credentials Don't Exist!`);
      } else {
        // Redirect logic here
        console.log(statusHolder);
      }
    });
  };

  useEffect(() => {
    if (loginStatus !== "") {
      setStatusHolder("showMessage");
      setTimeout(() => {
        setStatusHolder("message");
      }, 2000);
    }
  }, [loginStatus]);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoginUserName("");
    setLoginPassword("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="container flex">
        {/* Video Section */}
        <div className="relative w-3/5">
          <video src={video} autoPlay muted loop className="w-full h-3/4 object-cover" />
          <CardDescription>
            <h2 className="text-3xl font-bold text-teal-800">Cravecure</h2>
            <p className="text-xl font-serif text-green-900">Platform Helping Needy People!</p>
          </CardDescription>
          <Card className="p-2 flex items-center space-x-2">
          <Label>Dont Have have an account?</Label>
          <Link to="/signup">
            <Button variant="outline" className="bg-green-700">Sign Up</Button>
          </Link>
        </Card>
        </div>

        {/* Form Section */}
        <div className="flex flex-col justify-center items-center w-2/5 px-4">
          <div className="mb-4 text-center">
            <img src={logo} alt="Logo" className="w-20 h-16 mx-auto" />
          </div>
          <Card className="max-w-md w-full bg-white rounded-lg shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-teal-700">Welcome to Cravecure!</CardTitle>
              <CardDescription>Log in to continue</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <div className="relative mt-1">
                  <User className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 w-5 h-5"/>
                  <Input
                    id="username"
                    placeholder="Enter Username"
                    value={loginUserName}
                    onChange={(e) => setLoginUserName(e.target.value)}
                    className="pl-10"
                  />
                  </div>
                </div>
                <div className="space-y-2">
                  
                  <Label htmlFor="password">Password</Label>
                  <div className="relative mt-1">
                    <Lock className="absolute top-1/2 left-3 -translate-y-1
                    2 text-gray-400 w-5 h-5"/>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter Password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="pl-10"
                  />
                </div>
                </div>
              <div className="space-y-2 mt-4">
                <Label htmlFor="typeoforg">Type of Organisation</Label>
                <div className="relative mt-1">
                  <Building2 className="absolute top-1/2 left-3 -translate-y-1
                  2 text-gray-400 w-5 h-5"/>
                <Select>
                  <SelectTrigger id="typeoforg" className="pl-10">
                    <SelectValue placeholder="Select"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Donor">Donor</SelectItem>
                    <SelectItem value="NGO">NGO</SelectItem>
                    <SelectItem value="Orphanage">Orphanage</SelectItem>
                  </SelectContent>
                </Select>
                </div>
                <div className="space-y-2 mt-4">
                <Label className="mt-4" htmlFor="orgid">Enter Your Organisation/Donor ID</Label>
                <InputOTP maxLength={6}>
                  <InputOTPGroup>
                    {[...Array(6)].map((_, index) => (
                      <InputOTPSlot key={index} index={index} />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </div>
              </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setLoginStatus("")}>
                Cancel <X />
              </Button>
              <Button className="bg-green-600 text-white" onClick={loginUser}>
                Login <SendHorizontal />
              </Button>
            </CardFooter>
            <div className="text-center mt-4">
              <a href="/forgotpassword" className="text-gray-600 text-sm underline">
                Forgot your password? Click Here
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
