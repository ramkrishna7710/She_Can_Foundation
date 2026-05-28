import { useState } from "react";

import API from "../../services/api";

import { toast } from "react-toastify";

function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",

    email: "",

    message: "",
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
      const res = await API.post("/contact", form);

      toast.success(res.data.message);

      setForm({
        name: "",

        email: "",

        message: "",
      });
    } catch {
      toast.error("Submission Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-20">
      <h2 className="text-4xl mb-10">Contact Us</h2>

      <form onSubmit={submit} className="flex flex-col gap-5 w-full max-w-xl">
        <input
          name="name"
          value={form.name}
          placeholder="Name"
          onChange={change}
          className="border p-3"
        />

        <input
          name="email"
          value={form.email}
          placeholder="Email"
          onChange={change}
          className="border p-3"
        />

        <textarea
          name="message"
          value={form.message}
          placeholder="Message"
          onChange={change}
          className="border p-3"
        />

        <button disabled={loading} className="bg-black text-white p-3">
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
