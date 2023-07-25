type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="tw-mx-auto tw-max-w-[1100px]">{children}</div>;
};

export default Container;
