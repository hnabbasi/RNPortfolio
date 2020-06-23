import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/global';
import { TouchableOpacity, Switch } from 'react-native-gesture-handler';

export default function ProjectItem({project, itemSelected}) {
    return (
        <TouchableOpacity style={styles.item} onPress={() => {itemSelected(project)}}>
            <Text style={styles.list_item_title}>{project.name}</Text>
            <Text style={styles.list_item_desc}>{project.role}</Text>
        </TouchableOpacity>
    );
}
