
import { Card, CardHeader, CardTitle, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Book } from "lucide-react";

const StationaryDonationForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-orange-200 flex items-center justify-center p-6">
      <Card className="w-full max-w-3xl shadow-lg">
        {/* Form Header */}
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-yellow-600">
            Stationary Donation Form
          </CardTitle>
          <p className="text-gray-600">
            Donate books and other stationary items to empower education.
          </p>
        </CardHeader>

        {/* Form Content */}
        <CardContent>
          <form className="space-y-6">
            {/* Donor Details */}
            <div>
              <h2 className="text-lg font-semibold text-yellow-600 mb-2">
                Donor Details
              </h2>
              <Input
                type="text"
                placeholder="Full Name"
                className="w-full"
                required
              />
              <Input
                type="email"
                placeholder="Email Address"
                className="w-full mt-4"
                required
              />
            </div>

            {/* Stationary Details */}
            <div>
              <h2 className="text-lg font-semibold text-yellow-600 mb-2">
                Stationary Details
              </h2>
              <Input
                type="text"
                placeholder="Type of Items (e.g., Books, Notebooks)"
                className="w-full"
                required
              />
              <Input
                type="text"
                placeholder="Quantity"
                className="w-full mt-4"
                required
              />
              <Textarea
                placeholder="Additional Notes (e.g., Subject, Condition)"
                className="w-full mt-4"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-yellow-600 text-white hover:bg-yellow-700 flex items-center justify-center"
            >
              <Book className="w-5 h-5 mr-2" />
              Submit Donation
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default StationaryDonationForm;
