import React from 'react';
import { Button, View, Text } from 'react-native';
import { styles, colors } from '../styles/global';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MyButton({title, onPress, isSecondary = false}) {
    return (
        <TouchableOpacity style={isSecondary?styles.secondaryButton:styles.button} onPress={onPress}>
            <Text style={isSecondary?styles.secondaryButtonText:styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}