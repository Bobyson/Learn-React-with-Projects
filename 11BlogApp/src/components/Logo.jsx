import { FaBlogger } from "react-icons/fa";
import PropTypes from 'prop-types';

function Logo({width = '50px'}) {
  return (
    <div className="transition-transform hover:scale-110 duration-200">
        <FaBlogger 
          size={width} 
          style={{ color: '#00F2F2' }}
          className="hover:opacity-80 transition-colors duration-200"
        />
    </div>
  )
}

Logo.propTypes = {
  width: PropTypes.string
}

export default Logo