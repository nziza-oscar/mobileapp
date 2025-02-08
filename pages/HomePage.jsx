import { StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

export default function HomePage(){

    return (
       <View style={styles.container}>
          <Card >
            <Text variant="titleLarge">Welcome to react native</Text>
            <Button>Send</Button>
          </Card>
       </View>
    )
    
}

const styles =  StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:''
        justifyContent:"center"

    }
})