// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-CA">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="icon" href="/favicon-32x32.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          {/* <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
          <link rel="apple-touch-icon" href="/static/touch-icon.png" /> */}
          {/* <link
            rel="mask-icon"
            href="/static/favicon-mask.svg"
            color="#49B882"
          /> */}
          <link rel="icon" type="image/x-icon" href="/favicon-32x32.png" />
          <link href="/fontawesome5112/css/all.min.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

// import Document, { Html, Head, Main, NextScript } from "next/document";
// import { ServerStyleSheet } from "styled-components";

// export default class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const sheet = new ServerStyleSheet();
//     const page = ctx.renderPage(App => props =>
//       sheet.collectStyles(<App {...props} />)
//     );
//     const styleTags = sheet.getStyleElement();
//     const initialProps = await Document.getInitialProps(ctx);
//     return { ...initialProps, ...page, styleTags };
//   }
//   render() {
//     return (
//       <Html lang="en-CA">
//         <Head>
//           <meta charSet="UTF-8" />
//           <link rel="icon" href="/favicon-32x32.png" />
//           <meta name="viewport" content="width=device-width, initial-scale=1" />
//           <meta name="apple-mobile-web-app-capable" content="yes" />
//           <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
//           {/* <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
//           <link rel="apple-touch-icon" href="/static/touch-icon.png" /> */}
//           {/* <link
//             rel="mask-icon"
//             href="/static/favicon-mask.svg"
//             color="#49B882"
//           /> */}
//           <link rel="icon" type="image/x-icon" href="/favicon-32x32.png" />
//           <link href="/fontawesome5112/css/all.min.css" rel="stylesheet" />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }
