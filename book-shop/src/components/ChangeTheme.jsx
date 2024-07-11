import React, { useState, useEffect } from 'react';

const ChangeTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  const changeTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-dark', 'text-white');
      document.body.classList.remove('bg-light', 'text-dark');
    } else {
      document.body.classList.add('bg-light', 'text-dark');
      document.body.classList.remove('bg-dark', 'text-white');
    }
  }, [darkMode]);

  return (
    <div>
      <button
        className={`btn ${darkMode ? 'btn-light' : 'btn-dark'}`}
        onClick={changeTheme}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          borderRadius: '50%',
          width: '80px',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '50px',
          zIndex: 1000,
        }}
      >
        {darkMode ? '🌞' : '🌙'}
      </button>
    </div>
  );
};

export default ChangeTheme;
