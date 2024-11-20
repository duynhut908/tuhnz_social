import React, { createContext, useState, useContext, useCallback } from 'react';

// Tạo context để quản lý chế độ sáng tối
const ThemeContext = createContext();

// Hook để sử dụng context
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider để bao bọc ứng dụng và cung cấp theme
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(false);

  const toggleTheme = useCallback((e) => {
    console.log(e)
    setMode(prevMode => !prevMode);
    console.log(mode)
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
