import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");

    window.location = "/login";
  };

  return (
    <nav
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      flex
      justify-between
      items-center
      px-10
      py-5
      bg-black/30
      backdrop-blur-md
      text-white
      "
    >
      {" "}
      <h1 className="text-2xl font-bold">She Can Foundation</h1>
      <div className="flex gap-5">
        <Link to="/">Home</Link>

        {token ? (
          <>
            <Link to="/dashboard">Dashboard</Link>

            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>

            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
