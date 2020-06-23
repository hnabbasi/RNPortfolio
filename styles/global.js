import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export { styles, colors }

const colors = {
    primary:'#4fc3f7',
    primaryDark:'#0092c4',
    pageBackground:'#fff',
    tileBackground:'#fff'
}

const styles = StyleSheet.create(
{
    page: {
        flex: 1,
        backgroundColor: colors.pageBackground,
        padding:4
    },
    list_item_title:{
        fontSize: 24,
        color: colors.tileBackground
    },
    list_item_desc:{
        fontSize: 14,
        color: colors.tileBackground
    },
    item: {
        backgroundColor: colors.primary,
        paddingHorizontal:16,
        paddingVertical:8,
        marginVertical:8,
        marginHorizontal:16,
        borderRadius:16,
        height:60
    },
    title: {
        fontSize: 24,
        color:'#000',
        fontWeight:'bold'
    },
    title_center: {
        fontSize: 24,
        color:'#000',
        fontWeight:'bold',
        textAlign:'center'
    },
    input:{
        borderWidth:1,
        borderColor:'#eee',
        borderRadius:8,
        padding:8,
        margin:8,
        fontSize:14,
        backgroundColor:'#fff'
    },
    button:{
        backgroundColor: colors.primaryDark,
        borderRadius:20,
        borderWidth:0,
        marginHorizontal:20,
        marginVertical:10,
        shadowRadius:2,
        shadowColor:'#555',
        shadowOffset: { width:2, height:2 },
        shadowOpacity:.75,
        height:40,
        justifyContent:'center'
    },
    buttonText: {
        fontSize:14,
        fontWeight:"bold",
        color:'#fff',
        textAlign:'center',
        textTransform:'uppercase'
    },
    secondaryButton:{
        borderRadius:20,
        borderWidth:0,
        borderColor: colors.primaryDark,
        marginHorizontal:20,
        marginVertical:10,
        height:40,
        justifyContent:'center'
    },
    secondaryButtonText: {
        fontSize:14,
        fontWeight:"bold",
        color:colors.primaryDark,
        textAlign:'center',
        textTransform:'uppercase'
    },
    modal:{
        marginVertical:60,
        marginHorizontal:40,
        padding: 10,
        backgroundColor: '#efefef',
        borderRadius:20,
    },
    row:{
        flexDirection: 'row',
        justifyContent:'center'
    },
    row_expanded:{
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    column:{
        flexDirection: 'column',
        justifyContent:'center'
    }
});
