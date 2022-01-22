import Container from "./container";

export default function Header({ windowSize }) {
  const headerStyle = { height: windowSize.headerHeight + "px" };
  const logoWidth = windowSize.isSp ? "w-64" : "w-80";

  return (
    <header style={headerStyle} className="flex items-center">
      <Container>
        <div className={`mx-auto ${logoWidth}`}>
          <a href="/">
            <img src="/assets/nisroom-wide.png" alt="nisroom" width={4090} height={535} className="hover:cursor-pointer" />
          </a>
        </div>
      </Container>
    </header>
  );
}
