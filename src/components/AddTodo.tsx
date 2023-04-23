import { useState } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import Button from './Button'

const AddTodo = () => {
    const [inputText, setInputText] = useState('')
    const [inputMultiLineText, setInputMultiLineText] = useState('')
    const handleOnChange = (newText: string) => {
        setInputText(newText)
    }
    const handleMultText = (text:string) => {
        setInputMultiLineText(text)
    }

    return (
        <View style={styles.todo}>
            <TextInput 
                onChangeText={handleOnChange}
                value={inputText}
                style={styles.inputBox}
                placeholder='Enter Title'
            />

            <TextInput 
                onChangeText={handleMultText}
                value={inputMultiLineText}
                style={styles.inputMultiLine}
                placeholder='Enter Note'
                multiline
            />

            <Button title='Save' onPress={() => {
                
            }} />
            
            
        </View>
        )
}

const styles = StyleSheet.create({
    inputBox: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        color: '#000',
        width: 300
    },
    inputMultiLine: {
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 5,
        color: '#000',
        width: 300,
        marginTop: 30

    },
    todo: {
        marginTop: 30,
        backgroundColor: '#fefefe'
    }
})

export default AddTodo