import React from 'react';

import { Text, Tab } from './styled';

const TabNavigation = ({children}: any) => {
  return (
    <Text>{children}</Text>
  );
}

const TabStyle = () => {
  return (
    <Tab></Tab>
  );
}

export { TabNavigation, TabStyle}