import { View, StyleSheet, Text, FlatList } from "react-native"
import Button from "./Button"
import { useState } from "react"
import Navigation from "../Layout/Navigation"
import TodoItem from "./TodoItem"
import AddTodo from "./AddTodo"
import { Alert } from "react-native"


const DisplayTodo = () => {
    const [todos, setTodos] = useState([
        {
            text: "Buy a Coffee", key: '1',
        },
        {
            text: "Buy a Maize", key: '2',
        },
        {
            text: "Buy a Cassava", key: '3',
        }
    ])
    const getAllNotes = []

    const pressHandler = (key: any) => {
        setTodos((prevTodo) => {
            return prevTodo.filter(todo => todo.key !== key)
        })
    }

    const submitHandler = (text: string) => {
        if (text === '') {
            Alert.alert(
                'Enter any Text',
                'You need to enter a text to save your note'
            )
        }
        setTodos((prevTodos) => {
            return [{
                text: text, key: Math.random().toString()
            },
                ...prevTodos
            ]
        })

        
    }

    return (
        <View>
            <Navigation />
            <Text style={styles.headText}> All Todos Displayed here</Text>

            {/* <Butto  n name={} onPress={} /> */}

            <View style={styles.content}>
                {/* todo form */}
                <AddTodo submitHandler={submitHandler}/>

                <View style={styles.list}>
                    <FlatList data={todos} renderItem={({ item }) => {
                        return (
                            <TodoItem item={item} pressHandler={pressHandler}/>
                        )
                    }}/>
                </View>
            </View>
        </View>
        )
}

export default DisplayTodo

const styles = StyleSheet.create({
    content: {
        padding: 40
    },
    list: {
        marginTop: 20
    },
    headText: {
        textAlign: 'center',
        margin: 20
    }
})