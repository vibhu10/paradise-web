import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './ProfilePage.css';

// Import the dynamic components for rendering
import UserInfo from './UserInfo';
import LoginSecurity from './LoginSecurity';
import Reservations from './Reservations';
import Payments from './Payments';
import ListYourProperty from './ListYourProperty';
import BecomeInfluencer from './BecomeInfluencer';
import Notifications from './Notifications';
import ReferralProgram from './ReferralProgram';

const ProfilePage = () => {
  const [activeComponent, setActiveComponent] = useState('UserInfo'); // Default Component

  // Function to render the selected component
  const renderComponent = () => {
    switch (activeComponent) {
      case 'UserInfo':
        return <UserInfo />;
      case 'LoginSecurity':
        return <LoginSecurity />;
      case 'Reservations':
        return <Reservations />;
      case 'Payments':
        return <Payments />;
      case 'ListYourProperty':
        return <ListYourProperty />;
      case 'BecomeInfluencer':
        return <BecomeInfluencer />;
      case 'Notifications':
        return <Notifications />;
      case 'ReferralProgram':
        return <ReferralProgram />;
      default:
        return <UserInfo />;
    }
  };

  return (
    <div>
      <Header />
      <div className="profile-page">
        {/* Pass setActiveComponent to Sidebar */}
        <Sidebar setActiveComponent={setActiveComponent} />
        {/* Render the active component dynamically */}
        <div className="content-area-profilePage">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
