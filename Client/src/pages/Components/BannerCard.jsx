import { Card, CardContent } from "../../components/ui/card";
import introvid from "../../assets/introvid.mp4"
const BannerCard = () => {
  return (
    <div className="flex bg-gray-100">
      <Card className="relative w-full h-[400px] overflow-hidden shadow-lg">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={introvid}
          autoPlay
          muted
          loop
        ></video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content */}
        <CardContent className="relative z-10 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl text-orange-600 font-bold my-2">CraveCure</h1>
          <p className="text-lg">
            Bridging the gap between donors and the underprivileged.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BannerCard;
