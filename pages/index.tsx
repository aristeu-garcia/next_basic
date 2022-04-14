import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
export default function Home({ repositories, date }) {
  useEffect(() => {}, []);
  return (
    <>
      <h1>{date}</h1>
      <ul>
        {repositories.map((repo) => (
          <li key={repo}>{repo}</li>
        ))}
      </ul>
    </>
  );
}
//para realizar o conteúdo em cache com static props, precisa-se buildar a aplicação e rodar com npm start (produção)
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    "https://api.github.com/users/aristeu-garcia/repos"
  );

  const data = await response.json();
  const respostoryNames = data.map((item) => item.name);
  return {
    props: {
      repositories: respostoryNames,
      date: new Date().toISOString(),
    },
    revalidate: 5,//5 segundos em chache, para não bater no banco de dados e backend
  };
};
