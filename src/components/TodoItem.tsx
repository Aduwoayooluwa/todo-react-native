import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

type Props = {
    item: any
    pressHandler: any
}

const TodoItem = ({ item, pressHandler }: Props) => {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

export default TodoItem

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
})