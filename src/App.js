import AddImage from './estudo/addimage';
import ExemploContexto from './estudo/ExemploContexto';
import UsandoProps from './estudo/UsandoProps'
import LangContext from './estudo/LangContext'
import { useState } from 'react'

function App() {

  const lang = {
    br: {
      welcome: 'Bem-Vindo',
      changeLanguage: 'Alterar Idioma',
      portuguese: 'Português',
      english: 'Inglês',
      textIntroduction: ''
    },
    en: {
      welcome: 'Welcome',
      changeLanguage: 'Change Language',
      portuguese: 'Portuguese',
      english: 'English'
    }
  }

 const currentLangState = useState('br');
 const [currentLang, setCurrentLanguage] = currentLangState;

 const toggleLanguage = () => {
  const newLanguage = currentLang === 'br' ? 'en' : 'br'
  setCurrentLanguage(newLanguage)
 }

  return (
    <LangContext.Provider value={[
        currentLang === 'br' ? lang.br : lang.en,
        toggleLanguage,
        setCurrentLanguage
      ]}>
      <div className="App">
        <UsandoProps />
        <AddImage nome="Renan"/>
        <ExemploContexto/>
      </div>
    </LangContext.Provider>
  );
}

export default App;
