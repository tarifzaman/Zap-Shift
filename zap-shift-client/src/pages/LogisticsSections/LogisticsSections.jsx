import React from 'react';
import { Truck, MapPin, Building2, Package, RefreshCcw, LayoutGrid, ClipboardCheck, Headphones } from 'lucide-react';

const LogisticsSections = () => {
  const howItWorks = [
    { title: "Booking Pick & Drop", icon: <MapPin className="w-6 h-6 text-green-700" /> },
    { title: "Delivery Hub", icon: <Truck className="w-6 h-6 text-green-700" /> },
    { title: "Booking SME & Corporate", icon: <Building2 className="w-6 h-6 text-green-700" /> },
  ];

  const services = [
    { title: "Express & Standard Delivery", icon: <Truck />, active: false },
    { title: "Nationwide Delivery", icon: <MapPin />, active: true },
    { title: "Fulfillment Solution", icon: <LayoutGrid />, active: false },
    { title: "Cash on Delivery", icon: <Package />, active: false },
    { title: "Corporate Service / Contract Logistics", icon: <ClipboardCheck />, active: false },
    { title: "Parcel Return", icon: <RefreshCcw />, active: false },
  ];

  return (
    <div className="p-8 font-sans">
      
      {/* --- How It Works Section --- */}
      <section className="mb-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">How it Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {howItWorks.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="bg-gray-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                From personal packages to business shipments — we deliver on time, every time.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Our Services Section --- */}
      <section className="bg-[#003d32] text-white p-10 rounded-[40px] max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Our Services</h2>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            Enjoy last-mile parcel delivery with real-time tracking and more benefits. From personal packages to business shipments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl text-center transition-all ${
                service.active 
                ? 'bg-[#b8e55c] text-black scale-105 shadow-xl' 
                : 'bg-white text-gray-800'
              }`}
            >
              <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${service.active ? 'bg-white' : 'bg-blue-50 text-blue-500'}`}>
                 {service.icon}
              </div>
              <h3 className="font-bold text-lg mb-3">{service.title}</h3>
              <p className={`text-xs leading-relaxed ${service.active ? 'text-gray-800' : 'text-gray-500'}`}>
                We deliver parcels within 24-72 hours in Dhaka. Chittagong, Sylhet, Rajshahi, and more districts covering the whole country.
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default LogisticsSections;