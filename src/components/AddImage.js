// EXEMPLO USO SIMPLES DE IMAGENS COM REACT
import "./AddImage.css"
// importar imagens jpg, png , gif, svg, jpeg, webp
import mountain from "../assets/img/mountain.webp"
import logo from "../assets/img/react-logo.svg"
// importar imagens svg como componentes
import { ReactComponent as Logo } from "../assets/img/react-logo.svg"

const AddImage = () => {
  return (
    <div className="bgimagens">
        {/* Usando imagens svg como componentes */} 
        <Logo alt="Logo React" width="400" height="400" />
        {/* Usando imagens importadas com a tag img*/} 
       <img src={logo} alt="Logo React" width="300" height="200"/>
       <img src={mountain} alt="Mountains" width="300" height="200"/>
    </div>
  );
}

export default AddImage;