import prismadb from "@/lib/prismadb";
import { CategoryForm } from "./_components/category-form";

const BillboardPage = async ({
  params,
}: {
  params: { categoryId: string; storeId: string };
}) => {
  let category;

  if (params.categoryId === "new") {
    category = await prismadb.category.findUnique({
      where: {
        id: params.storeId,
      },
    });
  } else {
    category = await prismadb.category.findUnique({
      where: {
        id: params.categoryId,
      },
    });
  }

  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm billboards={billboards} initialData={category} />
      </div>
    </div>
  );
};

export default BillboardPage;
