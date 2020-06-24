import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Modal, Platform } from 'react-native';
import { styles, colors } from '../styles/global';
import { TouchableOpacity, State } from 'react-native-gesture-handler';
import AddProject from './add_project';
import MyButton from '../components/myButton';
import ProjectItem from '../components/projectItem';
import * as Constants from '../constants/storageKeys';
import PortfolioService from '../services/portfolioService';
import {MaterialIcons} from '@expo/vector-icons';

const service = new PortfolioService();

export default function Portfolio({navigation}) {
    const [showModal, setShowModal] = useState(false);
    const [projects, setProjects] = useState(null);
    
    useEffect(()=>{
        service.getProjects().then(result => {
            console.log(`\n>>> Portfolio - useEffect - Setting state:\n ${result}`);
            setProjects(result)
        }).catch(e => console.log(e));
        Platform.select({
            web: () => {console.log(">>> RUNNING IN WEB <<<");},
            default: () => {console.log(">>> RUNNING IN NATIVE <<<");}
          })();
    }, []);

    const addProject = (project) => {
        console.log('add project called...');
        
        if (project.name !='') {
            let id = (projects.length + 1);
            project.id = id;
            setProjects((currentProject) => {
                return [project, ...currentProject];
            });
            console.log(`\n>>> Portfolio - addProject - Setting new state:\n ${projects}`);
            service.addProjects(projects).then(result => console.log('Added project'));
        }
        dismissModal();
    }

    const dismissModal = () => {
        setShowModal(false);
        console.log("dismissed modal");
    }
    
    
    const goToAddProject = () => {
        // navigation.navigate('AddProject');
        setShowModal(true);
        console.log("showing modal");
    }

    const projectSelected = (project) => {
        navigation.navigate('Project', project);
    }

    return (
        <View style={styles.page}>
            <Modal visible={showModal} presentationStyle="fullScreen" animationType="slide">
                <AddProject addProject={addProject}/>
            </Modal>
            <View style={styles.row_expanded}>
                <View style={{ flex:1, marginLeft:16, marginTop:25 }}>
                    <Text style={styles.title}>Projects</Text>
                </View>
            </View>
            <FlatList
                data={projects}
                renderItem={({ item }) => <ProjectItem project={item} itemSelected={projectSelected}/>}
                keyExtractor={project => project.id}
            />
            <View style={{
                    backgroundColor:colors.primaryDark,
                    justifyContent:'center',
                    alignSelf:'center',
                    alignItems:'center',
                    height:60,
                    width:60,
                    borderRadius:30,
                    marginBottom:15
                    }}>
                    <MaterialIcons name="add" size={28} color={'#fff'} onPress={goToAddProject}/>
                </View>
        </View>
    );
}