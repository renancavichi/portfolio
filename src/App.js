import AddImage from './estudo/addimage';
import ExemploContexto from './estudo/ExemploContexto';
import UsandoProps from './estudo/UsandoProps'
import LangContext from './estudo/LangContext'
import { useState } from 'react'
import UsandoChildren from './estudo/UsandoChildren';
import UsandoIcons from './estudo/UsandoIcons';
import APIIntegration from './estudo/APIIntegration';
import { Routes, Route } from "react-router-dom";
import NotFound from './pages/NotFound'
import EditUserOnChange from './estudo/EditUserOnChange'
import LayoutDefault from './pages/LayoutDefault';
import LayoutDashboard from './pages/LayoutDashboard';

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
        <Routes>
          <Route path="/" element={<LayoutDefault />}>
            <Route index element={<ExemploContexto/>} />
            <Route path="props" element={<UsandoProps />} />
            <Route path="children" element={<UsandoChildren />} />
            <Route path="images">
              <Route index element={<AddImage />} />
              <Route path="icon" element={<UsandoIcons />} />
            </Route>
          </Route>

          <Route path='admin' element={<LayoutDashboard />} >
              <Route index element={<APIIntegration />}/>
              <Route path="edit/:userId" element={<EditUserOnChange />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </LangContext.Provider>
  );
}

export default App;
