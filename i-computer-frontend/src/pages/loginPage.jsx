import { MdEmail } from "react-icons/md";
import { BiKey } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import{useState} from 'react';
import toast from "react-hot-toast";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    
const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const  navigate = useNavigate();

   async function handleLogin() {

    setIsLoading(true);    
      

        try {
            const res = await api.post("/users/login", {
                email: email,
                password: password
            });
            console.log(res);
            toast.success("Login successful: " + res.data.message);
localStorage.setItem("token", res.data.token);

if(res.data.user.role === "admin") {
    navigate("/admin");
}else {
 navigate("/");
}


        } catch (error) {
            toast.error("Login failed: " + error.response.data.message);
        }
        setIsLoading(false);
    }

    return (
    <div className="w-full min-h-screen bg-[url('/login-bg.jpg')] bg-cover bg-center flex items-center justify-center">

      <div className="w-[420px] backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-10">

        <h1 className="text-4xl font-bold text-center text-white mb-10">
          Login
        </h1>

        {/* Email */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-white mb-2">
            <MdEmail size={20} />
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            className="w-full bg-transparent border-b-2 border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-cyan-400 py-2"
            onChange={(e) => {
              
              setEmail(e.target.value);

            }}
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="flex items-center gap-2 text-white mb-2">
            <BiKey size={20} />
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}    
            className="w-full bg-transparent border-b-2 border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-cyan-400 py-2"
          onChange={(e) => {
               
              setPassword(e.target.value);
            }}
          
          />
        </div>

        {/* Forgot Password */}
        <div className="text-right mb-8">
          <button className="text-gray-200 hover:text-cyan-400 transition">
            Forgot Password?
          </button>
        </div>

        {/* Login Button */}
        <button disabled={isLoading} className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition" onClick={handleLogin}>
         
          {isLoading? "..loading." : "login"}
        </button>

        {/* Sign Up */}
        <p className="text-center text-gray-200 mt-6">
          Don't have an account?{" "}
          <span className="text-cyan-400 cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>
        <p className="text-center text-gray-200 mt-6">
         
          <button className="w-full flex items-center justify-center gap-3 bg-black/70 text-white py-3 rounded-xl border border-gray-700 hover:bg-black hover:border-cyan-400 transition-all duration-300 shadow-xl">
    <FcGoogle size={24} />
    Sign in with Google
  </button>
        </p>
      </div>
    </div>
  );
}