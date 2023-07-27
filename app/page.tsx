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
    <main className="tw-min-h-screen tw-bg-brandingNeutral-100 tw-text-brandingNeutral-700">
      <Container>
        <img
          className="tw-mx-auto tw-my-8"
          src="https://lscu.coop/member-engagement/imgs/header.png"
        />
        <Welcome bgColor="lightBlue" />
        <Welcome2 bgColor="blue" />
        <Assistance bgColor="white" />
        <FreeTraining bgColor="lightBlue" />
        <ExploitVid bgColor="blue" />
        {/*
        <MoreTraining />
        <InfoSight />
        <PolicyPro />
        <BoardFunding />
        */}
      </Container>
    </main>
  );
}
