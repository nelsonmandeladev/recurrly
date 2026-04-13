import { icons } from "@/constants/icons";
import { Image, Pressable, Text, View } from "react-native";

interface GlobalScreenHeaderProps {
    title: string;
    onBackPress: () => void;
    onActionPress?: () => void;
}

const NOOP = () => { };

export function GlobalScreenHeader({
    title,
    onBackPress,
    onActionPress = NOOP,
}: GlobalScreenHeaderProps) {
    return (
        <View className="screen-header px-2.5">
            <View className="screen-nav">
                <Pressable onPress={onBackPress} className="screen-nav-action">
                    <Image source={icons.back} className="screen-nav-icon" resizeMode="contain" />
                </Pressable>

                <Text className="screen-title">{title}</Text>

                <Pressable onPress={onActionPress} className="screen-nav-action">
                    <Image source={icons.menu} className="screen-nav-icon" resizeMode="contain" />
                </Pressable>
            </View>
        </View>
    );
}
