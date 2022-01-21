import { useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Container from "../components/common/container";
import Meta from "../components/common/meta";
import Students from "../components/students";

export default function Home() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
    headerHeight: 0,
    footerHeight: 28,
    isSp: false,
    hostname: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
          headerHeight: window.innerWidth < 768 ? 40 : 60,
          footerHeight: 28,
          isSp: window.innerWidth < 768,
          hostname: window.location.hostname,
        });
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    } else {
      return;
    }
  }, []);

  const { data, error } = useSWR("/api/users", fetcher, { refreshInterval: 10000 });

  if (error || !data) {
    return <>Loading ...</>;
  }

  return (
    <>
      <Meta />
      <Header windowSize={windowSize} />
      <Container>
        <Students data={data} windowSize={windowSize} />
      </Container>
      <Footer height={windowSize.footerHeight} />
    </>
  );
}
