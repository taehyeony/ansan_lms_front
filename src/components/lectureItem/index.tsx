import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LectureListItem } from 'types/interface';
import { LECTURE_DETAIL_PATH } from 'constant';
import './style.css';

interface Props {
  lectureListItem: LectureListItem;
}

//        component: 강의 목록 컴포넌트        //
export default function LectureItem({ lectureListItem }: Props) {
  //        function: 네비게이트 함수        //
  const navigate = useNavigate();
  //        state: properties        //
  const {
    lectureId,
    title,
    department,
    classroom,
    startTime,
    endTime,
    weekday,
  } = lectureListItem;

  //        event handler: 강의 목록 컴포넌트 클릭 이벤트 처리 함수        //
  const onLectureItemClickEventHandler = () => {
    navigate(LECTURE_DETAIL_PATH(lectureId));
  };

  //        render: 강의 목록 컴포넌트 렌더링        //
  return (
    <div
      className="lecture_item_container"
      onClick={onLectureItemClickEventHandler}
    >
      <div className="lecture_item_box">
        <div className="lecture_item_left">
          <div className="lecture_item_title">{title}</div>
          <div className="lecture_item_department">{department}</div>
          <div className="lecture_item_classroom">{classroom}</div>
        </div>
        <div className="lecture_item_right">
          <div className="lecture_item_time">
            `{startTime}~{endTime}`
          </div>
          <div className="lecture_item_weekday">`{weekday}요일`</div>
        </div>
      </div>
    </div>
  );
}
