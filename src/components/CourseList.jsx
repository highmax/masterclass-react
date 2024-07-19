import PropTypes from 'prop-types';
import CourseItem from './CourseItem';

const CourseList = ({ courses, onToggleFavorite, isLoading }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {courses.map((course) => (
        <CourseItem
          key={course.id}
          course={course}
          onToggleFavorite={onToggleFavorite}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
}

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CourseList;