import styled from '@emotion/styled';
import { FC } from 'react';

const Main = styled('div')(() => ({
  textAlign: 'center',
  padding: '55px 15px',
}));

export const Top: FC = () => (
  <main>
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
