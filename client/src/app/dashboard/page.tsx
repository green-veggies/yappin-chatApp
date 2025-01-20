import CreateChat from "@/components/chatGroup/CreateChat";
import DashNav from "@/components/chatGroup/DashNav";
import React from "react";
import { authOptions, CustomSession } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { fetchChatGroups } from "@/fetch/groupFetch";
import GroupChatCard from "@/components/chatGroup/GroupChatCard";

export default async function dashboard() {
  const session: CustomSession | null = await getServerSession(authOptions);
  const groups: Array<GroupChatType> | [] = await fetchChatGroups(
    session?.user?.token!
  );

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-neutral-950 to-neutral-700">
      {/* Navbar */}
      <DashNav
        name={session?.user?.name!}
        image={session?.user?.image ?? undefined}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 flex-1 flex flex-col">
        <div className="flex justify-between items-center mt-6 mb-8">
          <CreateChat user={session?.user!} />
        </div>

        {/* Group Chat Cards */}
        <div className="flex-1">
          {groups.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groups.map((item, index) => (
                <GroupChatCard group={item} key={index} user={session?.user!} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-full">
              <p className="text-neutral-300 text-2xl">No groups available. Start by creating one!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

