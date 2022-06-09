import { useContext } from "react";
import { LangContext } from "../providers/LangProvider"

const FilhoContexto = () => {
    const [lang, toggleLanguage, setCurrentLanguage] = useContext(LangContext);
    
    return (
        <>
          <br/><br/><p>Sample useContext to change Language:</p>
          <h1>{lang.welcome}</h1>
          <button onClick={() => toggleLanguage()}>{lang.changeLanguage}</button>
          <button onClick={() => setCurrentLanguage('br')}>{lang.portuguese}</button>
          <button onClick={() => setCurrentLanguage('en')}>{lang.english}</button>
        </>
        

    );
  }
  
export default FilhoContexto;