"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Mail, ArrowLeft, CheckCircle } from "lucide-react"

const ForgotPassword = () => {
  const [email, setEmail] = useState("")
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setEmail(e.target.value)

    // Clear error when user starts typing
    if (errors.email) {
      setErrors({
        ...errors,
        email: "",
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Validate email
    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid"
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Password reset email sent to:", email)
      setIsSubmitted(true)
    } catch (error) {
      console.error("Password reset error:", error)
      setErrors({
        form: "An error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white">
     
    <Navbar/>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-gray-900 rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            {!isSubmitted ? (
              <>
                <h2 className="text-2xl font-bold text-center mb-2">Forgot Password</h2>
                <p className="text-gray-400 text-center mb-6">
                  Enter your email and we'll send you instructions to reset your password
                </p>

                {errors.form && (
                  <div className="mb-4 p-3 bg-red-900/50 border border-red-500 rounded-lg text-red-200">
                    {errors.form}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Email */}
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-3 py-2 bg-gray-800 border ${
                          errors.email ? "border-red-500" : "border-gray-700"
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="your@email.com"
                      />
                    </div>
                    {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Reset Instructions"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">Check Your Email</h2>
                <p className="text-gray-400 mb-6">
                  We've sent password reset instructions to:
                  <br />
                  <span className="text-white font-medium">{email}</span>
                </p>
                <p className="text-sm text-gray-400 mb-6">
                  If you don't see the email, check your spam folder or make sure you entered the correct email address.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false)
                    setEmail("")
                  }}
                  className="text-blue-500 hover:underline flex items-center justify-center mx-auto"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Try another email
                </button>
              </div>
            )}

            <div className="mt-6 text-center text-sm">
              <Link to="/login" className="text-blue-500 hover:underline flex items-center justify-center mx-auto">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword

