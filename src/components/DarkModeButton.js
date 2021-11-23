import { FaMoon, FaSun } from 'react-icons/fa'
import useDarkMode from '../hooks/useDarkMode'

const DarkModeButton = () => {
  const [darkTheme, setDarkTheme] = useDarkMode()
  const handleMode = () => setDarkTheme(!darkTheme)

  return <span onClick={handleMode}>{darkTheme ? <FaSun size='24' /> : <FaMoon size='24' />}</span>
}

export default DarkModeButton
