const MAIN_PATH = (): string => '/';
const AUTH_PATH = (): string => '/auth';
const LECTURE_PATH = (): string => '/lecture';
const LECTURE_DETAIL_PATH = (lectureId: number): string =>
  `/lecture/${lectureId}`;
const NOTICE_PATH = (): string => '/notice';
const TASK_PATH = (): string => '/task';
const EXAM_PATH = (): string => '/exam';
const SETTING_PATH = (): string => '/setting';

export {
  MAIN_PATH,
  AUTH_PATH,
  LECTURE_PATH,
  LECTURE_DETAIL_PATH,
  NOTICE_PATH,
  TASK_PATH,
  EXAM_PATH,
  SETTING_PATH,
};
