"use client";

import { NodeProps, NodeData, NodeTable } from "@/components/node-table";
import PageHeader from "@/components/page-header";
import React, { useEffect, useState } from "react";
const axios = require("axios");

export default function Nodes() {
  const [fetchedNodeData, setFetchedNodeData] = useState<NodeData[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/fetchNodeData")
      .then(function (response: any) {
        let data = Object.keys(response.data).map(function (index) {
          let node = response.data[index] as NodeData;
          node.name = index;
          return node;
        });

        setFetchedNodeData(data);
      });
  }, []);

  return (
    <>
      <PageHeader title="Nodes" />
      {console.log("fetchedNodeData ", fetchedNodeData)}
      <NodeTable nodeData={fetchedNodeData} />
    </>
  );
}
