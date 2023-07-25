type FourColProps = {
  children: React.ReactNode;
};

const FourCol = ({ children }: FourColProps) => {
  return (
    <div className="tw-grid tw-grid-cols-4 tw-gap-4 tw-items-center">
      {children}
    </div>
  );
};

export default FourCol;
