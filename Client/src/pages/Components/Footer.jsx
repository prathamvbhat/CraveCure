import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import { Button } from "../../components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <h2 className="text-xl font-semibold text-white">Cravecure</h2>
            <p className="mt-4 text-sm">
              Cravecure is a nonprofit organization dedicated to providing essential resources to those in need.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="flex items-center space-x-2 mb-2">
              <Mail className="w-5 h-5 text-gray-400" />
              <span className="text-sm">contact@cravecure.org</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-gray-400" />
              <span className="text-sm">+1 123 456 7890</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" as="a" href="https://facebook.com" target="_blank" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white" />
              </Button>
              <Button variant="ghost" as="a" href="https://instagram.com" target="_blank" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
              </Button>
              <Button variant="ghost" as="a" href="https://twitter.com" target="_blank" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Cravecure. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
