import type { NextPage } from "next";
import Image from "next/image";

type Image = {
  name: string;
  url: string;
};

type Images = Image[];

const Home: NextPage = () => {
  const images: Images = [
    {
      name: "1614730321146.jpeg",
      url: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
    },
    {
      name: "1614728894747.jpeg",
      url: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
    },
    {
      name: "1614728423169.jpeg",
      url: "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
    },
    {
      name: "1614727187331.jpeg",
      url: "https://images.unsplash.com/photo-1614727187331-285522b20eaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
    },
  ];

  return (
    <>
      {images.map(({ name, url }) => {
        return (
          <>
            <Image src={url} alt={name} width={640 / 2} height={480 / 2} />
            <a
              href={`/api/download-attachment?url=${url}&name=${name}`}
              style={{ display: "block", marginBottom: "32px" }}
            >
              Download
            </a>
          </>
        );
      })}
    </>
  );
};

export default Home;
