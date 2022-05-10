import {FaApple} from 'react-icons/fa'
import { HiOutlineTrash } from "react-icons/hi";

const UsandoIcons = ({valor, children}) => {  
    return (
        <>
            <FaApple style={{
                color: "#000",
                width: '100px',
                height: '100px'
            }}/>
            <HiOutlineTrash style={{
                color: "#000",
                width: '100px',
                height: '100px'
            }}/>
        </>
    );
  }
  
export default UsandoIcons;