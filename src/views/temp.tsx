import { LectureItem } from 'components';
import { Header } from 'layouts';
import { lectureListMock } from 'mocks';

export default function Temp() {
  return (
    <div>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {lectureListMock.map((lecture) => (
          <LectureItem lectureListItem={lecture} key={lecture.lectureId} />
        ))}
      </div>
    </div>
  );
}
