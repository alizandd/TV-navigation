import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MenuItem from './MenuItem';
import {useDispatch, useSelector} from 'react-redux';
import {
  initial,
  setXLength,
  SETY,
  setYLength,
} from '../redux/actions/homeKeyAction';

const Menu = ({navigation}) => {
  const dispatch = useDispatch();

  const customEqual = (oldValue, newValue) => newValue === 1;
  const xPos = useSelector(state => state.pos.x, customEqual);

  if (xPos != -1) {
    return <></>;
  } else {
    dispatch(setYLength(4));
    dispatch(SETY(0));

    return (
      <View style={[styles.wrapper]}>
        <View style={styles.circle} />
        <MenuItem index={0} />
        <MenuItem index={1} />
        <MenuItem index={2} />
        <MenuItem index={3} />
        <MenuItem index={4} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    width: 100,
    height: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 1,
    left: -200,
    transform: [{translateX: 200}],
  },
  wrapperFocused: {
    width: 200,
  },
  circle: {
    backgroundColor: '#808080',
    width: 50,
    height: 50,
    top: 30,
    left: '50%',
    transform: [{translateX: -25}],
    borderRadius: 30,
    marginBottom: 110,
  },
});

export default Menu;
