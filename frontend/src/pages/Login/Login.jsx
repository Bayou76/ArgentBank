import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SignIn from '../../components/SignIn/SignIn';

function Login() {
    return (
        <div className="page-container">
            <Header />
            <main className="main bg-dark">
                <SignIn />
            </main>
            <Footer />
        </div>
    );
}

export default Login;
