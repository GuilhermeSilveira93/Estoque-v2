const DashBoard = async ({ searchParams }) => {
  return (
    <header className="mt-10 grid h-40 grid-flow-row grid-cols-4 bg-red-300 bg-opacity-50">
      <div className="h-full w-full border border-primary-foreground "></div>
      <div className="h-full w-full border border-primary-foreground "></div>
      <div className="h-full w-full border border-primary-foreground "></div>
      <div className="h-full w-full border border-primary-foreground "></div>
    </header>
  );
};
export default DashBoard;
