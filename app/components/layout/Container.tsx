type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="tw-px-2 tw-mx-auto tw-max-w-[1100px]">{children}</div>;
};

export default Container;
