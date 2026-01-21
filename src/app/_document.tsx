import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Organization Schema Markup for Google Logo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "San Jose Antique MPC",
              "url": "https://sanjoseantiquempc.com./",
              "logo": "https://sanjoseantiquempc.com./images/433653723_8032419583452138_6238720083292977796_n.jpg"
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
