import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type NodeData = {
  name: string;
  ip: string;
  started_at: string;
  stopped: string;
  uptime: string;
};

export type NodeProps = {
  nodeData: NodeData[];
};

export function NodeTable(props: NodeProps) {
  const data = props.nodeData;
  return (
    <Table>
      <TableCaption>GCP Nodes available</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>IP</TableHead>
          <TableHead>Started At</TableHead>
          <TableHead>Uptime</TableHead>
          <TableHead>Stopped</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((node) => (
          <TableRow key={node.name}>
            <TableCell className="font-medium">{node.name}</TableCell>
            <TableCell>{node.ip}</TableCell>
            <TableCell>{node.started_at}</TableCell>
            <TableCell>{node.uptime}</TableCell>
            <TableCell>{node.stopped}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
}
