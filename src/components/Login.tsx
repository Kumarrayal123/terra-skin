// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Login: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Get user from localStorage
//     const savedUser = localStorage.getItem("user");

//     if (savedUser) {
//       const parsedUser = JSON.parse(savedUser);

//       if (parsedUser.email === email && parsedUser.password === password) {
//         // ✅ Correct credentials
//         localStorage.setItem("loggedIn", "true"); // store login state
//         navigate("/"); // go to Home
//       } else {
//         alert("Invalid credentials ❌");
//       }
//     } else {
//       alert("No account found. Please sign up first.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full p-2 border rounded"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full p-2 border rounded"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-[#8d4745] text-white py-2 rounded"
//           >
//             Login
//           </button>
//         </form>
//         <p className="text-center text-sm mt-4">
//           Don’t have an account?{" "}
//           <Link to="/signup" className="text-[#8d4745] font-medium">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;





import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);

      if (parsedUser.email === email && parsedUser.password === password) {
        localStorage.setItem("loggedIn", "true");

        // ✅ Extract name from email (before @)
        const name = email.split("@")[0];

        // ✅ Track login history in localStorage
        const loginHistory = JSON.parse(localStorage.getItem("loginHistory") || "[]");

        if (!loginHistory.includes(email)) {
          // New user login
          toast.success(`🎉 Welcome ${name} to TerraSkin!`, {
            position: "top-right",
            autoClose: 3000,
          });
          loginHistory.push(email);
          localStorage.setItem("loginHistory", JSON.stringify(loginHistory));
        } else {
          // Returning user
          toast.info(`👋 Welcome back ${name} to TerraSkin!`, {
            position: "top-right",
            autoClose: 3000,
          });
        }

        // Redirect after short delay
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        toast.error("❌ Invalid credentials", { position: "top-right", autoClose: 3000 });
      }
    } else {
      toast.error("⚠️ No account found. Please sign up first.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-[#8d4745] text-white py-2 rounded"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#8d4745] font-medium">
            Sign up
          </Link>
        </p>
      </div>

      {/* ✅ Toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default Login;
