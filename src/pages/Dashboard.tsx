import { SYSTEM_NAME, DASHBOARD_TITLE } from '../config/constants'

const Dashboard = () => {

  // Set title
document.title = DASHBOARD_TITLE + ' | '+ SYSTEM_NAME

  return (
    <h1>{ SYSTEM_NAME}</h1>
  )
}

export default Dashboard
