import React from "react";
import styles from "../../public/styles/content.module.css";
import Author from "./Author";
import Date from "./Date";
import Layout from "./Layout";
import BasicMeta from "./meta/BasicMeta";
import JsonLdMeta from "./meta/JsonLdMeta";
import OpenGraphMeta from "./meta/OpenGraphMeta";
import TwitterCardMeta from "./meta/TwitterCardMeta";
import TagButton from "./TagButton";
import { getAuthor } from "../lib/authors";
import { getTag } from "../lib/tags";
import SubNavigation from "./SubNavigation";

type Props = {
  title: string;
  date: Date;
  slug: string;
  tags: string[];
  author?: string;
  description?: string;
  keywords?: string;
  children: React.ReactNode;
};
export default function PostLayout({
  title,
  date,
  slug,
  author,
  tags,
  description = "",
  keywords = "",
  children,
}: Props) {
  const combineKeywords = tags
    .map((it) => getTag(it).name)
    .concat(keywords.split(","));
  const authorName = author ? getAuthor(author).name : "";
  return (
    <Layout>
      <BasicMeta
        url={`/notes/${slug}`}
        title={title}
        keywords={combineKeywords}
        description={description}
      />
      <TwitterCardMeta
        url={`/notes/${slug}`}
        title={title}
        description={description}
      />
      <OpenGraphMeta
        url={`/notes/${slug}`}
        title={title}
        description={description}
      />
      <JsonLdMeta
        url={`/notes/${slug}`}
        title={title}
        keywords={combineKeywords}
        date={date}
        author={authorName}
        description={description}
      />
      <div className={"container"}>
        <article>
          <header>
            <SubNavigation />
            <h1>{title}</h1>
            <div className={"metadata"}>
              <div>
                <Date date={date} />
              </div>
              {author ? (
                <div>
                  <Author author={getAuthor(author)} />
                </div>
              ) : null}
            </div>
          </header>
          <div className={styles.content}>{children}</div>
          <ul className={"tag-list"}>
            {/* {keywords && keywords.split(",").map((it, i) => (
              <li key={i}>
                #{it.trim()}
              </li>
            ))} */}
            {tags.map((it, i) => (
              <li key={i}>
                <TagButton tag={getTag(it)} />
              </li>
            ))}
          </ul>
        </article>
        <footer>
          {/* <div className={"social-list"}>
            <SocialList />
          </div> */}
          {/* <Copyright /> */}
          <div style={{ height: 20 }}>&nbsp;</div>
        </footer>
      </div>
      <style jsx>
        {`
          .container {
            width: 80%;
            display: block;
            margin: 0 auto;
            padding: 0 1.5rem;
            box-sizing: border-box;
            z-index: 0;
          }
          .metadata div {
            display: inline-block;
            margin-right: 0.5rem;
          }
          article {
            flex: 1 0 auto;
          }
          h1 {
            margin: 0 0 0.5rem;
            font-size: 2.25rem;
          }
          .tag-list {
            list-style: none;
            text-align: right;
            margin: 1.75rem 0 0 0;
            padding: 0;
          }
          .tag-list li {
            display: inline-block;
            margin-left: 0.5rem;
          }
          .social-list {
            margin-top: 3rem;
            text-align: center;
          }

          @media (min-width: 769px) {
            .container {
              display: flex;
              flex-direction: column;
            }
          }
          @media (max-width: 769px) {
            .container {
              width: 100%;
              display: flex;
              flex-direction: column;
              padding: 0 1rem;
            }
          }
        `}
      </style>
    </Layout>
  );
}
