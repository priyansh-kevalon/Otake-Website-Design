import { useEffect, useState } from "react";
import api from "../utils/axios";

const TemplateApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const { data } = await api.get("/template-applications");
        setApplications(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchApplications();
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
        <span className="inline-block w-fit rounded-full bg-yellow-300 px-3 py-1 text-[11px] font-semibold text-neutral-800 sm:px-3.5 sm:py-1.5 sm:text-[12px]">
          Applications
        </span>
        <h1 className="mt-3 text-xl font-semibold text-neutral-900">Template Applications</h1>
        <p className="text-neutral-500 text-sm mt-1">Applications from "Apply Now" form</p>
      </div>
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-white/60 shadow-[0_10px_40px_rgba(30,8,25,0.04)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-pink-50/40 to-purple-50/40">
              <tr>
                <th className="text-left text-xs font-medium text-neutral-500 px-6 py-3">Full Name</th>
                <th className="text-left text-xs font-medium text-neutral-500 px-6 py-3">Email</th>
                <th className="text-left text-xs font-medium text-neutral-500 px-6 py-3">Phone</th>
                <th className="text-left text-xs font-medium text-neutral-500 px-6 py-3">Company</th>
                <th className="text-left text-xs font-medium text-neutral-500 px-6 py-3">Website</th>
                <th className="text-left text-xs font-medium text-neutral-500 px-6 py-3">Role</th>
                <th className="text-left text-xs font-medium text-neutral-500 px-6 py-3">Message</th>
                <th className="text-left text-xs font-medium text-neutral-500 px-6 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {applications.map((app) => (
                <tr key={app._id} className="hover:bg-pink-50/30 transition-colors">
                  <td className="px-6 py-4 text-sm text-neutral-900">{app.fullName}</td>
                  <td className="px-6 py-4 text-sm text-neutral-600">{app.email}</td>
                  <td className="px-6 py-4 text-sm text-neutral-600">{app.phone}</td>
                  <td className="px-6 py-4 text-sm text-neutral-600">{app.companyName || "-"}</td>
                  <td className="px-6 py-4 text-sm text-neutral-600">{app.website || "-"}</td>
                  <td className="px-6 py-4 text-sm text-neutral-600">{app.role || "-"}</td>
                  <td className="px-6 py-4 text-sm text-neutral-600 max-w-xs truncate">{app.message}</td>
                  <td className="px-6 py-4 text-sm text-neutral-500">
                    {new Date(app.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {applications.length === 0 && (
          <div className="text-center py-10 text-neutral-500 text-sm">No applications found</div>
        )}
      </div>
    </div>
  );
};

export default TemplateApplications;
