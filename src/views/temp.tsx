import { LectureItem } from 'components';
import { lectureListMock } from 'mocks';

export default function Temp() {
  return (
    <div>
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
