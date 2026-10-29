import { useEffect, useState } from "react";
import api from "../utils/axios";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const { data } = await api.get("/contact");
        setContacts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="h-6 w-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl font-semibold">Contact Messages</h1>
        <p className="text-gray-500 text-sm mt-1">Messages from contact form</p>
      </div>
      <div className="relative bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/[0.03]">
              <tr>
                <th className="text-left text-xs font-medium text-white/60 px-6 py-3">Name</th>
                <th className="text-left text-xs font-medium text-white/60 px-6 py-3">Email</th>
                <th className="text-left text-xs font-medium text-white/60 px-6 py-3">Phone</th>
                <th className="text-left text-xs font-medium text-white/60 px-6 py-3">Service</th>
                <th className="text-left text-xs font-medium text-white/60 px-6 py-3">Message</th>
                <th className="text-left text-xs font-medium text-white/60 px-6 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {contacts.map((contact) => (
                <tr key={contact._id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 text-sm text-white">{contact.firstName} {contact.lastName}</td>
                  <td className="px-6 py-4 text-sm text-white/70">{contact.email}</td>
                  <td className="px-6 py-4 text-sm text-white/70">{contact.phone || "-"}</td>
                  <td className="px-6 py-4 text-sm text-white/70">{contact.service || "-"}</td>
                  <td className="px-6 py-4 text-sm text-white/70 max-w-xs truncate">{contact.message}</td>
                  <td className="px-6 py-4 text-sm text-white/50">
                    {new Date(contact.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {contacts.length === 0 && (
          <div className="text-center py-10 text-white/40 text-sm">No messages found</div>
        )}
      </div>
    </div>
  );
};

export default Contacts;
