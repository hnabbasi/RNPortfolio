import {AsyncStorage} from 'react-native';
import * as Constants from '../constants/storageKeys';

async function loadSampleData(){
    // console.log(">>> removing flag");
    // await AsyncStorage.removeItem(Constants.FirstLaunchKey);

    const l = await AsyncStorage.getItem(Constants.FirstLaunchKey);
    console.log(`Sample Loaded? ${l}`);
    
    if(l === 'true') {
        console.log('Already loaded sample');
        return;
    }
  
    const data = [
      { id: '1', name: 'North Shore Steel', role:'Solution Architect', teamSize:2, teamLead:true },
      { id: '2', name: 'Chevron', role:'Solution Architect', teamSize:2, teamLead:true },
      { id: '3', name: 'Halliburton', role:'Mobile Lead', teamSize:2, teamLead:true },
      { id: '4', name: 'HCTRA', role:'Mobile Dev Lead', teamSize:2, teamLead:true },
    ];
  
    try {
      await AsyncStorage.setItem(Constants.ProjectsKey, JSON.stringify(data));
      console.log(`Loaded ${data.length} sample projects.`);
      console.log(data);
  
      await AsyncStorage.setItem(Constants.FirstLaunchKey, 'true');  
      console.log(`First launch flag set. \u1F44D`);
    } catch (error) {
      console.log(error);
    }
  }
  

export default class PortfolioService {
    constructor() {
        console.log(`======================= PortfolioService called.`);
        
        loadSampleData();
    }
    
    addProjects = async (projects) => {
        try {
            await AsyncStorage.setItem(Constants.ProjectsKey, JSON.stringify(projects), (err)=>{
                if(err){
                    console.log(err);
                } else {
                    console.log(`${projects.length} project(s) added.`);
                }
            });   
        } catch (error) {
            console.log(error);            
        }
    };
    
    getProjects = async () => {
        try {
            let data = await AsyncStorage.getItem(Constants.ProjectsKey);
            return JSON.parse(data);            
        } catch (error) {
            console.log(error);            
        }
    };
    
};