import { FC, Suspense } from 'react';
import { ProblemList } from '../../components/templates/ProblemList';

const ProblemIndex: FC = () => (
  <>
    <div>
      <h2>正規表現 問題リスト</h2>
    </div>
    <Suspense fallback={<div>...loading</div>}>
      <ProblemList />
    </Suspense>
  </>
);

export default ProblemIndex;
