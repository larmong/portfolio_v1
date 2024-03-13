import {ReactElement} from 'react';
import {Outlet} from 'react-router';

import Header from '@components/layout/header';
import {Page, Wrapper} from '@commons/layout/style';

export default function Layout({children}: IPropsLayout) {
    return <Wrapper>
        <Header/>
        <Page>
            <section>
                {children || <Outlet/>}
            </section>
            <footer>copyright ⓒ 2024 All rights reserved by larmong.</footer>
        </Page>
    </Wrapper>;
}

interface IPropsLayout {
    children?: ReactElement;
}
