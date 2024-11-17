import {
    Card,
    // CardContent,
    // CardDescription,
    // CardFooter,
    // CardHeader,
    // CardTitle,
  } from "../../components/ui/card";
const ContentHeader = () => {
  return (
    <div><Card>
        <Banner/>
        </Card></div>
  )
}

export default ContentHeader

import { Button } from "../../components/ui/button"; // Use Button component from ShadCN
import { ArrowRight } from "lucide-react";


export function Banner() {
  return (
    <div className="flex m-4 gap-4 p-6 bg-gray-50 rounded-lg shadow-md">
      {/* Left Section - Banner with Video Background */}
      <div className="relative flex-1 p-8 rounded-lg text-white overflow-hidden">
        {/* Autoplaying Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="../../assets/introvid.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay Content */}
        <div className="relative z-10">
          <h2 className="text-3xl font-bold">Welcome to Cravecure</h2>
          <p className="mt-2 text-lg font-sans">
            Platform that makes your contribution Easier!
          </p>

          <div className="mt-4 space-x-4">
            <Button variant="default" className="bg-green-500 text-white">
              Explore More 
            </Button>
            <Button variant="outline" className="bg-slate-700 border-white hover:bg-white hover:text-green-500">
              Top Sellers
            </Button>
          </div>
        </div>

        {/* Overlay to darken the video background */}
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      </div>

      {/* Right Section - My Stats */}
      <div className="flex flex-col p-6 bg-green-100 rounded-lg w-64">
        <h3 className="text-lg font-bold text-gray-800">Sucessfull Devliveries</h3>
        
        <div className="mt-4 text-gray-800">
          <div className="flex justify-between">
            <p>Today</p>
            <p className="font-semibold">4 Orders</p>
          </div>
          <div className="flex justify-between mt-2">
            <p>This Month</p>
            <p className="font-semibold">175 Orders</p>
          </div>
        </div>

        <div className="mt-6 flex items-center text-green-600 font-semibold">
          <span>View Our Stats!</span>
          <ArrowRight className="ml-2 w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
