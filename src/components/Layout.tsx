import Head from "next/head";
import Navigation from "./Navigation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  const copyright = "";

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <body className={`mt-28 overflow-scroll ${inter.className}`}>
        <div className="root">
          <Navigation />
          {children}
          <footer className="my-20 text-center p-4 text-sm text-slate-500">
            {copyright}
          </footer>
        </div>
      </body>
    </>
  );
}
