import NisroomWide from "../assets/nisroom-wide";
import Container from "./container";

export default function Header({ windowSize, updatedTime }) {
  const headerStyle = { height: windowSize.headerHeight + "px" };
  const logoWidth = windowSize.isSp ? "w-64" : "w-80";

  return (
    <header style={headerStyle} className="flex items-center">
      <Container>
        <div className={`mx-auto ${logoWidth}`}>
          <a href="/">
            <NisroomWide />
          </a>
        </div>
        <p className="text-center text-xs">Updated at: {updatedTime}</p>
      </Container>
    </header>
  );
}
