import { useEffect, useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { CheckCircle, XCircle, Phone, Mail,ShieldX,BadgeCheck } from "lucide-react"; // Lucide icons for status and contact

const DonationItem = () => {   
  const [donationItems, setdonationItems] = useState([]);

  useEffect(() => {
    // Fetch donationItem data from the backend
    const fetchdonationItems = async () => {
      try {
        const response = await fetch("/api/donationlist"); // replace with your endpoint
        const data = await response.json();
        setdonationItems(data);
      } catch (error) {
        console.error("Error fetching donationItems:", error);
      }
    };
    fetchdonationItems();
  }, []);

  return (
    <Card className="p-6 bg-white shadow-lg rounded-lg">
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-gray-600 font-semibold">Donation Category</th>
                <th className="px-4 py-2 text-left text-gray-600 font-semibold">Quantity</th>
                <th className="px-4 py-2 text-left text-gray-600 font-semibold">Donor Contact No.</th>
                <th className="px-4 py-2 text-left text-gray-600 font-semibold">Location</th>
                <th className="px-4 py-2 text-left text-gray-600 font-semibold"></th>
              </tr>
            </thead>
            <tbody>
              {donationItems.length > 0 ? (
                donationItems.map((donationItem) => (
                  <tr key={donationItems.id} className="border-b border-gray-200">
                    <td className="px-4 py-3">{donationItems.category}</td>
                    <td className="px-4 py-3 flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-indigo-500" />
                      <span>{donationItem.quantity}</span>
                    </td>
                    <td className="px-4 py-3 flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-indigo-500" />
                      <span>{donationItem.donorcontact}</span>
                    </td>
                    <td className="px-4 py-3">
                      {donationItem.isVerified ? (
                        <Badge variant="outline" className="text-green-600 flex items-center space-x-1">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Verified<BadgeCheck /></span>
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-red-600 flex items-center space-x-1">
                          <XCircle className="w-4 h-4 text-red-500" />
                          <span>Not Verified<ShieldX /></span>
                        </Badge>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    No donationItems found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default DonationItem;