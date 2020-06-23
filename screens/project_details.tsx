import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/global';
import { Switch } from 'react-native-gesture-handler';

export default function ProjectDetails({ navigation }) {
    return (
        <View style={styles.page}>
            <Text style={styles.title}>{ navigation.getParam('name') }</Text>
            <Text>{ navigation.getParam('role') }</Text>
            <Text style={styles.list_item_desc}>{navigation.getParam('teamSize')}</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text>Team lead</Text>
                <Switch value={navigation.getParam('teamLead')}/>
            </View>
        </View>
    );
}