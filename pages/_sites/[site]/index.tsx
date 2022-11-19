import React from "react";
import { loadPosts } from "../../../lib/load-data";

interface IndexProps {
  project: {
    data: string;
  };
}

export async function getStaticPaths() {
  const paths = [{ params: { site: "test" } }, { params: { site: "test2" } }];

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export const getStaticProps = async (context: { params: { site: string } }) => {
  const test = await loadPosts();
  console.log(test);
  const data = [
    { domain: "test", data: "My first test project" },
    { domain: "test2", data: "My second test project" },
  ];

  const project = data.find((p) => p.domain === context.params.site);
  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: { project },
  };
};

export default function Index({ project }: IndexProps) {
  return <h1>{project.data}</h1>;
}
