import { useState } from "react";
import useCourses from "../hooks/useCourses";
import CourseList from "../components/CourseList";
import Loading from "../components/Loading";
import SearchBar from "../components/SearchBar";

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);

  const { courses, isLoading, isUpdatingFavorite, showNotification, handleToggleFavorite } = useCourses();

  const filteredCourses = courses.filter(
    (course) => course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (showFavorites ? course.favorite : true)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          showFavorites={showFavorites}
          setShowFavorites={setShowFavorites}
        />
      </div>
      { isLoading ? (
        <Loading />
      ) : (
        <CourseList
          courses={filteredCourses}
          onToggleFavorite={handleToggleFavorite}
          isLoading={isUpdatingFavorite}
        />
      )}
      { showNotification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-4 rounded-md shadow-lg">Favorite updated!</div>
      )}
    </div>
)}

export default CoursesPage;