import { FC } from 'react';
import { Button, Container, Stack, TextField } from '@mui/material';
import styled from '@emotion/styled';
import { TestCaseType } from '../../../model/problem';
import { regExpWithCheckStr } from '../../atom/regExpWithCheckStr';
import { usePostRegexForm } from '../../hooks/usePostRegexForm';

const BorderBoxUl = styled('ul')(() => ({
  padding: '10px',
  marginBottom: '20px',
  border: 'solid gray 1px',
  listStyle: 'none',
}));

const Content = styled('div')(() => ({
  margin: '20px auto',
  whiteSpace: 'pre-wrap',
}));

const BorderBottom = styled('h3')(() => ({
  borderBottom: 'solid 2px grey',
  marginBottom: '20px',
}));

const OKTitle = styled('div')(() => ({
  margin: '20px 0',
  borderBottom: 'solid 2px grey',
  color: 'lime',
}));

const NGTitle = styled('div')(() => ({
  margin: '20px 0',
  borderBottom: 'solid 2px grey',
  color: 'red',
}));

type Props = {
  testCases: TestCaseType[];
  content: string;
  id: string;
  regex: string;
};

type Props1 = {
  testCases: TestCaseType[];
  regex: string;
};

const RegexView: FC<Props1> = ({ testCases, regex }: Props1) => {
  const escapedRegex = regExpWithCheckStr(regex);

  return (
    <BorderBoxUl>
      {testCases.map((o: TestCaseType) => (
        <li key={o.id}>
          {o.is_collect ? (
            <span className="lime mr-10">OK </span>
          ) : (
            <span className="red mr-10">NG </span>
          )}
          <span
            className={
              regex && escapedRegex && escapedRegex.test(o.test_case)
                ? 'back-color-green'
                : ''
            }
          >
            {o.test_case}
          </span>
        </li>
      ))}
    </BorderBoxUl>
  );
};

export const ProblemForm: FC<Props> = ({ testCases, content, id, regex }) => {
  const { formState, checkedCases, handleOnChange, handleSubmit } =
    usePostRegexForm(id, regex);

  return (
    <Container maxWidth="lg" sx={{ pt: 5 }}>
      <Content>
        <BorderBottom>内容</BorderBottom>
        <p>{content}</p>
      </Content>
      <BorderBottom>テストケース</BorderBottom>
      <RegexView testCases={testCases} regex={formState.regex} />
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            label="正規表現を入力してください"
            type="text"
            name="regex"
            required
            inputProps={{ minLength: 1, maxLength: 100 }}
            value={formState.regex}
            onChange={handleOnChange}
          />
          <Button
            color="primary"
            variant="contained"
            size="large"
            type="submit"
            value="submit"
          >
            Check
          </Button>
        </Stack>
      </form>
      <div>
        {checkedCases !== undefined ? (
          <>
            {checkedCases.is_collect_regex ? (
              <OKTitle>
                <h3>Clear</h3>
              </OKTitle>
            ) : (
              <NGTitle>
                <h3>Miss</h3>
              </NGTitle>
            )}
            <RegexView testCases={checkedCases.checked_cases} regex="" />
          </>
        ) : (
          ''
        )}
      </div>
    </Container>
  );
};
