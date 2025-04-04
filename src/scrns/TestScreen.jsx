import { View } from "react-native"
import Test from "../comp/Test"
import Nav from "../comp/Nav";

const TestScreen = () => {
    return (
        <View style={styles.container}>
            <Test />
            <View style={styles.nav}>
                <Nav />
            </View>
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    },
    nav: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
    }
}

export default TestScreen;