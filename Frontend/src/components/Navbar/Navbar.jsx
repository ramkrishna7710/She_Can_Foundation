import { Link } from "react-router-dom";

import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");

    window.location.reload();
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
      px-6
      md:px-10
      py-5
      bg-black/30
      backdrop-blur-md
      text-white
      "
    >
      <h1
        className="
        font-bold
        text-xl
        "
      >
        She Can Foundation
      </h1>

      {/* Desktop Menu */}

      <div
        className="
        hidden
        md:flex
        gap-8
        items-center
        "
      >
        <Link to="/">Home</Link>

        <Link to="/dashboard">Dashboard</Link>

        {token ? (
          <>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>

            <Link to="/register">Register</Link>
          </>
        )}
      </div>

      {/* Mobile Hamburger */}

      <button
        className="
        md:hidden
        text-3xl
        "
        onClick={() => {
          setOpen(!open);
        }}
      >
        ☰
      </button>

      {/* Mobile Dropdown */}

      {open && (
        <div
          className="
          absolute
          top-full
          left-0
          right-0
          bg-black/90
          backdrop-blur-md
          flex
          flex-col
          items-center
          gap-6
          py-6
          md:hidden
          "
        >
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to="/dashboard" onClick={() => setOpen(false)}>
            Dashboard
          </Link>

          {token ? (
            <button
              onClick={() => {
                logout();

                setOpen(false);
              }}
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" onClick={() => setOpen(false)}>
                Login
              </Link>

              <Link to="/register" onClick={() => setOpen(false)}>
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
