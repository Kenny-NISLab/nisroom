import Container from "./container";
import Consistant from "../../consistant";

export default function Footer({ height }) {
  const footerStyle = { height: height + "px", background: Consistant.theme_color };

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
