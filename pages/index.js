import Head from "next/head";
import { useState } from "react";
import Title from "../components/Title";
import MetaSection from "../components/MetaSection";
import ResourceSection from "../components/ResourceSection";
import AddButton from "../components/AddButton";

export default function Home() {
  const [resources, setResources] = useState([<ResourceSection />]);

  const handleAddResource = (event) => {
    event.preventDefault();
    setResources((resources) => [...resources, <ResourceSection />]);
  };

  return (
    <>
      <Head>
        <title>{"Nodemaker"}</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
      </Head>

      <Title />
      <MetaSection />

      {resources.map((resource) => (
        <div key={resources.indexOf(resource)}>{resource}</div>
      ))}
      <div className="flex justify-center my-10">
        <AddButton buttonText="Resource" callback={handleAddResource} />
      </div>
    </>
  );
}
