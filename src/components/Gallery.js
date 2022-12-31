import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import shuffle from 'lodash.shuffle';
import GalleryItem from './GalleryItem';
import {DEFAULT_ITEMS} from '../utils/DefaultItems';
import {useDispatch, useSelector} from 'react-redux';
import {rightKey, setXLength,setYLength} from '../redux/actions/homeKeyAction';

const Gallery = ({rowNumber}) => {
  const dispatch = useDispatch();
  const items = shuffle(DEFAULT_ITEMS);
  dispatch(setXLength(items.length - 1));


  return (
    <ScrollView horizontal style={styles.row}>
      {items.map((item, i) => (
        <GalleryItem
          key={i}
          index={i}
          title={item.name}
          image={item.image}

          // blockFocusRight={i === items.length - 1}
          blockFocusRight={true}
          rowNumber={rowNumber}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    marginBottom: 50,
  },
});

export default Gallery;
