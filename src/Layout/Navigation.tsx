import { StyleSheet, Text, View } from 'react-native'

export default function Navigation() {
return (
        <View style={styles.container}>
            <Text style={styles.text}>NotePad</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF8400',
        justifyContent: 'center',
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
        height: 100,
        elevation: 3,
        alignContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'whitesmoke',
        textAlign: 'center',
        marginTop: 40
    }
})