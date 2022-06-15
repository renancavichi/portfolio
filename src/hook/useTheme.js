import { useContext } from "react"
import { ThemeContext } from "../providers/ThemeProvider"

const useTheme = () => {
  const mode = useContext(ThemeContext)
  return mode
}

export default useTheme