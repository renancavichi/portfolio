import Footer from '../components/Footer'
import { Outlet } from "react-router-dom";
import { useAllowedRole } from '../providers/AuthProvider';

const LayoutDashboard = () => {

  useAllowedRole('admin', '/admin/login')

  return (
    <>
        <h1>Layout Dashboard</h1>
        <Outlet />
        <Footer />
    </>
  )
}

export default LayoutDashboard