"use client";

import { NodeData, NodeTable } from "@/components/node-table";
import PageHeader from "@/components/page-header";
import React, { useEffect, useState } from "react";
const axios = require("axios");

const nodes: NodeData[] = [
  { name: "node1" },
  { name: "node2" },
  { name: "node3" },
  { name: "node4" },
  { name: "node5" },
];

export default function Nodes() {
  const [fetchedNodeData, setFetchedNodeData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/fetchNodeData")
      .then(function (response: any) {
        setFetchedNodeData(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <>
      <PageHeader title="Nodes" />
      <NodeTable nodeData={fetchedNodeData} />
    </>
  );
}
