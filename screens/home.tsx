import React, {useState, useEffect} from 'react';
import { Animated, View, Text, Image } from 'react-native';
import {styles} from '../styles/global';
import MyButton from '../components/myButton';

export default function Home({ navigation }) {
    const FadeInView = (props) => {
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
    
    const goToProfile = () => {
        navigation.navigate('Portfolio');
    }

    return (
        <View style={{...styles.page, justifyContent:'center'}}>
            <FadeInView>
                <Image style={{ 
                        width:100, 
                        height:100, 
                        resizeMode:'cover',
                        alignSelf:'center',
                        borderRadius:50,
                        marginBottom:20,
                    }}
                    source={
                        { uri: 'https://media-exp1.licdn.com/dms/image/C4E03AQEyGJS_lEWosA/profile-displayphoto-shrink_400_400/0?e=1598486400&v=beta&t=uI_rNZGjQNg1A7CV-I5N_j1rbU8_-fKV42HZ24d3oNE' }
                    }/>
            </FadeInView>
            <Text style={styles.title_center}>Hussain Abbasi</Text>
            <MyButton title="Portfolio" onPress={goToProfile}/>
        </View>
    );
}