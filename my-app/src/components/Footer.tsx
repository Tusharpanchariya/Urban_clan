const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-semibold mb-2">ServeSmart</h3>
          <p>Bringing trusted services to your doorstep.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p>Email: support@servesmart.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
