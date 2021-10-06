import { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { AppContainer, MainSection } from './components/app.style';
import { Button } from './components/button.style';
import { themes } from './themes';

function App() {
  const[currentTheme, setCurrentTheme] = useState('light')

  const getOpositeTheme = useCallback(
    ()=>(currentTheme === 'light' ? 'dark' : 'light'),
    [currentTheme]
  )
  return (
    <ThemeProvider theme={themes[currentTheme]}>
        <AppContainer>
            <MainSection>
              <h1>You are in {currentTheme} mode</h1>
              <Button onClick={()=>setCurrentTheme(getOpositeTheme())}>switch to {getOpositeTheme()} mode</Button>
            </MainSection>
        </AppContainer>
    </ThemeProvider>
  );
}

export default App;
