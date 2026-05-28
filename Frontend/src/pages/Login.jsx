import { useState } from "react";

import API from "../services/api";

import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",

    password: "",
  });

  const change = (e) => {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);

      navigate("/");
    } catch {
      toast.error("Invalid Credentials");
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={submit} className="shadow p-10 flex flex-col gap-5 w-96">
        <h1 className="text-3xl">Login</h1>
        <input
          name="email"
          placeholder="Email"
          onChange={change}
          className="border p-3"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={change}
          className="border p-3"
        />
        <button className="bg-black text-white p-3">
          {loading ? "Loading..." : "Login"}
        </button>{" "}
      </form>
    </div>
  );
}

export default Login;
