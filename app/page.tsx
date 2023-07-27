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
    <main className="tw-min-h-screen tw-bg-[#fbfdfe]">
      <Container>
        <img
          className="tw-mx-auto tw-my-4"
          src="https://lscu.coop/member-engagement/imgs/header.png"
        />
        <Welcome bgColor="blue" />
        <Welcome2 />
        <Assistance />
        <FreeTraining />
        <ExploitVid />
        <MoreTraining />
        <InfoSight />
        <PolicyPro />
        <BoardFunding />
      </Container>
    </main>
  );
}
