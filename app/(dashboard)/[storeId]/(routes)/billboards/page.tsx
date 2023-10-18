
import BillboardClient from "./_components/billboard-client";

type Props = {};

const BillboardsPage = (props: Props) => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-2 pt-6">
        <BillboardClient />
      </div>
    </div>
  );
};

export default BillboardsPage;
