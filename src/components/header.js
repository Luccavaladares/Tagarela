import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    View,
    Image,
} from "react-native";
import Svg, { Path } from 'react-native-svg';
import logo from "../../assets/logoTagarela_3.png";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');

const logoWidth = width * 0.15; // Logo width based on screen size

const HeaderComponent = () => {
    const navigation = useNavigation();
    return(
        <View style={[styles.containerHeader, { width }]}>
            <Image source={logo} style={[styles.imgLogo, {width: logoWidth}]} />
            <View style={styles.containerBttn}>
                <TouchableOpacity style={styles.configButton}>
                    <Svg width={60} height={49} viewBox="0 0 60 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M26.2594 0L22.5187 7.27057C21.7706 7.45387 21.0973 7.75935 20.4239 8.06484L11.5212 5.00997L6.13466 9.40898L9.87531 16.6796C9.50125 17.2905 9.20199 17.7793 8.90274 18.3903L0 21.4451V27.5549L8.90274 30.6097C9.20199 31.2207 9.50125 31.7095 9.87531 32.3204L6.13466 39.591L11.5212 43.99L20.4239 40.9352C21.0973 41.1796 21.7706 41.485 22.5187 41.7294L26.2594 49H33.7407L37.4813 41.7294C38.1546 41.485 38.9027 41.2406 39.5761 40.9352L48.4788 43.99L53.8653 39.591L50.1247 32.3204C50.4239 31.7706 50.798 31.1596 51.0973 30.6097L60 27.5549V21.4451L51.0973 18.3903C50.8728 17.8404 50.4988 17.2294 50.1247 16.6796L53.8653 9.40898L48.4788 5.00997L39.5761 8.06484C38.9027 7.82045 38.1546 7.51496 37.4813 7.27057L33.7407 0L26.2594 0ZM30 15.2743C36.2095 15.2743 41.2219 19.3678 41.2219 24.4389C41.2219 29.51 36.2095 33.6035 30 33.6035C23.7905 33.6035 18.7781 29.51 18.7781 24.4389C18.7781 19.3678 23.7905 15.2743 30 15.2743Z" fill="#5E5CB2"/>
                    </Svg>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutButton} onPress={() => {navigation.navigate('Login');}}>
                    <Svg width={52} height={49} viewBox="0 0 52 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M19.3273 0V6.99601H45.0971V41.9761H19.3273V48.9721H51.5395V0H19.3273ZM12.8849 13.992L0 24.486L12.8849 34.9801V27.984H38.6546V20.988H12.8849V13.992Z" fill="#5E5CB2"/>
                    </Svg>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "space-between", // This will align items to the start and end
        // paddingHorizontal: 10, // Add some horizontal padding for spacing
    },
    imgLogo: {
        height: height * 0.07,
        margin: 10,
    },
    containerBttn: {
        flexDirection: 'row',
    },
    configButton: {
        margin: 10,
    },
    logoutButton: {
        margin: 10,
        marginRight: 20,
    },
});

export default HeaderComponent;