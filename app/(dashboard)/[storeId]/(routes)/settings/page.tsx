import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import SettingsForm from "./_components/settings-form";

type Props = {
  params: {
    storeId: string;
  };
};

const SettingsPage = async ({ params }: Props) => {
  const { userId } = auth();
  if (!userId) return redirect("sign-in");
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) return redirect("/");

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initialData={store} />
      </div>
    </div>
  );
};

export default SettingsPage;
