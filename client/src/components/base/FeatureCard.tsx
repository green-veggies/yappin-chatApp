import React from "react";
import { Card } from "@/components/ui/card";

export default function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-6 bg-card bg-neutral-700">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-yellow-400">{title}</h3>
      <p className="text-muted-foreground text-yellow-300">{description}</p>
    </Card>
  );
}
