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
};

type NodeProps = {
  nodeData: NodeData[];
};

export function NodeTable(data: NodeProps) {
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
        {data.nodeData.map((node) => (
          <TableRow key={node.name}>
            <TableCell className="font-medium">{node.name}</TableCell>
            <TableCell>10.0.0.1</TableCell>
            <TableCell>BLABLABLA</TableCell>
            <TableCell>BLABLABLA</TableCell>
            <TableCell>BLABLABLA</TableCell>
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
