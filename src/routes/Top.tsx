import styled from '@emotion/styled';
import { FC } from 'react';
import { NotLoggedInHeader } from '../components/templates/header/notLoggedInHeader';

const Main = styled('div')(() => ({
  textAlign: 'center',
  margin: '55px 15px',
}));

const Top: FC = () => (
  <main>
    <NotLoggedInHeader />
    <Main>
      <h1>Regex-Test-Site</h1>
      <p>
        正規表現の問題集サイトです。いくつかのテストにマッチする正規表現にマッチする
        <br />
        正規表現を解答してください。
      </p>
    </Main>
  </main>
);

export default Top;
