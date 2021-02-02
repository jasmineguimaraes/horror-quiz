import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GithubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';

// const BackgroundImage = styled.div`
// background-image: url(${db.bg});
// flex: 1;
// background-size: cover;
// background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%; 
  max-width: 350px; 
  padding-top: 45px;
  margin: auto 10%; 
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }

  `;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno do useState', name, setName);
  return (
    <QuizBackground backgroundImage={db.bg}>

      <QuizContainer>
        <Head>
          <title>Horror Quiz</title>
        </Head>
        <Widget>
          <Widget.Header>
            Quiz de filmes de terror
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              //  console.log('fazendo uma submissão por react');
              //  router manda para a próxima página
            }}
            >
              <input
                onChange={function (infosDoEvento) {
                  console.log(infosDoEvento.target.value);
                  //  name = infosDoEvento.target.value;
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Diz aí seu nome para poder jogar :)" />
              <button type="submit" disabled={name.lenght === undefined || name.lenght === 0}>
                Jogar
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            'What's your favorite scary movie?'
          </Widget.Header>
          <Widget.Content>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />

      </QuizContainer>
      { /*  eslint-disable-next-line react/react-in-jsx-scope */}
      <GithubCorner />
    </QuizBackground>

  );
}
