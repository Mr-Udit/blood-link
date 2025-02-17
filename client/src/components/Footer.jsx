

const Footer = () => {
  return (
    <footer className="py-6 mt-10 text-white bg-red-600">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
          {/* Logo & Description */}
          <div>
            <h2 className="text-xl font-bold">BloodLife</h2>
            <p className="mt-2 text-sm">
              Saving lives, one donation at a time. Join us in making a difference.
            </p>
          </div>

          {/* Site Map */}
          <div>
            <h3 className="text-lg font-semibold">Site Map</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/donate" className="hover:underline">Donate Blood</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <p className="mt-2 text-sm">Email: support@bloodlife.org</p>
            <p className="text-sm">Phone: +123 456 7890</p>
            <div className="flex justify-center mt-3 space-x-4 md:justify-start">
              <a href="#" className="hover:text-gray-200">Facebook</a>
              <a href="#" className="hover:text-gray-200">Twitter</a>
              <a href="#" className="hover:text-gray-200">Instagram</a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-4 mt-6 text-sm text-center border-t border-white">
          &copy; {new Date().getFullYear()} BloodLife. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
