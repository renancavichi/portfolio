import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './providers/AuthProvider'
import LangProvider from './providers/LangProvider'
import Router from './Router';

function App() {
  return (
      <div className="App">
        <AuthProvider>
          <LangProvider>
            <Router />
          </LangProvider>
        </AuthProvider>
      </div>
  );
}

export default App;
