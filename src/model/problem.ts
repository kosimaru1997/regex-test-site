export type ProblemType = {
  id: string;
  title: string;
  content: string;
  level: string;
  created_at: Date;
  updated_at: Date;
  problem_test_cases: TestCaseType[];
};

export type TestCaseType = {
  id: string;
  test_case: string;
  is_collect: boolean;
  created_at: Date;
  updated_at: Date;
};

export type CheckTestCases = {
  is_collect_regex: boolean;
  checked_cases: TestCaseType[];
};
