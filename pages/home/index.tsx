import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import { loadPosts } from "../../lib/load-data";

export const getServerSideProps = async (context: {
  params: { site: string };
}) => {
  const test = await loadPosts();
  console.log(test);
  return {
    props: { test },
  };
};

export default function Home() {
  return <div className="flex h-screen bg-black"></div>;
}
