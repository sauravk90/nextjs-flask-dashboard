import Card, { CardProps } from "@/components/card";
import PageHeader from "@/components/page-header";
import { BadgeCheck, Clock4, Drill, LucideIcon, Monitor } from "lucide-react";

const cardData: CardProps[] = [
  {
    label: "Total Processed",
    value: 25,
    description: "last 1 month",
    icon: BadgeCheck,
  },
  {
    label: "In Progress",
    value: 2,
    description: "Projects under processing",
    icon: Drill,
  },
  {
    label: "Pending",
    value: 5,
    description: "Tasks pending",
    icon: Clock4,
  },
  {
    label: "Processing Nodes",
    value: 8,
    description: "Processing GCP Nodes",
    icon: Monitor,
  },
  {
    label: "Nodes",
    value: 42,
    description: "Available GCP Nodes",
    icon: Monitor,
  },
];

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-5">
      <PageHeader title="Dashboard" />
      <div className="grid w-full grid-cols-3 gap-4 gap-x-8 transition-all">
        {cardData.map((d, i) => (
          <Card
            key={i}
            value={d.value}
            description={d.description}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </div>
    </div>
  );
}
