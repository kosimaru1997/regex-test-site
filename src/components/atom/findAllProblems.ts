import axios from 'axios';
import { ProblemType } from '../../model/problem';

export const findAllProblems = async (): Promise<ProblemType[] | undefined> => {
  const response = await axios.get(`api/problems`, {});

  return (await response.data) as ProblemType[];
};
