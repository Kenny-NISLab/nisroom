import Container from "./container";

export default function Footer({ windowSize }) {
  const footerStyle = { height: windowSize.footerHeight + "px", background: "#E28449" };

  return (
    <footer style={footerStyle}>
      <Container>
        <p className="text-center text-white">
          <small>&copy; 2022 NISLAB.</small>
        </p>
      </Container>
    </footer>
  );
}
