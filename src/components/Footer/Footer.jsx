function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-5 flex justify-between ">
      <div className="container mx-auto px-4 flex-col ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          <div>
            <h2 className="text-sm font-bold">About Us</h2>
            <p>Style that Speaks: Fashion for Every Moment.</p>
          </div>
          <div>
            <h2 className="text-sm font-bold">Contact Us</h2>
            <p>Email: example@example.com</p>
          </div>
          <div>
            <h2 className="text-sm font-bold">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-5 border-gray-700" />
        <p className="text-center text-sm">
          &copy; 2023 Illustrate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
