import 'bootstrap/dist/css/bootstrap.min.css';
import AddImage from './components/AddImage';
import ExemploContexto from './components/ExemploContexto';
import UsandoProps from './components/UsandoProps'
import LangProvider from './lang/LangProvider'
import UsandoChildren from './components/UsandoChildren';
import UsandoIcons from './components/UsandoIcons';
import APIIntegration from './components/APIIntegration';
import { Routes, Route } from "react-router-dom";
import NotFound from './pages/NotFound'
import EditUserOnChange from './components/EditUserOnChange'
import LayoutDefault from './pages/LayoutDefault';
import LayoutDashboard from './pages/LayoutDashboard';
import AuthProvider from './providers/authProvider'
import Login from './components/Login';
import CadastraProduto from './components/CadastraProduto';

function App() {
  return (
      <div className="App">
       <AuthProvider>
          <LangProvider>
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

              <Route path='admin/login' element={<Login />} />
              <Route path='admin/' element={<LayoutDashboard />}>
                    <Route index element={<APIIntegration />}/>
                    <Route path="edit/:userId" element={<EditUserOnChange />} />
                    <Route path="cadastra-produto/" element={<CadastraProduto />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </LangProvider>
        </AuthProvider>
      </div>
  );
}

export default App;
