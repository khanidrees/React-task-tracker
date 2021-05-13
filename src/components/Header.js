import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAddClicked, showAdd}) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button text={showAdd ? "Add":"Close"} color={showAdd? "green": "red"} onClick={onAddClicked}/>
    </header>
  )
}

Header.defaultProps={
  title : "Task Tracker"
}
Header.propTypes = {
  title : PropTypes.string,
}

export default Header
