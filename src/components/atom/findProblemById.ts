import axios from 'axios';
import { ProblemType } from '../../model/problem';

export const findProblemById = async (id: string): Promise<ProblemType> => {
  const response = await axios.get(`api/problems/${id}`);

  return (await response.data) as ProblemType;
};
