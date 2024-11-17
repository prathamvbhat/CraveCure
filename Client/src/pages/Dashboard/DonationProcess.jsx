import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { List, Package, RefreshCw } from "lucide-react"; // using Lucide icons

const DonationProcess = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from the backend
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/orders"); // replace with your endpoint
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <Card className="p-6 space-y-4 bg-white shadow-lg rounded-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold flex items-center space-x-2">
          <List className="text-indigo-600 w-6 h-6" />
          <span>Current Donation Process</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {orders.length > 0 ? (
          <ul className="space-y-4">
            {orders.map((order) => (
              <li key={order.id} className="p-4 bg-gray-50 rounded-lg flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Package className="text-indigo-500 w-5 h-5" />
                  <div>
                    <p className="font-medium">{order.name}</p>
                    <p className="text-sm text-gray-500">ID: {order.id}</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-indigo-600">
                  {order.status}
                </Badge>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex justify-center items-center space-x-2 text-gray-500">
            <RefreshCw className="animate-spin w-5 h-5" />
            <p>Loading orders...</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DonationProcess;
