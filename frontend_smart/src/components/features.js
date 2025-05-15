export default function FloatingServices() {
    const services = [
      { name: "Book Appointment", icon: "📅", color: "bg-purple-600" },
      { name: "Talk to Doctors", icon: "👨‍⚕️", color: "bg-blue-600" },
      { name: "Hospitals & Clinics", icon: "🏥", color: "bg-pink-600" },
      { name: "Healthcare", icon: "💙", color: "bg-cyan-600" },
      { name: "Medicine & Supplies", icon: "💊", color: "bg-violet-600" },
      { name: "Lab Testing", icon: "🧪", color: "bg-orange-600" },
      { name: "Home Care", icon: "🏠", color: "bg-teal-600" },
    ];
  
    return (
      <div className="relative">
        {/* Floating container */}
        <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 z-50 bg-gray-900 p-6 rounded-lg shadow-lg flex gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-white space-y-2">
              <div className={`w-14 h-14 flex items-center justify-center rounded-full ${service.color}`}>
                <span className="text-2xl">{service.icon}</span>
              </div>
              <p className="text-sm">{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  