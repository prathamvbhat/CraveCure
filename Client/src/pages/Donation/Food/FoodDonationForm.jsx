import { Card, CardHeader, CardTitle, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Calendar, Send ,MapPin} from "lucide-react";

const FoodDonationForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex items-center justify-center p-6">
      <Card className="w-full max-w-3xl shadow-lg">
        {/* Form Header */}
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-purple-600">
            Food Donation Form
          </CardTitle>
          <p className="text-gray-600">
            Help us make a difference by donating excess food to those in need.
          </p>
        </CardHeader>

        {/* Form Content */}
        <CardContent>
          <form className="space-y-6">
            {/* Donor Details Section */}
            <div>
              <h2 className="text-lg font-semibold text-purple-600 mb-2">
                Donor Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Full Name"
                  className="w-full"
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="w-full"
                  required
                />
              </div>
            </div>

            {/* Food Details Section */}
            <div>
              <h2 className="text-lg font-semibold text-purple-600 mb-2">
                Food Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Type of Food (e.g., Bread, Rice)"
                  className="w-full"
                  required
                />
                <Input
                  type="text"
                  placeholder="Quantity (e.g., 10kg)"
                  className="w-full"
                  required
                />
              </div>
              <Textarea
                placeholder="Additional Notes (e.g., special instructions, packaging details)"
                className="mt-4 w-full"
              />
            </div>

            {/* Pickup Details Section */}
            <div>
              <h2 className="text-lg font-semibold text-purple-600 mb-2">
                Pickup Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative mt-1">
              <MapPin className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 w-5 h-5"/>
                <Input
                  type="text"
                  placeholder="Pickup Address"
                  className="pl-10 w-full"
                  required
                />
                </div>
                <div className="relative mt-1">
                  <Input
                    type="date"
                    placeholder="Preferred Pickup Date"
                    className="w-full"
                    required
                  />
                  <Calendar className="absolute right-3 top-3 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-purple-600 text-white hover:bg-purple-700 flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              Submit Donation
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FoodDonationForm;
