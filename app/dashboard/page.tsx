/* eslint-disable @typescript-eslint/no-explicit-any */
import { connectDB } from "@/lib/mongodb";
import Waitlist from "@/models/Waitlist";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  await connectDB();

  const users = await Waitlist.find({}).sort({ createdAt: -1 }).lean();

  return (
    <div className="p-10 w-full  min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold mb-6 w-full items-center justify-center flex zina">
        Waitlist Dashboard
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border overflow-hidden shadow-lg rounded-2xl">
          <thead>
            <tr className="bg-primary text-left">
              <th className="p-3 ">#</th>
              <th className="p-3 flex items-center justify-center ">Email</th>
              <th className="p-3 text-center">Date Joined</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user: any, index: number) => (
              <tr key={user._id} className=" clash">
                <td className="p-3">
                  <div className="border border-gray-200 rounded-2xl p-2 flex items-center justify-center w-8 h-8 shadow-lg">
                    {index + 1}
                  </div>
                </td>
                <td className="p-3 border-gray-200">
                  <div className="truncate border border-gray-200 rounded-2xl p-2 shadow flex items-center justify-center ">
                    {user.email}
                  </div>
                </td>
                <td className="p-3 border-gray-200 ">
                  <div className="truncate border border-gray-200 rounded-2xl p-2 shadow flex items-center justify-center ">
                    {new Date(user.createdAt).toLocaleString()}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <p className="mt-4 text-gray-500">No users yet.</p>
        )}
      </div>
    </div>
  );
}
