import { Image, View } from 'react-native'
import { setDestination, setOrigin } from '../app/slices/navigationSlice';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NavOptions from "../components/NavOptions";
import NavFovorites from "../components/NavFavorites";
import tailwind from 'tailwind-react-native-classnames'
import { useDispatch } from 'react-redux'
// import { GOOGLE_MAPS_API_KEY} from '@env';

// const HomeScreen = ({navigation}) => {
//     return (
//     <SafeAreaView style={{ flex:1, backgroundColor: "white"}}>
//     <View>
//         <Text>Home Screen</Text>
//         <NavOptions navigation={navigation}/>
//     </View>
//     </SafeAreaView> 
//     )
// }

// export default HomeScreen


const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch()
    return (
    <SafeAreaView style={{ flex:1, backgroundColor: "white"}}>
        <View style={tailwind`p-5`}>
          <Image
          style={{width: 100, height: 100, resizeMode: "contain"}}
          source={{
            uri: "https://links.papareact.com/gzs"
          }}/>
          {/* <GooglePlacesAutocomplete
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          placeholder="Where from"
          enablePoweredByContainer={false}
          minLength={2}
          fetchDetails={true}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details?.geometry.location,
                description: data.description
              })
            );
            dispatch(setDestination(null))
          }}
          query={{
            key:GOOGLE_MAPS_API_KEY,
            language: "en"
          }}
          styles={{
            container: {
              flex: 0,
            }
          }}/> */}
      
      <NavOptions navigation={navigation}/>
      <NavFovorites navigation={navigation} shouldSetOrigin/>
      </View>
      </SafeAreaView>
    );
  };

  export default HomeScreen

