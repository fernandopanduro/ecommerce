"use client";

import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

/* import { BillboardForm } from "./components/billboard-form"; */

const BillboardPage = async (/* {
  params,
}: {
  params: { billboardId: string };
} */) => {
  /* const billboard = await prismadb.billboard.findUnique({
    where: {
      id: params.billboardId,
    },
  });

  console.log(billboard); */

  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title="Billboards [0]"
          description="Manage billboards for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
          <Plus className="h-4 w-4 mr-2" />
          Add New
        </Button>
      </div>
      <Separator />
    </>
  );
};

export default BillboardPage;
