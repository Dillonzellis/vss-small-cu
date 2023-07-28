import Container from "./components/layout/Container";
import Assistance from "./components/sections/Assitance";
import BoardFunding from "./components/sections/BoardFunding";
import ExploitVid from "./components/sections/ExploitVid";
import FreeTraining from "./components/sections/FreeTraining";
import InfoSight from "./components/sections/InfoSight";
import PolicyPro from "./components/sections/PolicyPro";
import Welcome from "./components/sections/Welcome";
import Welcome2 from "./components/sections/Welcome2";
import MoreTraining from "./components/sections/more-training-vids/MoreTraining";

export default function Home() {
  return (
    <main className="tw-min-h-screen tw-bg-brandingBlue-100 tw-text-brandingNeutral-700 tw-text-base">
      <Container>
        <div className="tw-shadow-xl tw-shadow-brandingBlue-700/20">
          <div className="tw-bg-white">
            <img
              className="tw-mx-auto tw-py-8 tw-w-[875px]"
              src="https://lscu.coop/member-engagement/imgs/header.png"
            />
          </div>
          <Welcome bgColor="lightBlue" />
          <Welcome2 bgColor="blue" />
          <Assistance bgColor="white" />
          <FreeTraining bgColor="lightBlue" />
          <ExploitVid bgColor="blue" />
          <MoreTraining bgColor="white" />
          <InfoSight bgColor="lightBlue" />
          <PolicyPro bgColor="blue" />
          <BoardFunding bgColor="white" />
        </div>
      </Container>
    </main>
  );
}
