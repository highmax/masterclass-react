import { useEffect, useState } from "react";
import { getCourses, addFavorite, removeFavorite } from "../services/api.js";

// user email from environment variable
const userEmail = import.meta.env.VITE_USER_EMAIL;

function useCourses() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdatingFavorite, setIsUpdatingFavorite] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      // Here we can get courses from localStorage before fetching from the API
      // and save the courses to localStorage after fetching from the API
      const data = await getCourses(userEmail);
      setCourses(data);
    } catch (error) {
      // Here we can get courses from localStorage if the API fails
      console.error('Error fetching courses:', error);
    }
    setIsLoading(false);
  }

  const handleToggleFavorite = async (courseId) => {
    setIsUpdatingFavorite(true);
    setShowNotification(false);
    // is course favorite?
    const course = courses.find((c) => c.id === courseId);

    try {
      if (course.favorite) {
        await removeFavorite(userEmail, courseId);
        setShowNotification(true);
      } else {
        await addFavorite(userEmail, courseId);
        setShowNotification(true);
      }

      setCourses((prevCourses) => {
        return prevCourses.map((c) => {
          if (c.id === courseId) {
            return { ...c, favorite: !c.favorite };
          }
          return c;
        });
      });
    } catch (error) {
      console.error('Error updating favorite:', error);
    }
    setIsUpdatingFavorite(false);
  }

  return { courses, isLoading, isUpdatingFavorite, showNotification, handleToggleFavorite };
}

export default useCourses;
