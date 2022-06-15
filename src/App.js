import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './providers/AuthProvider'
import LangProvider from './providers/LangProvider'
import ThemeProvider from './providers/ThemeProvider';
import Router from './Router';

function App() {
  return (
      <div className="App">
        <AuthProvider>
          <LangProvider>
            <ThemeProvider>
              <Router />
            </ThemeProvider>
          </LangProvider>
        </AuthProvider>
      </div>
  );
}

export default App;
