import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import CourseCard from './CourseCard';
import courseData from './courseData';
const Dashboard = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
return (
    <div>
      {user ? (
        <>
          <h1 style={{ color: '#b33c72' }}>Your Arena!</h1>

          <div className="course-list">
            {courseData.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </>
      ) : (
        <h1>Please log in to access !</h1>
      )}
    </div>
  );
};

export default Dashboard;
