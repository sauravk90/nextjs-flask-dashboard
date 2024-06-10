"use client";

import Card, { CardProps } from "@/components/card";
import PageHeader from "@/components/page-header";
import {
  BadgeCheck,
  Clock4,
  Drill,
  LucideIcon,
  Monitor,
  RefreshCcw,
} from "lucide-react";
import { revalidatePath } from "next/cache";
import { Suspense, useEffect, useState } from "react";
import { refreshDashboard } from "./actions";
import { useStore } from "@/lib/store";
import { NodeData } from "@/components/node-table";
import NodeUsageChart from "@/components/node-usage-chart";
import LoadingSkeleton from "./loading";

const axios = require("axios");


// let cardData: CardProps[] = [
//   {
//     label: "Total Processed",
//     value: 25,
//     description: "last 1 month",
//     icon: BadgeCheck,
//   },
//   {
//     label: "In Progress",
//     value: 2,
//     description: "Projects under processing",
//     icon: Drill,
//   },
//   {
//     label: "Pending",
//     value: 5,
//     description: "Tasks pending",
//     icon: Clock4,
//   },
//   {
//     label: "Processing Nodes",
//     value: 8,
//     description: "Processing GCP Nodes",
//     icon: Monitor,
//   },
//   {
//     label: "Nodes",
//     value: 42,
//     description: "Available GCP Nodes",
//     icon: Monitor,
//   },
// ];

export default function Home() {  
  const nodes = useStore((state: any) => state.nodes);
  const setNodes = useStore((state: any ) => state.setNodes);
  const [cardData, setCardData] = useState<CardProps[] | null>(null);


  useEffect(() => {
    if (!cardData){
     let cardDataT: CardProps[] = [
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

      axios
      .get("http://127.0.0.1:5000/fetchNodeData")
      .then(function (response: any) {
        let data = Object.keys(response.data).map(function (index) {
          let node = response.data[index] as NodeData;
          node.name = index;
          return node;
        });

        setNodes(data);
      });

      axios
      .get("http://127.0.0.1:5000/fetchProcessingData")
      .then(function (response: any) {
        console.log(response.data.processing_nodes)
        cardDataT[0].value = response.data.total_processed
        cardDataT[1].value = response.data.project_in_progress
        cardDataT[2].value = response.data.tasks_pending
        cardDataT[3].value = response.data.processing_nodes.length
        });

        setCardData(cardDataT);
    }
   
  },[cardData]);


  return (
    <div className="w-full flex flex-col gap-5">
      <PageHeader title="Dashboard" action={refreshDashboard} />
      {nodes.length}
      <div className="grid w-full grid-cols-3 gap-4 gap-x-8 transition-all">
        {cardData?.map((d, i) => (
          // <Suspense fallback={<LoadingSkeleton />}>
          <Card
            key={i}
            value={d.value}
            description={d.description}
            icon={d.icon}
            label={d.label}
          />
          // </Suspense>
         
        ))}
      </div>

      <div className="grid w-full grid-cols-3 gap-4 gap-x-8 transition-all">
      <NodeUsageChart />

      </div>
    </div>
  );
}
