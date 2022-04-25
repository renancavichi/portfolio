const UsandoChildren = ({value, children}) => {  
    return (
        <div style={{background: "#345345"}}>
            {children}
            <p>Valor = {value}</p>
        </div>
    );
  }
  
export default UsandoChildren;