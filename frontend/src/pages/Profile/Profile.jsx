import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProfileHeader from '../../components/ProfilHeader/ProfilHeader';
import ProfileMain from '../../components/ProfilMain/ProfileMain';

function Profile() {
    const user = useSelector((state) => state.auth.user); 

    console.log('User from Redux state:', user); 

    return (
        <div>
            <Header />
            <main className="main bg-dark">
                <ProfileHeader />
                <ProfileMain />
            </main>
            <Footer />
        </div>
    );
}

export default Profile;
