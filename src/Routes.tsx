import {
    BrowserRouter,
    Routes, /*antigo Switch*/
    Route
} from 'react-router-dom';

import { Home } from './pages/Home';


export const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Forma Antiga */}
                {/* <Route path="/" exact component={ Home } /> */}

                {/* Atual (Não precisa mais do exact e usa-se o element agora)*/}
                <Route path='/' element={<Home />} />
                {/* rota para quando der erro e não achar nenhuma das rotas declaradas */}
                <Route path='*' element="" />
            </Routes>
        </BrowserRouter>
    );
}