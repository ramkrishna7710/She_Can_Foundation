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
      const res = await API.post(
        "/auth/register",

        form,
      );

      localStorage.setItem(
        "token",

        res.data.token,
      );

      toast.success("Registered Successfully");

      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
flex
justify-center
items-center
h-screen
bg-gray-100
"
    >
      <form
        onSubmit={submit}
        className="
bg-white
shadow
rounded
p-10
w-96
flex
flex-col
gap-5
"
      >
        <h1
          className="
text-3xl
font-bold
"
        >
          Register
        </h1>

        <input
          name="name"
          value={form.name}
          onChange={change}
          placeholder="Name"
          className="
border
p-3
rounded
"
        />

        <input
          name="email"
          value={form.email}
          onChange={change}
          placeholder="Email"
          className="
border
p-3
rounded
"
        />

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={change}
          placeholder="Password"
          className="
border
p-3
rounded
"
        />

        <button
          type="submit"
          disabled={loading}
          className="
bg-black
text-white
p-3
rounded
"
        >
          {loading ? "Loading..." : "Register"}
        </button>
      </form>
    </div>
  );
}

export default Register;
