import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { findProblemById } from '../atom/findProblemById';
import { TestCaseType } from '../../model/problem';
import { ProblemForm } from './form/RegexFrom';

const Title = styled('div')(() => ({
  textAlign: 'center',
  padding: '50px 15px 0 15px',
}));

export const ProblemDetail: FC = () => {
  const params = useParams<{ id: string }>();

  const problem = useQuery([params.id, 'problemDetail'], () =>
    findProblemById(params.id as string),
  ).data;
  const testCases = problem?.problem_test_cases as TestCaseType[];
  const content = problem?.content as string;

  return (
    <>
      <Title>
        <h2>
          No{problem?.id}:{problem?.title}
        </h2>
      </Title>
      <ProblemForm
        testCases={testCases}
        content={content}
        id={problem?.id as string}
        regex=""
      />
    </>
  );
};
