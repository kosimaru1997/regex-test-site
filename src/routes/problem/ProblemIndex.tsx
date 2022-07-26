import { FC, Suspense } from 'react';
import { ProblemList } from '../../components/templates/ProblemList';

export const ProblemIndex: FC = () => (
  <div>
    <h2>正規表現 問題リスト</h2>
    <Suspense fallback={<div>...loading</div>}>
      <ProblemList />
    </Suspense>
  </div>
);
