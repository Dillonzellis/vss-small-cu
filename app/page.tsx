import Container from "./components/layout/Container";
import Welcome from "./components/sections/Welcome";

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
      </Container>
    </main>
  );
}
