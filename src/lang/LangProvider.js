import { useState, createContext } from 'react';
import br from './br'
import en from './en'

export const LangContext = createContext();

const LangProvider = ({children}) => {
	const currentLangState = useState('br');
	const [currentLang, setCurrentLanguage] = currentLangState;

	const toggleLanguage = () => {
		const newLanguage = currentLang === 'br' ? 'en' : 'br'
		setCurrentLanguage(newLanguage)
	}
	
	return (
		<LangContext.Provider value={[
			currentLang === 'br' ? br : en,
			toggleLanguage,
			setCurrentLanguage
		]}>
			{children}
		</LangContext.Provider>
	)
}

export default LangProvider