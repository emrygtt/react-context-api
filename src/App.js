import { ThemeContextProvider } from './contexts/ThemeContext';
import ChangeTheme from './components/ChangeTheme';
import Footer from './components/Footer';
import { LangContextProvider } from './contexts/LangContext';
import ChangeLang from './components/ChangeLang';
import './styles.css'
import { Container } from './Container';

const  App = () => (
    <LangContextProvider>
      <ThemeContextProvider>
        <Container/>
      </ThemeContextProvider>
    </LangContextProvider>
  );

export default App;
