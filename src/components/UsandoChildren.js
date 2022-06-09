const UsandoChildren = ({value, children}) => {  
    return (
        <div style={{background: "#845345", color: "#FFF"}}>
            {children}
            <p>Valor = {value}</p>
        </div>
    );
  }
  
export default UsandoChildren;