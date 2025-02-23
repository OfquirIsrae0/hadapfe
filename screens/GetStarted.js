import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, Animated } from 'react-native';

const GetStarted = ({ navigation }) => {
    const scaleValue = useRef(new Animated.Value(1)).current;

    // Gravitational animation for button press
    const onPressIn = () => {
        Animated.spring(scaleValue, {
            toValue: 0.95,
            friction: 3,
            useNativeDriver: true,
        }).start();
    };

    const onPressOut = () => {
        Animated.spring(scaleValue, {
            toValue: 1,
            friction: 3,
            useNativeDriver: true,
        }).start();
    };

    return (
        <ImageBackground source={require('../assets/images/background.jpg')} style={styles.background}>
            <View style={styles.container}>
                {/* Logo */}
                <Image source={require('../assets/images/logo.png')} style={styles.logo} />

                {/* Description */}
                <Text style={styles.description}>Track your loved ones with ease and ensure their safety.</Text>

                {/* Buttons in a Row */}
                <View style={styles.buttonContainer}>
                    {/* Log In Button with Gravitational Animation */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                        onPressIn={onPressIn}
                        onPressOut={onPressOut}
                        activeOpacity={0.8}
                        style={styles.button}
                    >
                        <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
                            <Text style={styles.buttonText}>Log In</Text>
                        </Animated.View>
                    </TouchableOpacity>

                    {/* Sign Up Button with Gravitational Animation */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
                        onPressIn={onPressIn}
                        onPressOut={onPressOut}
                        activeOpacity={0.8}
                        style={styles.button}
                    >
                        <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </Animated.View>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    logo: {
        width: 300, // Increased logo size
        height: 300, // Increased logo size
        marginBottom: 20, // Space between logo and description
    },
    description: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 30,
    },
    buttonContainer: {
        flexDirection: 'row', // Arrange buttons horizontally
        justifyContent: 'space-between', // Add space between buttons
        width: '80%', // Match the width of the buttons
    },
    button: {
        backgroundColor: '#0A4F8A',
        padding: 15,
        borderRadius: 30,
        width: '48%', // Adjust width to fit two buttons in a row
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    /* From Uiverse.io by cssbuttons-io */ 
button {
    align-items: center;
    background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
    border: 0;
    border-radius: 8px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    box-sizing: border-box;
    color: #ffffff;
    display: flex;
    font-size: 18px;
    justify-content: center;
    line-height: 1em;
    max-width: 100%;
    min-width: 140px;
    padding: 3px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  button:active,
  button:hover {
    outline: 0;
  }
  
  button span {
    background-color: rgb(5, 6, 45);
    padding: 16px 24px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;
  }
  
  button:hover span {
    background: none;
  }
  
  button:active {
    transform: scale(0.9);
  }
  
});

export default GetStarted;