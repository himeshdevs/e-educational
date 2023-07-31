import React, { createContext, useEffect, useState } from 'react';
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [coursesInProgress, setCoursesInProgress] = useState([]);

  const loginUser = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logoutUser = () => {
    setUser(null);
    setCoursesInProgress([]);
  };

  const addCourseInProgress = (course) => {
    setCoursesInProgress((prevCourses) => [...prevCourses, course]);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const storedCoursesInProgress = localStorage.getItem('coursesInProgress');
    if (storedCoursesInProgress) {
      setCoursesInProgress(JSON.parse(storedCoursesInProgress));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('coursesInProgress', JSON.stringify(coursesInProgress));
  }, [user, coursesInProgress]);

  return <AuthContext.Provider value={{ user, loginUser, logoutUser, coursesInProgress, addCourseInProgress }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
