import { cn } from "./utils/util";

type DisclaimerProps = React.HTMLAttributes<HTMLDivElement>;

export const Disclaimer = ({
  children,
  className,
  ...props
}: DisclaimerProps) => {
  return (
    <div
      className={cn("tw-text-xs tw-italic lg:tw-text-sm", className)}
      {...props}
    >
      {children}
    </div>
  );
};
