import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { COLORS, SIZES, icons } from '../../../constants';

const Mainlayout = ({ children }) => {
  return <View style={{ flex: 1 }}>{children}</View>;
};

export default Mainlayout;
