import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from './Header';
import Sidebar from './Sidebar';
import './ProfilePage.css';
import { ThreeDots } from 'react-loading-icons';

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
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch user profile data on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      console.log(token, 'checking token is stored in local');

      try {
        const response = await fetch('http://localhost:3000/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data, 'data fetched from API');
          setUserData(data); // Store fetched data in state
        } else {
          const errorMsg = await response.text();
          setError(errorMsg);
        }
      } catch (err) {
        setError('Failed to fetch profile data');
        console.error(err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    fetchProfile();
  }, []);

  // Function to handle updating the profile
  const updateProfile = async (updatedData) => {
    const token = localStorage.getItem('token');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/users/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data, 'updated data from API');
        setUserData(data); // Update the state with the new data
      } else {
        const errorMsg = await response.text();
        setError(errorMsg);
      }
    } catch (err) {
      setError('Failed to update profile');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Navigate to /host-Registration if ListYourProperty is selected
  useEffect(() => {
    if (activeComponent === 'ListYourProperty') {
      navigate('/host-Registration');
    }
  }, [activeComponent, navigate]);

  // Render the active component dynamically
  const renderComponent = () => {
    const componentProps = {
      userData: userData || {},
      updateProfile, // Pass update function to child components
    };

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

  return (
    <div>
      {loading && (
        <div className="loading-overlay">
          <ThreeDots className="spinner" color="green" />
        </div>
      )}
      <Header />
      <div className="profile-page">
        {/* Sidebar with navigation */}
        <Sidebar setActiveComponent={setActiveComponent} userData={userData} />
        {/* Content area dynamically rendering the selected component */}
        <div className="content-area-profilePage">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default ProfilePage;
