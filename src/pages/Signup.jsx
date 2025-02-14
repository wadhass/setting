import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim() || !firstName.trim() || !lastName.trim() || !age.trim()) return;
  };

  return (
    <main className="min-h-screen p-6 md:p-10 bg-primary flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-300">Create Account</h1>
        <form onSubmit={handleSubmit} className="bg-secondary p-6 rounded-2xl text-gray-300 border border-gray-500 transition-all hover:shadow-md">
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="flex-1 bg-transparent border border-tertiary py-3 px-4 rounded-xl outline-none focus:border-white transition-all duration-700 font-medium"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="flex-1 bg-transparent border border-tertiary py-3 px-4 rounded-xl outline-none focus:border-white transition-all duration-700 font-medium"
              required
            />
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              min="1"
              max="150"
              className="w-24 bg-transparent border border-tertiary py-3 px-4 rounded-xl outline-none focus:border-white transition-all duration-700 font-medium"
            />
          </div>
          <div className="flex gap-4 mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-transparent border border-tertiary py-3 px-4 rounded-xl outline-none focus:border-white transition-all duration-700 font-medium"
            />
            <div className="relative flex-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-transparent border border-tertiary py-3 px-4 pr-10 rounded-xl outline-none focus:border-white transition-all duration-700 font-medium"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-300 hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <button className="w-full bg-gray-950 py-3 px-6 rounded-xl">Create Account</button>
          <div className="mt-6 text-center">
            <Link to="/" className="text-white/60 hover:text-white transition-colors inline-flex items-center gap-2">
              Already have an account? Login
              <ArrowRight size={16} />
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;
