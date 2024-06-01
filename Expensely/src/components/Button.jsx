import React from 'react';
import './button.css';

export const HomeButton = ({ onClick, children }) => {
  return (
    <button className='my-button home-button' onClick={onClick}>
      <span className='button-icon' />
      {children}
    </button>
  );
};

export const GoalsButton = ({ onClick, children }) => {
  return (
    <button className='my-button goals-button' onClick={onClick}>
      <span className='button-icon' />
      {children}
    </button>
  );
};

export const CategoryButton = ({ onClick, children }) => {
  return (
    <button className='my-button category-button' onClick={onClick}>
      <span className='button-icon' />
      {children}
    </button>
  );
};

export const TransactionsButton = ({ onClick, children }) => {
  return (
    <button className='my-button transactions-button' onClick={onClick}>
      <span className='button-icon' />
      {children}
    </button>
  );
};

export const ProfileButton = ({ onClick, children }) => {
  return (
    <button className='my-button profile-button' onClick={onClick}>
      <span className='button-icon' />
      {children}
    </button>
  );
};

export const MoreButton = ({ onClick, children }) => {
  return (
    <button className='my-button more-button' onClick={onClick}>
      <span className='button-icon' />
      {children}
    </button>
  );
};
