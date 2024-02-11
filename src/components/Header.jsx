import PropTypes from "prop-types";

function Header({ headerLogo }) {
  return (
    <img src={headerLogo} alt="" className='header' />
  )
}

Header.propTypes = {
  headerLogo: PropTypes.string
}

export default Header