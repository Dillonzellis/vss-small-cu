import Section from "../layout/Section";
import Link from "../Link";
import { ContentProps } from "../utils/sectionProps";

const BoardFunding = ({ bgColor }: ContentProps) => {
  return (
    <Section bgColor={bgColor}>
      <div className="tw-text-slate-900 tw-flex tw-flex-col tw-gap-4">
        <img src="https://lscu.coop/member-engagement/imgs/header-edit.png" />
        <div className="tw-text-lg lg:tw-text-xl">
          The LSCU board of directors has approved funding for the Small Credit
          Union Initiatives Account Program, available to all affiliated credit
          unions $100 million in assets or less. The LSCU has created an account
          in your credit union’s name in the amount of $1000 to use toward the
          purchase of any LSCU, LEVERAGE, or a CUNA product and/or service
          including:
        </div>
        <Link
          dark
          href="https://lscu.coop/member-engagement/chapters/calendar.php"
        >
          LSCU Education and Training Events
        </Link>
        <Link
          dark
          href="https://www.cuna.org/content/cuna/cuna-org/events.html?r=1&sortBy=date"
        >
          CUNA Education and Training Events
        </Link>
        <Link dark href="">
          LSCU Strategic Planning Sessions (contact your Member Engagement
          Consultant for details)
        </Link>
        <Link dark href="https://myleverage.com/">
          LEVERAGE Products (LSCU Service Corp.)
        </Link>
        <Link dark href="https://lscu.coop/foundation/ficep.php">
          FiCEP
        </Link>
        <div className="lg:tw-text-lg">
          To utilize Small CU Initiatives Account funds, simply notify your
          Member Engagement Consultant. You may also note that the invoice is to
          be paid from the Small CU Initiatives Account upon receipt for
          events/services used. LSCU accounting staff will keep track of
          expenditures from your account.
        </div>
        <div className="tw-text-xs lg:tw-text-sm">
          The Small CU Initiatives Fund was approved based on the LSCU’s 2023
          budget and will be re-evaluated each year as part of our budget
          process. Unused funds in your account cannot be rolled over or
          transferred to other credit unions. This money must be used by Dec.
          31, 2023 and cannot be accessed until your credit union’s 2023 LSCU
          dues have been paid. Credit unions who receive a dues waiver are not
          eligible for the Small CU Initiatives Account program. Please submit a
          paid invoice to the Member Engagement team for approval and
          reimbursement.
        </div>
      </div>
    </Section>
  );
};

export default BoardFunding;
