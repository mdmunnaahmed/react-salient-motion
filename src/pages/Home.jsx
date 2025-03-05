import { Link } from "react-router-dom";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Form submitted");
  };

  return (
    <div className="h-dvh flex flex-col items-center justify-center py-16">
      <div className="max-w-[816px] text-center w-full px-4">
        {/* Logo Link */}
        <Link className="mb-12 lg:mb-20 mx-auto inline-block" to="/">
          <img
            src="/public/logo.svg" // Ensure the path to the logo is correct
            alt="logo"
            className="max-w-[230px] lg:max-w-[314px]"
          />
        </Link>

        {/* Heading */}
        <h1 className="lg:text-5xl sm:text-4xl text-3xl mb-11">Log In</h1>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Username Input */}
          <input type="text" className="bg-input h-12 lg:h-[86px] w-full rounded-full px-6 lg:px-7 text-lg lg:text-xl" placeholder="Username" required />

          {/* Password Input */}
          <input type="password" className="bg-input h-12 lg:h-[86px] w-full rounded-full px-6 lg:px-7 text-lg lg:text-xl mt-6" placeholder="Password" required />

          {/* Forgot Password Link */}
          <div className="text-end">
            <Link className="underline lg:text-xl text-lg mt-4 mb-8 inline-block" to="/forgot-pass">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button type="submit" className="bg-primary hover:bg-primary-darker h-12 lg:h-[86px] w-full rounded-full px-6 lg:px-7 text-xl lg:mt-14 sm:mt-8 mt-4 transition-colors duration-200">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
