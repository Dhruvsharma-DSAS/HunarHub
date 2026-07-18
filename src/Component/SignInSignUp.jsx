import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const SignInSignUp = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [show,setShow]=useState("password")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPreSign, setShowPreSign] = useState(false);
  const [fullName, setFullName] = useState("");
  
  const { login, register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (login(email, password)) {
      navigate("/");
    } else {
      alert("Invalid credentials. Please use karan123@gmail.com and karan123");
    }
  };

  const handleRegister = () => {
    if (email) {
      register(email, fullName || "New Maker");
      navigate("/dashboard", { state: { section: "listings" } });
    } else {
      alert("Please enter a valid email.");
    }
  };

  function handleshow(){
    if (show.trim()=="password"){
      setShow("text") 
    }else{
      setShow("password")
    }
  }



  return (
    <div className="flex min-h-screen">

      <div className="hidden lg:flex w-1/2 bg-stone-900 text-white flex-col justify-between p-10">

        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            hunar<span className="text-orange-300">hub</span>
          </h1>
          <Link to="/" className="text-sm text-stone-300 hover:text-white">
            ← Back to store
          </Link>

        </div>


        <div>
          <span className="bg-orange-700 text-white text-xs font-semibold px-4 py-2 rounded-full">
            THE LOCAL MARKET, ONLINE
          </span>
          <h2 className="text-5xl font-bold mt-6 leading-tight">
            Buy from the makers <br /> on your street.
          </h2>
          <p className="text-stone-400 mt-4 text-lg">
            Verified potters, tailors, cobblers and artisans near you — pay
            them directly, keep craft alive.
          </p>
        </div>

 
      

      
        <div className="flex gap-12">
          <div>
            <p className="text-2xl font-bold">1,240+</p>
            <p className="text-stone-400 text-sm">verified makers</p>
          </div>
          <div>
            <p className="text-2xl font-bold">18k</p>
            <p className="text-stone-400 text-sm">orders placed</p>
          </div>
          <div>
            <p className="text-2xl font-bold">₹0</p>
            <p className="text-stone-400 text-sm">platform fee</p>
          </div>
        </div>
      </div>


      <div className="w-full lg:w-1/2 bg-orange-50 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold text-stone-900">
            {isSignIn ? "Welcome back" : "Join hunarhub"}
          </h2>
          <p className="text-stone-500 mt-2">
            {isSignIn
              ? "Sign in to keep supporting makers near you."
              : "Create an account to support makers near you."}
          </p>

        
          <div className="flex bg-stone-200 rounded-xl p-1 mt-6">
            <button
              onClick={() => setIsSignIn(true)}
              className={`w-1/2 py-3 rounded-xl font-semibold ${
                isSignIn ? "bg-white text-stone-900 shadow" : "text-stone-500"
              }`}
            >
              Sign in
            </button>
            <button
              onClick={() => setIsSignIn(false)}
              className={`w-1/2 py-3 rounded-xl font-semibold ${
                !isSignIn ? "bg-white text-stone-900 shadow" : "text-stone-500"
              }`}
            >
              Create account
            </button>
          </div>

         
          {!isSignIn && (
            <div className="mt-6">
              <label className="font-semibold text-stone-800">Full name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-2 p-4 rounded-xl border border-stone-300 outline-none focus:border-orange-700"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          )}

         
          <div className="mt-6">
            <div className="flex justify-between">
              <label className="font-semibold text-stone-800">
                Email
              </label>

            </div>
            <div className="flex items-center mt-2 rounded-xl border border-stone-300 bg-white focus-within:border-orange-700">
              <input
                type="text"
                placeholder="example@gmail.com"
                className="w-full p-4 rounded-xl outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

      
          <div className="mt-6">
            <div className="flex justify-between">
              <label className="font-semibold text-stone-800">Password</label>
              {isSignIn && (
                <Link to="/forgetpassword" className="text-orange-700 text-sm font-medium">
                  Forgot?
                </Link>
              )}
            </div>
            <div className="flex items-center mt-2 rounded-xl border border-stone-300 bg-white focus-within:border-orange-700">
              <input
                type={show}
                placeholder="Enter your password"
                className="w-full p-4 rounded-xl outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="pr-4 font-semibold text-stone-800" onClick={()=>handleshow()}>
                Show
              </button>
            </div>
          </div>

         
          <div className="flex items-center gap-2 mt-5">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-stone-700">Keep me signed in on this device</p>
          </div>


          <button onClick={isSignIn ? handleLogin : handleRegister} className="w-full bg-orange-700 hover:bg-orange-800 text-white font-semibold text-lg py-4 rounded-xl mt-6">
            {isSignIn ? "Sign in" : "Create account"}
          </button>

          {isSignIn && (
            <div className="flex flex-col items-center mt-4">
              <button 
                onClick={() => setShowPreSign(!showPreSign)}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold py-3 rounded-xl mb-2 uppercase tracking-wide"
              >
                PRE SIGN DETAIL
              </button>
              {showPreSign && (
                <div className="bg-orange-100 text-orange-800 p-3 rounded-xl border border-orange-200 text-sm py-4 text-center w-full mt-2 transition-all">
                  <p>Use this id: <b>karan123@gmail.com</b></p>
                  <p className="mt-1">and password: <b>karan123</b></p>
                  <button 
                    onClick={() => {
                        setEmail("karan123@gmail.com");
                        setPassword("karan123");
                    }}
                    className="mt-3 bg-orange-700 hover:bg-orange-800 text-white px-4 py-2 rounded-lg text-xs font-bold w-full"
                  >
                     Auto-fill
                  </button>
                </div>
              )}
            </div>
          )}


          <div className="flex items-center gap-4 mt-6">
            <div className="flex-1 h-px bg-stone-300"></div>
            <p className="text-stone-500 text-sm">or continue with</p>
            <div className="flex-1 h-px bg-stone-300"></div>
          </div>

 
          <div className="flex justify-center mt-6">
            <button className="w-1/2 bg-white border border-stone-300 py-3 rounded-xl font-semibold text-stone-800">
            Google
            </button>

          </div>


          <p className="text-center text-stone-600 mt-6">
            {isSignIn ? "New to hunarhub? " : "Already have an account? "}
            <button
              onClick={() => setIsSignIn(!isSignIn)}
              className="text-orange-700 font-semibold"
            >
              {isSignIn ? "Create an account" : "Sign in"}
            </button>
          </p>

        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
