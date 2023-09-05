import { Color } from "../utils/colorClasses";

type CirclesWrapperProps = {
  children: React.ReactNode;
  cols?: 3 | 4 | 5 | 6;
};

const CirclesWrapper = ({ children, cols }: CirclesWrapperProps) => {
  const gridColsClass =
    cols === 3
      ? "lg:tw-grid-cols-3"
      : cols === 4
      ? "lg:tw-grid-cols-4"
      : cols === 5
      ? "lg:tw-grid-cols-5"
      : cols === 6
      ? "lg:tw-grid-cols-6"
      : "lg:tw-grid-cols-5";

  return (
    <div
      className={`tw-flex tw-flex-col tw-items-center tw-gap-2 lg:tw-grid ${gridColsClass}`}
    >
      {children}
    </div>
  );
};

export default CirclesWrapper;
