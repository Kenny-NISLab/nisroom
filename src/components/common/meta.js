import Head from "next/head";
import Consistant from "../../consistant";

export default function Meta() {
  return (
    <Head>
      <title>NISROOM</title>

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="NISLAB Room Monitor App" />
      <meta name="author" content="NISLAB" />
      <meta name="msapplication-TileColor" content={Consistant.theme_color} />
      {/* <meta name="msapplication-config" content="/assets/browserconfig.xml" /> */}
      <meta name="theme-color" content={Consistant.theme_color} />

      <meta property="og:url" content={Consistant.hostname} />
      <meta property="og:site-name" content="NISROOM" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:image" content={Consistant.hostname + "/assets/nisroom-wide.png"} />
      <meta property="og:title" content="NISROOM" />
      <meta property="og:description" content="NISLAB Room Monitor App" />

      <meta name="twitter:card" content={Consistant.hostname + "/assets/nisroom-wide.png"} />

      <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
      {/* <link rel="manifest" href="/assets/site.webmanifest" /> */}
      <link rel="mask-icon" href="/assets/nisroom-logo.svg" color={Consistant.theme_color} />
      <link rel="shortcut icon" href="/assets/favicon.ico" />
    </Head>
  );
}
