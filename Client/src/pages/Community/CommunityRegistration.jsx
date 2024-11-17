
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { Mail, Phone, User } from "lucide-react";

const CommunityRegistration = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          CraveCure Community Registration
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Join our community and make a difference!
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </Label>
            <div className="relative mt-1">
              <User className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="pl-10"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </Label>
            <div className="relative mt-1">
              <Mail className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="pl-10"
              />
            </div>
          </div>

          {/* Contact Number Field */}
          <div>
            <Label htmlFor="contact" className="block text-sm font-medium text-gray-700">
              Contact Number
            </Label>
            <div className="relative mt-1">
              <Phone className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                id="contact"
                type="tel"
                placeholder="Enter your contact number"
                className="pl-10"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommunityRegistration;
