"use client";

import Heading from "@/components/ui/Heading";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";

import { OrderColumn, columns } from "./columns";

interface BillboardClientProps {
  data: OrderColumn[];
}

export const BillboardClient: React.FC<BillboardClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      />
      <Separator />
      <DataTable searchKey="products" columns={columns} data={data} />
    </>
  );
};
