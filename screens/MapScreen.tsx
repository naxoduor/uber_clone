import { TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import Map from "../components/Map";
import MapScreenNavigation from "../components/MapScreenNavigation";
import React from "react";
import tailwind from 'tailwind-react-native-classnames';



const MapScreen = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate("HomeScreen")}
                style={tailwind`bg-gray-50 absolute top-8 left-4 z-50 p-3 rounded-full shadow-lg`}>
                <Icon name="menu" />
            </TouchableOpacity>
            <View>
                <Map />
            </View>
            <View>
                <MapScreenNavigation />
            </View>
        </View>
    )
}

export default MapScreen