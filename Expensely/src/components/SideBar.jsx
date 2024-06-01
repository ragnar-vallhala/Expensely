// sidebar.jsx
import React, { useState } from 'react';
import { HomeButton, GoalsButton, CategoryButton, TransactionsButton, ProfileButton, MoreButton }  from './';
import './sideBar.css';

const SideBar = () => {
  const [home, setHome] = useState(false);

  const handleHome = () => {
    setHome(!home);
  }

  const handleGoals = () => {
    setHome(!home);
  }
  
  const handleCategory = () => {
    setHome(!home);
  }

  const handleTransactions = () => {
    setHome(!home);
  }

  const handleProfile = () => {
    setHome(!home);
  }

  const handleMore = () => {
    setHome(!home);
  }

  return (
    <div className="button-container">
      <HomeButton onClick={handleHome}>Home</HomeButton>
      <GoalsButton onClick={handleGoals}>Goals</GoalsButton>
      <CategoryButton onClick={handleCategory}>Category</CategoryButton>
      <TransactionsButton onClick={handleTransactions}>Transactions</TransactionsButton>
      <ProfileButton onClick={handleProfile}>Profile</ProfileButton>
      <div class='bottom-button'>
      <MoreButton onClick={handleMore}>More</MoreButton>
      </div>
    </div>
  );
}

export default SideBar;
