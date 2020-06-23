import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { styles } from '../styles/global';
import Home from '../screens/home';
import Portfolio from '../screens/portfolio';
import ProjectDetails from '../screens/project_details';
import AddProject from '../screens/add_project';

const screens = {
    Home: {
        screen: Home
    },
    Portfolio: {
        screen: Portfolio
    },
    Project: {
        screen: ProjectDetails
    },
    AddProject: {
        screen: AddProject
    },
}

const MainStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor: '#fff',
        headerStyle:{
            backgroundColor:'#4fc3f7'
        }
    } 
});
export default createAppContainer(MainStack);