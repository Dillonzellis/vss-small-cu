import { colorClasses, Color } from "../utils/colorClasses";

export type SectionProps = {
  id?: string | "";
  children: React.ReactNode;
  bgColor?: Color;
};

const Section = ({ id = "", children, bgColor }: SectionProps) => {
  const colorClass = bgColor ? colorClasses[bgColor] : undefined;

  return (
    <section
      id={id}
      className={`tw-my-4 tw-rounded-md tw-px-2 tw-py-8 tw-shadow-lg tw-shadow-slate-900/20 md:tw-px-8 md:tw-py-12 ${
        colorClass || ""
      }`.trim()}
    >
      {children}
    </section>
  );
};

export default Section;
