import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import "./CourseCard.css"
const CourseCard = ({ course }) => {
  const { user, addCourseInProgress } = useContext(AuthContext);

  const handleStartLearning = () => {
    if (user) {
      addCourseInProgress(course);
    }
    window.open(course.videoUrl, '_blank');
  };

  return (
    <div className="course-card">
      {/* <img src={course.image} alt={course.title} /> */}
      <h2 className="course-title">{course.title}</h2>
      <p className="course-description">{course.description}</p>
      {user && <button onClick={handleStartLearning}>Start Learning</button>}
    </div>
  );
};

export default CourseCard;
