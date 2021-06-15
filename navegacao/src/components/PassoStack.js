import React from 'react'
import {View, Text, Button} from 'react-native'
import TextoCentral from '../components/TextoCentral'

export default props => {
    return(
    <View style={{flex:1}}>
        <View>
            {props.avancar
                ?<Button
                    title="Avançar"
                    style={{backgroundColor:'#000'}}
                    onPress={()=>{props.navigation.navigate(props.avancar)}}/>
                :false}
        </View>
        <View style={{flex:1}}>
            {props.children}
        </View>
    </View>
)}
