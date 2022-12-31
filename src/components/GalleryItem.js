import React, {useState, useCallback, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  findNodeHandle,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SETX, SETY} from '../redux/actions/homeKeyAction';
import { useNavigation } from "@react-navigation/native";

const GalleryItem = ({
  title,
  image,
  hasTVPreferredFocus,
  blockFocusRight,
  index,
  rowNumber,
}) => {
  const [focus, setFocus] = useState(false);
  const [node, setNode] = useState(0);

  const xPos = useSelector(state => state.pos.x);
  const yPos = useSelector(state => state.pos.y);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const onFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);

  const touchableHighlightRef = useRef(null);
  const onRef = useCallback(ref => {
    if (ref) {
      setNode(findNodeHandle(ref));
      touchableHighlightRef.current = ref;
    }
  }, []);
  const onPress = useCallback(
    (index, rowNumber) => {
      dispatch(SETX(index));
      dispatch(SETY(rowNumber));
      navigation.navigate('Detail')
    },
    [dispatch],
  );
  return (
    <TouchableHighlight
      onFocus={onFocus}
      onBlur={onBlur}
      onPress={() => onPress(index, rowNumber)}
      hasTVPreferredFocus={index == xPos && rowNumber == yPos}
      style={[
        styles.wrapper,
        index == xPos && rowNumber == yPos ? styles.wrapperFocused : null,
      ]}
      ref={onRef}
      nextFocusRight={findNodeHandle(node)}
      nextFocusLeft={findNodeHandle(node)}
      nextFocusDown={findNodeHandle(node)}
      nextFocusUp={findNodeHandle(node)}>
      <View>
        <Image style={styles.image} source={image} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderColor: 'transparent',
    borderWidth: 4,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  wrapperFocused: {
    borderColor: '#714add',
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 10,
  },
  text: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default GalleryItem;
