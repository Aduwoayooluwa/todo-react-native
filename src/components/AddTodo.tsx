import { useState } from 'react'
import  { View, StyleSheet, Text, TextInput, Alert  } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from './Button'

const AddTodo = ({ submitHandler }: any) => {
    const [inputText, setInputText] = useState('')
    
    const handleOnChange = (newText: string) => {
        setInputText(newText)
    }
    

    return (
        <View style={styles.todo}>

            <TextInput 
                onChangeText={handleOnChange}
                value={inputText}
                style={styles.inputBox}
                placeholder='Enter Title'
            />
    {
        
    }
            <Button title='Save'  onPress={() => {submitHandler(inputText)
                            setInputText("")
                        }}/>
            
        </View>

        
        )
}

const styles = StyleSheet.create({
    inputBox: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddoingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    inputMultiLine: {
            height: 400,
            borderColor: 'gray',
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingTop: 10,
            borderRadius: 5,
            color: '#000',
            textAlignVertical: 'top',
            marginTop: 30,
            marginBottom: 30,
    },
    todo: {
        marginTop: 30,
        backgroundColor: '#fefefe'
    }
})

export default AddTodo