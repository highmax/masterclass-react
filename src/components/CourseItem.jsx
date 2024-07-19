import PropTypes from 'prop-types';

const CourseItem = ({ course, onToggleFavorite, isLoading }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden cursor-${isLoading ? 'not-allowed' : 'pointer'}`} onClick={() => onToggleFavorite(course.id)}>
      <img className="w-full h-48 object-cover" src={course.instructor_image_url} alt={course.instructor_name} />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">Instructor: {course.instructor_name}</p>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill={course.favorite ? 'currentColor' : 'none'}
            viewBox='0 0 24 24'
            stroke='currentColor'
            >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
            />
            </svg>
        </div>
      </div>
    </div>
  )
}

CourseItem.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    instructor_image_url: PropTypes.string.isRequired,
    instructor_name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    favorite: PropTypes.bool.isRequired,
  }).isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CourseItem;