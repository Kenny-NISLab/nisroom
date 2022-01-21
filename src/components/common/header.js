import Image from "next/image";
import { useRouter } from "next/router";
import Container from "./container";

export default function Footer({ windowSize }) {
  const router = useRouter();

  const headerStyle = { height: windowSize.headerHeight + "px" };
  const logoWidth = windowSize.isSp ? "w-64" : "w-80";

  return (
    <header style={headerStyle} className="flex items-center">
      <Container>
        <div className={`mx-auto ${logoWidth}`}>
          <Image
            src="/assets/nisroom-wide.png"
            alt="nisroom logo"
            width={4090}
            height={535}
            className="hover:cursor-pointer"
            onClick={() => router.reload()}
          />
        </div>
      </Container>
    </header>
  );
}
