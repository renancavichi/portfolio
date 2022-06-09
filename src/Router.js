import AddImage from './components/AddImage';
import UsandoProps from './components/UsandoProps'
import UsandoChildren from './components/UsandoChildren';
import UsandoIcons from './components/UsandoIcons';
import APIIntegration from './components/APIIntegration';
import { Routes, Route } from "react-router-dom";
import NotFound from './pages/NotFound'
import EditUserOnChange from './components/EditUserOnChange'
import LayoutDefault from './pages/LayoutDefault';
import LayoutDashboard from './pages/LayoutDashboard';
import Login from './components/Login';
import CadastraProduto from './components/CadastraProduto';
import Home from './pages/Home';

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<LayoutDefault />}>
        <Route index element={<Home />} />
        <Route path="props" element={<UsandoProps />} />
        <Route path="children" element={
          <UsandoChildren value={10}>
            <p>Sample: Using Children.</p>
          </UsandoChildren>
        } />
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
  )
}

export default Router