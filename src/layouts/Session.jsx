import { Outlet } from 'react-router-dom'


const Session = () => {
  return (
    <div>
      <h1>Desde Session</h1>

      <Outlet />
    </div>
  )
}

export default Session