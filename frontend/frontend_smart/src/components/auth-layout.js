import Navbar from "./navbar"

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-gray-900 rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            {title && <h2 className="text-2xl font-bold text-center mb-2">{title}</h2>}
            {subtitle && <p className="text-gray-400 text-center mb-6">{subtitle}</p>}

            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout

