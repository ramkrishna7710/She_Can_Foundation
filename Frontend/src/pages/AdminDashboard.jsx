import { useEffect, useState } from "react";

import API from "../services/api";

import { toast } from "react-toastify";

import Upload from "../components/ImageUpload";

function Dashboard() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      const res = await API.get(
        "/admin/messages",

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      setMessages(res.data);
    } catch {
      toast.error("Cannot Load Messages");
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const remove = async (id) => {
    try {
      await API.delete(
        `/admin/messages/${id}`,

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      toast.success("Message Deleted");

      fetchData();
    } catch {
      toast.error("Delete Failed");
    }
  };

  const filtered = messages.filter((item) =>
    item.name
      .toLowerCase()

      .includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

        {/* upload image */}
      {/* <div className="mb-10">
        <Upload />
      </div> */}

      <div className="bg-white p-6 rounded shadow mb-10">
        <h2 className="text-2xl font-semibold">Total Messages</h2>

        <p className="text-4xl mt-4">{messages.length}</p>
      </div>

      <input
        placeholder="Search"
        className="
            border
            p-3
            mb-8
            w-full
            "
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <div className="text-center text-2xl">Loading...</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div key={item._id} className="bg-white rounded shadow p-6">
              <h2 className="font-bold text-xl">{item.name}</h2>

              <p className="mt-2 text-gray-600">{item.email}</p>

              <p className="mt-4">{item.message}</p>

              <button
                onClick={() => remove(item._id)}
                className="
                mt-6
                bg-red-500
                text-white
                px-4
                py-2
                rounded
                hover:bg-red-600
                "
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
