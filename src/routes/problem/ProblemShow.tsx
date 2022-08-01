import { FC, Suspense } from 'react';
import { ProblemDetail } from '../../components/templates/ProblemDetail';

export const ProblemShow: FC = () => (
  <Suspense fallback={<div>loading...</div>}>
    <ProblemDetail />
  </Suspense>
);
