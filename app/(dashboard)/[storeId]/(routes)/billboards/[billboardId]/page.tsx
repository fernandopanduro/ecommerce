import prismadb from "@/lib/prismadb";

import { BillboardForm } from "./_components/billboard-form";

const BillboardPage = async ({
  params,
}: {
  params: { billboardId: string; storeId: string };
}) => {
  let billboard;

  if (params.billboardId === "new") {
    billboard = await prismadb.billboard.findUnique({
      where: {
        id: params.storeId,
      },
    });
  } else {
    billboard = await prismadb.billboard.findUnique({
      where: {
        id: params.billboardId,
      },
    });
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
};

export default BillboardPage;
