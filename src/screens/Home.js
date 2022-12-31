/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Platform,
} from 'react-native';
import {Provider, shallowEqual, useDispatch, useSelector} from 'react-redux';
import {store} from '../src/redux/store';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Gallery from '../components/Gallery';
import Menu from '..//components/Menu';
import _ from 'underscore';
import KeyEvent from 'react-native-keyevent';
import {
  downKey,
  leftKey,
  rightKey,
  setYLength,
  upKey,
} from '../redux/actions/homeKeyAction';
import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  dispatch(setYLength(5));
  var running_on_android_tv = Platform.isTV;

  useFocusEffect(
    useCallback(() => {
      KeyEvent.removeKeyDownListener();
      console.log('test');

      // ...
      //const xPos = useSelector(state => state.pos.x);
      KeyEvent.onKeyDownListener(key => {
        console.log(`onKeyDown keyCode Home: ${key.keyCode}`);
        switch (key.keyCode) {
          case 22: //right
            dispatch(rightKey());
            break;
          case 21: //left
            dispatch(leftKey());
            break;
          case 20: //down
            dispatch(downKey());
            break;
          case 19: //up
            dispatch(upKey());
            break;
        }
        // console.log(`Action: ${keyEvent.action}`);
        // console.log(`Key: ${keyEvent.pressedKey}`);
      });

      return () => {
        // KeyEvent.removeKeyDownListener();
      };
    }, []),
  );
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <Menu />
            <View style={styles.sectionContainer}>
              <Gallery rowNumber={0} />
              <Gallery rowNumber={1} />
              <Gallery rowNumber={2} />
              <Gallery rowNumber={3} />
              <Gallery rowNumber={4} />
              <Gallery rowNumber={5} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.black,
  },
  sectionContainer: {
    marginTop: 32,
    marginLeft: 10,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Home;
