import Head from "next/head";
import { useState } from "react";
import { DashboardLayout as Layout } from "@/components";
import { useRouter } from "next/router";

const PAGE_SIZE = 2;

export default function Home({}) {
  const [query, setQuery] = useState("");

  const router = useRouter();

  const { update = "all", end = "all", page = 1 } = router.query;

  const handleSearch = () => {};

  //   const pageHandler = (page) => {
  const pageHandler = () => {
    // handleSearch({ page });
  };

  return (
    <>
      <Head>
        <title>BPMI | bin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={""}>
        <Layout>
          <div className="flex justify-between  items-end mb-4 md:mb-12">
            <h2 className="text-3xl">Deleted Posts</h2>
            <div className="flex flex-col justify-end ">
              <form className="   ml-auto mb-3">
                <input
                  type="search"
                  className="sort"
                  placeholder="Search here..."
                  onChange={handleSearch}
                />
              </form>
              <div className="">
                <input type="date" className="sort mr-3" />
                <input type="date" className="sort" />
              </div>
            </div>
          </div>
          <div className="overflow-x-auto max-w-6xl">
            <table className="min-w-full ">
              <thead className="border-y border-[#E6E6E6]">
                <tr>
                  <th className="p-5 text-left">
                    <input type={"checkbox"} />
                  </th>
                  <th className="p-5 text-left">TITLE</th>
                  <th className="p-5 text-right">UPDATED AT</th>
                  <th className="p-5">CREATED AT</th>
                </tr>
              </thead>
              <tbody className="border-b  border-[#E6E6E6]">
                {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                  <tr key={item}>
                    <td className="p-5 text-left">
                      <input type={"checkbox"} />
                    </td>
                    <td className="p-5 text-left">Top 10 tip web design</td>
                    <td className="p-5 text-right">June 12, 2022</td>
                    <td className="p-5 text-center">June 12, 2022</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <ul className="flex my-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].length > 0 &&
                [0, 1, 2, 3, 4, 5].map((pageNumber) => (
                  // [...Array(pages).keys()].map((pageNumber) => (
                  <li key={pageNumber}>
                    <button
                      className={`default-button m-2 p-3 rounded-md  ${
                        page == pageNumber + 1
                          ? "font-bold bg-primary text-white "
                          : "bg-[#e6e6e6]"
                      } `}
                      //   onClick={() => pageHandler(pageNumber + 1)}
                    >
                      {pageNumber + 1}
                    </button>
                  </li>
                ))}
              <button
                className={"default-button m-2 p-3 rounded-md  bg-[#e6e6e6]"}
                // onClick={() => pageHandler(pageNumber + 1)}
              >
                Show all
              </button>
            </ul>
          </div>
        </Layout>
      </main>
    </>
  );
}

type HomeProps = {
  query: {
    pageSize: number;
    end: number;
    start: number;
    page: number;
    query: string;
  };
};
