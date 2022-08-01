import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { CheckTestCases } from '../../model/problem';

export const usePostRegexForm = (
  id: string,
  regex: string,
): {
  formState: { regex: string };
  checkedCases: CheckTestCases | undefined;
  handleOnChange: (e: {
    target: {
      name?: string | undefined;
      value?: string | undefined;
    };
  }) => void;
  handleSubmit: (e: { preventDefault: () => void }) => void;
} => {
  const [formState, setFormState] = useState({
    regex,
  });
  const [checkedCases, setCheckedCases] = useState<CheckTestCases | undefined>(
    undefined,
  );
  const mutation = useMutation(
    () => axios.post(`api/problems/${id}/check`, { regex: formState.regex }),
    {
      onSuccess: (res) => {
        setCheckedCases(res.data as CheckTestCases);
      },
    },
  );

  const handleOnChange = (e: {
    target: { name?: string | undefined; value?: string | undefined };
  }) => {
    const key = e.target.name as string;

    const { value } = e.target;

    setFormState((formState) => ({ ...formState, [key]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    mutation.mutate();
  };

  return {
    formState,
    checkedCases,
    handleOnChange,
    handleSubmit,
  };
};
