import React from 'react'

function Footer() {
  return (
 
    <footer className="bg-orange-500 text-white py-8">
    <div className="container mx-auto px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800 ">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-black">BuyMe</h2>
          <p className="text-sm">Your one-stop destination for quality products at the best prices.</p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-black">Quick Links</h3>
          <ul className="text-sm space-y-2 text-gray-800 ">
            <li><a href="/about" className="hover:underline text-gray-800 ">About Us</a></li>
            <li><a href="/shop" className="hover:underline text-gray-800 ">Shop</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-black">Contact Us</h3>
          <p className="text-sm">Email: mdaskib5566@gmail.com</p>
          <p className="text-sm">Phone: +8801836595393</p>
          <p className="text-sm">Address: 123, Market Street, New York, USA</p>
        </div>
      </div>
      
      {/* Social & Copyright */}
      <div className="mt-6 border-t border-orange-300 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-800 ">&copy; {new Date().getFullYear()} ShopEasy. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0 text-gray-800 ">
          <a href="#" className="hover:text-gray-300">Facebook</a>
          <a href="#" className="hover:text-gray-300">Twitter</a>
          <a href="#" className="hover:text-gray-300">Instagram</a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer