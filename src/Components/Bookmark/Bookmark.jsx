
import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div className="p-5 bg-gray-50 mx-5 rounded-md">
            <h3>{title}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark:PropTypes.object.isRequired,
};
export default Bookmark;




