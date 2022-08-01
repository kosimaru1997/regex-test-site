import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { findAllProblems } from '../atom/findAllProblems';
import { ProblemType } from '../../model/problem';

export const useProblemList = (): ProblemType[] | undefined => {
  const [getQuery] = useSearchParams();
  const keyword = getQuery.get('search');

  const queryStringIsEmpty = keyword == null || keyword === '';
  const allProblems = useQuery(['problems'], findAllProblems, {
    enabled: queryStringIsEmpty,
  }).data;

  return allProblems;
};
