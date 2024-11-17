import { Card, CardHeader, CardContent } from '../../components/ui/card';
import { CheckCircle, Heart } from 'lucide-react';
import { motion } from 'framer-motion'; // For animation

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Title */}
        <motion.h1 
          className="text-4xl font-semibold text-center mb-10 text-blue-600"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          About CraveCure
        </motion.h1>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div 
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0, x: -100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.7 }}
          >
            <Card className="shadow-lg bg-white rounded-lg">
              <CardHeader>
                <Heart className="w-10 h-10 text-red-500" />
                <h2 className="text-xl font-semibold mt-4">Our Mission</h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We strive to bridge the gap between donors and the underprivileged, making it easy for people to donate food, clothing, and essentials.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/path/to/mission-image.jpg" 
              alt="Mission Image" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </motion.div>
        </div>

        {/* Achievements Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div 
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0, x: -100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-lg bg-white rounded-lg">
              <CardHeader>
                <CheckCircle className="w-10 h-10 text-green-500" />
                <h2 className="text-xl font-semibold mt-4">Our Achievements</h2>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li>Distributed over 1 million meals</li>
                  <li>Clothed more than 500,000 people</li>
                  <li>Built partnerships with over 100 organizations</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.9 }}
          >
            <img 
              src="/path/to/achievements-image.jpg" 
              alt="Achievements Image" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </motion.div>
        </div>

        {/* Objectives Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div 
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0, y: 100 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
          >
            <Card className="shadow-lg bg-white rounded-lg">
              <CardHeader>
                <Heart className="w-10 h-10 text-blue-500" />
                <h2 className="text-xl font-semibold mt-4">Our Objectives</h2>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li>To create awareness for those in need</li>
                  <li>To enable donors to easily give back to society</li>
                  <li>To expand our reach to more regions</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: -100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.1 }}
          >
            <img 
              src="/path/to/objectives-image.jpg" 
              alt="Objectives Image" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </motion.div>
        </div>

        {/* Goals Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div 
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0, x: -100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.2 }}
          >
            <Card className="shadow-lg bg-white rounded-lg">
              <CardHeader>
                <CheckCircle className="w-10 h-10 text-yellow-500" />
                <h2 className="text-xl font-semibold mt-4">Our Goals</h2>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li>Increase food and clothing donations by 30%</li>
                  <li>Partner with international NGOs to reach more communities</li>
                  <li>Launch mobile app for easier access and donations</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.3 }}
          >
            <img 
              src="/path/to/goals-image.jpg" 
              alt="Goals Image" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
