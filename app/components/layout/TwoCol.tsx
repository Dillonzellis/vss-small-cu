type TwoColProps = {
  children: React.ReactNode;
};

const TwoCol = ({ children }: TwoColProps) => {
  return (
    <div className="tw-grid tw-grid-cols-2 tw-gap-8 tw-items-center">
      {children}
    </div>
  );
};

export default TwoCol;
