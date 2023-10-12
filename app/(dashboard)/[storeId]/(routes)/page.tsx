import prismadb from "@/lib/prismadb";

type Props = {
  params: { storeId: string };
};

const DashboardPage = async ({ params }: Props) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return <div>Active Store: {store?.name}</div>;
};

export default DashboardPage;
