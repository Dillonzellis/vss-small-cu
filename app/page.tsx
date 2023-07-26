import Container from "./components/layout/Container";
import Assistance from "./components/sections/Assitance";
import ExploitVid from "./components/sections/ExploitVid";
import FreeTraining from "./components/sections/FreeTraining";
import InfoSight from "./components/sections/InfoSight";
import Welcome from "./components/sections/Welcome";
import Welcome2 from "./components/sections/Welcome2";
import MoreTraining from "./components/sections/more-training-vids/MoreTraining";

export default function Home() {
  return (
    <main className="tw-bg-gray-950 tw-min-h-screen tw-text-white">
      <h1 className="">yea</h1>
      <Container>
        <img
          className="tw-mx-auto"
          src="https://lscu.coop/member-engagement/imgs/header.png"
        />
        <Welcome />  
        <Welcome2 />
        <Assistance />
        <FreeTraining />
        <ExploitVid />
        <MoreTraining />
        <InfoSight />
      </Container>
    </main>
  );
}
