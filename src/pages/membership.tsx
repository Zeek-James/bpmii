import Head from "next/head";
import { Inter } from "@next/font/google";
import { Hero, Layout, styles } from "@/components";
import { Interested } from "@/components/landing-page";
import { links } from "@/constants/landingPage";
import { cards, ourObjs } from "@/constants/about";
import { AiFillLike } from "react-icons/ai";
import Image from "next/image";
import { devProgrammes } from "@/constants/membership";
import DevAndPrograms from "@/components/membership/DevAndPrograms";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>BPMI | Membership</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={""}>
        <Layout>
          <Hero img={"memHero"} title={"Membership"} />
          <DevAndPrograms />
          <Interested pic={"twoWomen"} />
        </Layout>
      </main>
    </>
  );
}
