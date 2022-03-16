import {
    BrowserRouter,
    Routes as Rotas, /*antigo Switch*/
    Route
} from 'react-router-dom';
import { Followers } from './pages/Followers/followers';
import { Followings } from './pages/Following/followings';

import { Home } from './pages/Home/home';
import { Repositories } from './pages/Repositories/repositories';


export const Routes = () => {
    return (
        <BrowserRouter>
            <Rotas>
                {/* Forma Antiga */}
                {/* <Route path="/" exact component={ Home } /> */}

                {/* Atual (Não precisa mais do exact e usa-se o element agora)*/}
                <Route path='/' element={<Home />} />

                <Route path='/repositories' element={<Repositories />} />
                <Route path='/followers' element={<Followers />} />
                <Route path='/followings' element={<Followings />} />

                {/* rota para quando der erro e não achar nenhuma das rotas declaradas */}
                <Route path='*' element="" />
            </Rotas>
        </BrowserRouter>
    );
}