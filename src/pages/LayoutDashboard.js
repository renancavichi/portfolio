import Footer from '../components/Footer'
import { Outlet } from "react-router-dom";

const LayoutDashboard = () => {
  return (
    <>
        <h1>Layout Dashboard</h1>
        <Outlet />
        <Footer />
    </>
  )
}

export default LayoutDashboard