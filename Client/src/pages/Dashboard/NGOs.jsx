import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { CheckCircle, XCircle, Phone, Mail,ShieldX,BadgeCheck } from "lucide-react"; // Lucide icons for status and contact

const NGOList = () => {
  const [ngos, setNgos] = useState([]);

  useEffect(() => {
    // Fetch NGO data from the backend
    const fetchNGOs = async () => {
      try {
        const response = await fetch("/api/ngos"); // replace with your endpoint
        const data = await response.json();
        setNgos(data);
      } catch (error) {
        console.error("Error fetching NGOs:", error);
      }
    };

    fetchNGOs();
  }, []);

  return (
    <Card className="p-6 bg-white shadow-lg rounded-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">NGO Directory</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-gray-600 font-semibold">NGO Name</th>
                <th className="px-4 py-2 text-left text-gray-600 font-semibold">Contact No.</th>
                <th className="px-4 py-2 text-left text-gray-600 font-semibold">Email</th>
                <th className="px-4 py-2 text-left text-gray-600 font-semibold">Verified</th>
              </tr>
            </thead>
            <tbody>
              {ngos.length > 0 ? (
                ngos.map((ngo) => (
                  <tr key={ngo.id} className="border-b border-gray-200">
                    <td className="px-4 py-3">{ngo.name}</td>
                    <td className="px-4 py-3 flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-indigo-500" />
                      <span>{ngo.contact}</span>
                    </td>
                    <td className="px-4 py-3 flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-indigo-500" />
                      <span>{ngo.email}</span>
                    </td>
                    <td className="px-4 py-3">
                      {ngo.isVerified ? (
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
                    No NGOs found.
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

export default NGOList;
