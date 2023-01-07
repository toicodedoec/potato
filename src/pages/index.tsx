import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

import useSWR from 'swr';
import Search from "../components/Search";

const API_URL = 'https://ipapi.co/json/';

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

export default function Index() {
  const { data, error } = useSWR(API_URL, fetcher);

  if (data) {
    const { ip, city, country, region } = data;
    fetch("/api/sheet", {
      method: "POST",
        body: JSON.stringify({ip: ip, location: `${city}, ${region}, ${country}`}),
        headers: {
          'Content-Type': 'application/json',
        },
    })
  }

  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div className="max-w-full">
          {/* <h1>The Hash Table</h1> */}
          <Search />
          {/* <h3 style={{color: 'darkorange'}} className="pt-5">in</h3> */}
          {/* <SocialList /> */}
          <img src="/images/rsz_thehashtable.jpg" className="pt-5 h-auto max-w-full mx-auto" alt="..." />
        </div>
        {/* <span className="handle">@hash-table</span> */}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
