import React, {useState, useCallback} from 'react';
import {StyleSheet, View, TouchableHighlight} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SETY} from '../redux/actions/homeKeyAction';
import {useNavigation} from '@react-navigation/native';

const MenuItem = ({setMenuFocus, index}) => {
  //const [focus, setFocus] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onPress = useCallback(index => {
    dispatch(SETY(index));
    navigation.navigate('Detail');
  }, []);

  const yPos = useSelector(state => state.pos.y);
  return (
    <TouchableHighlight
      onPress={() => onPress(index)}
      style={[styles.item, index == yPos ? styles.itemFocused : null]}
      // style={[styles.item, focus ? styles.itemFocused : null]}
      hasTVPreferredFocus={index == yPos}>
      <View />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#808080',
    alignSelf: 'stretch',
    height: 30,
    left: 0,
    marginBottom: 25,
    marginHorizontal: 25,
    borderRadius: 5,
  },
  itemFocused: {
    backgroundColor: '#714add',
  },
});

export default MenuItem;
