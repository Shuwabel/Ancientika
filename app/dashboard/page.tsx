import { connectDB } from "@/lib/mongodb";
import Waitlist from "@/models/Waitlist";
import DashboardClient from "./DashboardClient";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  await connectDB();

  const users = await Waitlist.find({}).sort({ createdAt: -1 }).lean();

  return <DashboardClient users={JSON.parse(JSON.stringify(users))} />;
}
