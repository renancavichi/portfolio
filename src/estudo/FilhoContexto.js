import { useContext } from "react";
import LangContext from './LangContext'

const FilhoContexto = () => {
    const [lang, toggleLanguage, setCurrentLanguage] = useContext(LangContext);
    
    return (
        <>
        <h1>{lang.welcome}</h1>
        <button onClick={() => toggleLanguage()}>{lang.changeLanguage}</button>
        <button onClick={() => setCurrentLanguage('br')}>{lang.portuguese}</button>
        <button onClick={() => setCurrentLanguage('en')}>{lang.english}</button>
        </>
        

    );
  }
  
export default FilhoContexto;