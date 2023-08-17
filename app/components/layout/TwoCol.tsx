type TwoColProps = {
  children: React.ReactNode;
  items?: "center" | "end";
};

const TwoCol = ({ children, items = "center" }: TwoColProps) => {

  let itemsClass;

  if (items === "center") {
    itemsClass = "tw-items-center"
  }

  if (items === "end") {
    itemsClass = "tw-items-end"
  }

  return (
    <div className={`tw-grid lg:tw-grid-cols-2 tw-gap-8 md:tw-gap-12 ${itemsClass}`}>
      {children}
    </div>
  );
};

export default TwoCol;
