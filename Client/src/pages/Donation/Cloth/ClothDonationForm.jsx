import { Card, CardHeader, CardTitle, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Shirt } from "lucide-react";

const ClothDonationForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-blue-200 flex items-center justify-center p-6">
      <Card className="w-full max-w-3xl shadow-lg">
        {/* Form Header */}
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-green-600">
            Cloth Donation Form
          </CardTitle>
          <p className="text-gray-600">
            Donate gently used clothes to help those in need.
          </p>
        </CardHeader>

        {/* Form Content */}
        <CardContent>
          <form className="space-y-6">
            {/* Donor Details */}
            <div>
              <h2 className="text-lg font-semibold text-green-600 mb-2">
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

            {/* Cloth Details */}
            <div>
              <h2 className="text-lg font-semibold text-green-600 mb-2">
                Cloth Details
              </h2>
              <Input
                type="text"
                placeholder="Type of Cloth (e.g., Shirts, Pants)"
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
                placeholder="Additional Details (e.g., Sizes, Condition)"
                className="w-full mt-4"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-green-600 text-white hover:bg-green-700 flex items-center justify-center"
            >
              <Shirt className="w-5 h-5 mr-2" />
              Submit Donation
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClothDonationForm;
