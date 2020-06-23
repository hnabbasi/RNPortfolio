import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard, Button, Text } from 'react-native';
import { Formik } from 'formik';
import { styles } from '../styles/global';
import { TextInput, Switch } from 'react-native-gesture-handler';
import MyButton from '../components/myButton';

export default function AddProject({addProject}){
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{...styles.page, flex:1, justifyContent:'center'}}>
                <View style={styles.modal}>
                    <Formik
                        initialValues={
                            { id: '', name: '', role:'', teamSize:'', teamLead:null  }
                        }
                        onSubmit={(values, actions)=>{
                            actions.resetForm();
                            addProject(values);                
                        }}>
                            {(props) => (
                                    <View>
                                        <TextInput
                                            style={styles.input}
                                            placeholder='Project name'
                                            onChangeText={props.handleChange('name')}
                                            value={props.values.name}/>
                                        <TextInput
                                            style={styles.input}
                                            placeholder='Role'
                                            onChangeText={props.handleChange('role')}
                                            value={props.values.role}/>
                                        <View style={
                                            {
                                                flexDirection: 'row',
                                                justifyContent:'space-between',
                                                alignItems:'center'
                                            }}>
                                            <TextInput
                                                style={{...styles.input, width:100}}
                                                placeholder='Team size'
                                                onChangeText={props.handleChange('teamSize')}
                                                value={props.values.teamSize}/>
                                            <Text>Team lead</Text>
                                            <Switch
                                                style={{margin:8}}
                                                onValueChange={v => props.setFieldValue('teamLead', v)}
                                                value={props.values.teamLead}/>
                                        </View>
                                        <View style={styles.column}>
                                            <MyButton title='Add' onPress={props.handleSubmit}/>
                                            <MyButton title='Cancel' isSecondary onPress={()=>addProject({name:''})}/>
                                        </View>
                                    </View>
                            )}
                    </Formik> 
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

