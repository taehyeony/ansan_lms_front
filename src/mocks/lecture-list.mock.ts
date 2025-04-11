import { LectureItem } from 'components';
import { LectureListItem } from 'types/interface';

const lectureListMock: LectureListItem[] = [
  {
    lectureId: 1,
    title: '가상화시스템',
    department: '컴퓨터공학과-A',
    classroom: '진리관 327호',
    startTime: '09:30',
    endTime: '12:20',
    weekday: '목',
    isMajor: true,
  },
  {
    lectureId: 3,
    title: '소프트웨어공학',
    department: '컴퓨터공학과-A',
    classroom: '진리관 320호',
    startTime: '12:40',
    endTime: '02:30',
    weekday: '금',
    isMajor: true,
  },
  {
    lectureId: 2,
    title: '네트워크관리',
    department: '컴퓨터공학과-A',
    classroom: '진리관 328호',
    startTime: '12:40',
    endTime: '02:30',
    weekday: '목',
    isMajor: false,
  },
];

export default lectureListMock;
