// react-router-dom
import { Link } from 'react-router-dom'


const ListItem = ({ to, text }) => {
  return (
    <li className='ml-5 cursor-pointer font-medium text-white text-sm hover:border-b-2'>

      <Link to={to}>{text}</Link>
      
    </li>
  )
}

export default ListItem