import { GetStaticProps, GetStaticPaths } from "next";
// import { renderToString } from "next-mdx-remote/render-to-string";
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote'
// import { hydrate } from "next-mdx-remote/hydrate";

import { serialize } from 'next-mdx-remote/serialize';

import matter from "gray-matter";
import { fetchPostContent } from "../../lib/posts";
import fs from "fs";
import yaml from "js-yaml";
import { parseISO } from "date-fns";
import PostLayout from "../../components/PostLayout";

// import InstagramEmbed from "react-instagram-embed";
import YouTube from "react-youtube";
// import { TwitterTweetEmbed } from "react-twitter-embed";
import { useEffect } from "react";

export type Props = {
  title: string;
  dateString: string;
  slug: string;
  tags: string[];
  author: string;
  keywords?: string;
  description?: string;
  source: MDXRemoteSerializeResult;
};

// const components = { InstagramEmbed, YouTube, TwitterTweetEmbed };
const components = { YouTube };
const slugToPostContent = ((postContents) => {
  let hash = {};
  postContents.forEach((it) => (hash[it.slug] = it));
  return hash;
})(fetchPostContent());

export default function Post({
  title,
  dateString,
  slug,
  tags,
  author,
  description = "",
  keywords = "",
  source,
}: Props) {
  useEffect(() => {
    const { ip, city, country, region } = JSON.parse(
      localStorage.getItem("ip")
    );

    fetch("/api/sheet", {
      method: "POST",
      body: JSON.stringify({
        ip: ip,
        location: `${city}, ${region}, ${country}`,
        slug: slug,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, []);

  return (
    <PostLayout
      title={title}
      date={parseISO(dateString)}
      slug={slug}
      tags={tags}
      author={author}
      description={description}
      keywords={keywords}
    >
      <MDXRemote {...source} components={{ components }} />
    </PostLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchPostContent().map((it) => "/notes/" + it.slug);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.post as string;
  const source = fs.readFileSync(slugToPostContent[slug].fullPath, "utf8");
  const { content, data } = matter(source, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });

  const mdxSource = await serialize(source, { parseFrontmatter: true });

  return {
    props: {
      title: data.title,
      dateString: data.date,
      slug: data.slug ?? slug,
      description: data.description ?? "",
      tags: data.tags ?? ["code"],
      keywords: data.keywords || "",
      // author: data.author,
      source: mdxSource,
    },
  };
};
