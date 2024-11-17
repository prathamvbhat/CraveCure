
import { Button } from "../components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import error from "../assets/error.png"
const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        {/* Icon and Title */}
        <div className="mb-6">
          <Home className="w-20 h-20 text-red-500 mx-auto" />
          <h1 className="text-6xl font-bold text-gray-800">404</h1>
          <p className="text-xl text-gray-600 mt-2">
            Oops! The page you’re looking for doesn’t exist.
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-8">
          <img
            src={error} // Replace with your image URL or asset
            alt="Not Found Illustration"
            className="mx-auto rounded-lg shadow-lg w-80"
          />
        </div>

        {/* Action Buttons */}
        <div>
        <Link to="/"><Button
            as="a"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md inline-flex items-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Button></Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
