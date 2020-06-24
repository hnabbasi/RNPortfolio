import React, {useState, useEffect} from 'react';
import { Animated } from 'react-native';

export default function FadeInView({props}) {
    const [fadeAnim] = useState(new Animated.Value(0));  
    
    useEffect(()=>{
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
        }).start();
    });

    return (
        <Animated.View
          style={{
            opacity: fadeAnim,
          }}>
          {props.children}
        </Animated.View>
      );
};