import Button from "../Button";
import { Disclaimer } from "../Disclaimer";
import Section from "../layout/Section";
import Link from "../Link";
import { ContentProps } from "../utils/sectionProps";

const BoardFunding = ({ bgColor }: ContentProps) => {
  return (
    <Section bgColor={bgColor}>
      <div className="tw-flex tw-flex-col tw-gap-4 tw-text-slate-900">
        <img src="https://lscu.coop/member-engagement/imgs/header-edit.png" />
        <div className="tw-text-lg lg:tw-text-xl">
          The LSCU board of directors has approved funding for the Small Credit
          Union Initiatives Account Program, available to all affiliated credit
          unions $100 million in assets or less. The LSCU has created an account
          in your credit union’s name in the amount of $1,000 to use toward the
          purchase of any LSCU, LEVERAGE, or a CUNA product, service and/or
          event including:
        </div>
        <Link
          gradient="dark-green"
          href="https://lscu.coop/education/index.php "
        >
          LSCU Education and Training Events
        </Link>
        <Link
          gradient="dark-green"
          href="https://www.cuna.org/content/cuna/cuna-org/events.html?r=1&sortBy=date"
        >
          CUNA Education and Training Events
        </Link>
        <Link gradient="dark-green" href="mailto:memberengagement@lscu.coop">
          LSCU Strategic Planning Sessions (contact your Member Engagement
          Consultant for details)
        </Link>
        <Link gradient="dark-green" href="https://myleverage.com/">
          LEVERAGE Products (LSCU Service Corp.)
        </Link>
        <Link
          gradient="dark-green"
          href="https://lscu.coop/foundation/ficep.php"
        >
          Southeastern Credit Union Foundation FiCEP
        </Link>
        <div className="lg:tw-text-lg">
          To utilize Small CU Initiatives Account funds, please submit your paid
          invoice to the Member Engagement Team; it will be paid from the Small
          CU Initiatives Account upon receipt for used events/services.
        </div>
        <Button
          text="Member Engagement Team"
          link="mailto:memberengagement@lscu.coop"
          variant="dark"
        />
        <Disclaimer>
          The Small CU Initiatives Fund was approved based on the LSCU’s budget
          and will be re-evaluated each year as part of our budget process.
          Unused funds in your account cannot be rolled over or transferred to
          other credit unions. This money must be used by by the end of the year
          and cannot be accessed until your credit union’s LSCU dues have been
          paid. Credit unions who receive a dues waiver are not eligible for the
          Small CU Initiatives Account program. Please submit a paid invoice to
          the Member Engagement team for approval and reimbursement.
        </Disclaimer>
      </div>
    </Section>
  );
};

export default BoardFunding;
