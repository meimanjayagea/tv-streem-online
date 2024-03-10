import React from 'react';
import Pages from '../page';
import { ThemeProvider } from '@material-tailwind/react';
import { customTheme } from '../asset/theme';

function Layout() {
  return (
    <ThemeProvider value={customTheme}>
      <Pages />
    </ThemeProvider>
  );
}

export default Layout;
