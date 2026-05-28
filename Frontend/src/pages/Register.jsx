import { useState } from "react";

import API from "../services/api";

import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",

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
      await API.post("/auth/register", form);

      toast.success("Registered Successfully");

      navigate("/login");
    } catch {
      toast.error("Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={submit} className="shadow p-10 flex flex-col gap-5 w-96">
        <h1 className="text-3xl">Register</h1>

        <input
          name="name"
          placeholder="Name"
          onChange={change}
          className="border p-3"
        />

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

        <button disabled={loading} className="bg-black text-white p-3">
          {loading ? "Loading..." : "Register"}
        </button>
      </form>
    </div>
  );
}

export default Register;
