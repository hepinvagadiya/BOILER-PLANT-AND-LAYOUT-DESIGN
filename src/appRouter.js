import React from 'react';
import Page from "./Componants/modules/Page";
import Signin from './Componants/modules/auth/signin/signin'
import Cookies from 'js-cookie';

const AppRouter = () => (
    <div >
        {Cookies.get('mainData') ? <Page /> : <Signin />}
    </div>
);

export default AppRouter;