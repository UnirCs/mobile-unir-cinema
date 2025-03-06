import React from 'react';
import {Pressable, Text} from "react-native";

const CinemaButton = ({color="bg-unirButtonBg", onPress, onLongPress, children}) => {

    return (
        <Pressable
            className={`p-3 rounded-md mb-2 ${color} active:opacity-90`}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text className="text-white text-center font-rasa-light text-xl">
                {children}
            </Text>
        </Pressable>
    );
}

export default CinemaButton;