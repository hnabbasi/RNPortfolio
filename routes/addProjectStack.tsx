import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import AddProject from '../screens/add_project';

const screens = {
    AddProject: {
        screen: AddProject
    },
}

const AddProjectStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor: '#fff',
        headerStyle:{
            backgroundColor:'#4fc3f7'
        }
    } 
});

export default createAppContainer(AddProjectStack);