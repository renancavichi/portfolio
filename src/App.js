import AddImage from './estudo/addimage';
import ExemploContexto from './estudo/ExemploContexto';
import UsandoProps from './estudo/UsandoProps'
import LangContext from './estudo/LangContext'
import { useState } from 'react'
import UsandoChildren from './estudo/UsandoChildren';
import UsandoIcons from './estudo/UsandoIcons';
import APIIntegration from './estudo/APIIntegration';
import { Routes, Route } from "react-router-dom";
import Menu from './estudo/Menu';
import NotFound from './pages/NotFound'
import EditUserOnChange from './estudo/EditUserOnChange'

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
        <Menu />
        <Routes>
          <Route path="/" element={<ExemploContexto/>} />
          <Route path="images">
            <Route index element={<AddImage />} />
            <Route path="icon" element={<UsandoIcons />} />
          </Route>
          <Route path="api-integration" >
            <Route index element={<APIIntegration />}/>
            <Route path="edit/:userId" element={<EditUserOnChange />} />
          </Route>
          <Route path="props" element={<UsandoProps />} />
          <Route path="children" element={ 
            <UsandoChildren value={10}>
              <h1>Usei o Children</h1>
            </UsandoChildren>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </LangContext.Provider>
  );
}

export default App;
