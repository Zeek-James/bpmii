import Head from "next/head";
import { Inter } from "@next/font/google";
import { Herofn, Layout, styles } from "@/components";
import { About, GetMore, Interested } from "@/components/landing-page";
import { links } from "@/constants/landingPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>BPMI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={""}>
        <Layout>
          <Herofn
            img={"allinsuit"}
            title={
              "Promoting the practice of Business Process Management in Nigeria"
            }
          />

          <div className={`${styles.paddingX}`}>
            <ul className="list-none flex justify-between  items-center flex-1">
              {links.map((link, index) => (
                <li
                  key={link.id}
                  className={`font-play  cursor-pointer font-bold text-[25px] p-2  text-link whitespace-nowrap 

                `}
                >
                  <a
                    href={`${link.id}`}
                    className={
                      link.title === "Sign in"
                        ? "pl-6 border-l-[3px] border-primary"
                        : ""
                    }
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className=" flex justify-center z-20">
              <About />
            </div>
            <GetMore />
          </div>
          <Interested pic={"mem"} />
        </Layout>
      </main>
    </>
  );
}
