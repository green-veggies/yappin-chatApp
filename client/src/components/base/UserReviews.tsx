import React from "react";
import { Card } from "@/components/ui/card";
export default function UserReviews() {
  return (
    <section className="p-12 bg-neutral-900">
      <h2 className="text-3xl text-yellow-400 font-bold text-center mb-8">
        What Our Yappers Say
      </h2>
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
        <Card className="p-6 text-center bg-neutral-700">
          <p className="text-lg text-yellow-300">
            “Yappin is a game-changer! It's the fastest app I ever used.”
          </p>
          <div className="mt-4">
            <img
              src="/images/user1.png"
              alt="User 1"
              className="w-12 h-12 rounded-full mx-auto"
            />
            <div className="mt-2 text-yellow-400">Anil</div>
          </div>
        </Card>
        <Card className="p-6 text-center bg-neutral-700">
          <p className="text-lg text-yellow-300">
            “The encryption is top-notch. I feel secure using Yappin.”
          </p>
          <div className="mt-4">
            <img
              src="/images/user2.png"
              alt="User 2"
              className="w-12 h-12 rounded-full mx-auto"
            />
            <div className="mt-2 text-yellow-400">Rahul</div>
          </div>
        </Card>
      </div>
    </section>
  );
}
