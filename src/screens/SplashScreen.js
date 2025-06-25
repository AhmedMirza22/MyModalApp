import React, {useEffect, useRef} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
} from 'react-native';


const SplashScreen = () => {
  const slideAnim = useRef(
    new Animated.Value(Dimensions.get('window').height),
  ).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0, // Slide to center (since it's already centered with translateY)
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    // setTimeout(() => {
    //   navigation.navigate('UserScreen');
    // }, 3000);
  }, []);

  return (
      <View style={styles.container}>
        <Animated.View
          style={{
            transform: [{translateY: slideAnim}],
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/UserThumbnail.png')} // Replace with your logo path
            style={styles.logo}
            resizeMode="contain"
          />
        </Animated.View>
        <Text style={{color: '#131ee4aa'}}>POWER BY MY MODEL</Text>
      </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2EDFF',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
});
