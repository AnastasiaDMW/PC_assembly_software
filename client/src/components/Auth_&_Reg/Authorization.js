import React from 'react';
import BeginPageBottom from './BeginPageBottom';
import '../../modules/scss/authorization.scss';
import { Outlet } from 'react-router-dom';


export default function Authorization({page, valueReg, onChangePages}) {


    return(
    <main className='page-main'>
        <section className="main">
            <h1 className="main__title">{valueReg ? page.titleSignUpText : page.titleSignInText}</h1>

            <Outlet />

            <BeginPageBottom
                onChangePage={onChangePages}
                signText={!valueReg ? page.signInText : page.signUpText}
            />
        </section>
    </main>
    );
}