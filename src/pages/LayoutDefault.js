import Menu from '../estudo/Menu'
import Footer from '../estudo/Footer'
import { Outlet } from "react-router-dom";

const LayoutDefault = () => {
  return (
    <>
        <Menu />
        <Outlet />
        <Footer />  
    </>
  )
}

export default LayoutDefault