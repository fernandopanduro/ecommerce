import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="p-4">
      This protected route
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default SetupPage;
