import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './ProfilePage.css';

// Import the dynamic components
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
  const [userData, setUserData] = useState({}); // Centralized state for user data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch user profile data on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      console.log(token, "checking token is stored in local");
  
      try {
        const response = await fetch('http://localhost:3000/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log(data, "data fetched from API");  // Add this line for debugging
          setUserData(data);  // Store fetched data in state
        } else {
          const errorMsg = await response.text();
          setError(errorMsg);
        }
      } catch (err) {
        setError('Failed to fetch profile data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProfile();
  }, []);

  // Render the active component dynamically
  const renderComponent = () => {
    const componentProps = { userData: userData || {} };

    switch (activeComponent) {
      case 'UserInfo':
        return <UserInfo {...componentProps} />;
      case 'LoginSecurity':
        return <LoginSecurity {...componentProps} />;
      case 'Reservations':
        return <Reservations {...componentProps} />;
      case 'Payments':
        return <Payments {...componentProps} />;
      case 'ListYourProperty':
        return <ListYourProperty {...componentProps} />;
      case 'BecomeInfluencer':
        return <BecomeInfluencer {...componentProps} />;
      case 'Notifications':
        return <Notifications {...componentProps} />;
      case 'ReferralProgram':
        return <ReferralProgram {...componentProps} />;
      default:
        return <UserInfo {...componentProps} />;
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <Header />
      <div className="profile-page">
        {/* Sidebar with navigation */}
        <Sidebar setActiveComponent={setActiveComponent} />
        {/* Content area dynamically rendering the selected component */}
        <div className="content-area-profilePage">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
