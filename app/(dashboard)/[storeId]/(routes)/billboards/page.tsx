import prismadb from "@/lib/prismadb";
import { format } from "date-fns";
import BillboardClient from "./_components/billboard-client";
import { BillboardColumn } from "./_components/columns";

type Props = {
  params: { storeId: string };
};

const BillboardsPage = async ({ params }: Props) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedBillboards: BillboardColumn[] = billboards.map(item => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col p-6">
      <div className="flex-1 space-y-4 p-2 pt-6">
        <BillboardClient data={formattedBillboards} />
      </div>
    </div>
  );
};

export default BillboardsPage;
