import { Text, TouchableOpacity, View } from 'react-native';


interface GlobalListHeadingProps {
    title: string;
}
export function GlobalListHeading({ title }: GlobalListHeadingProps) {
    return (
        <View className='list-head mx-2.5'>
            <Text className='list-title'>{title}</Text>
            <TouchableOpacity className='list-action'>
                <Text className='list-action-text'>View all</Text>
            </TouchableOpacity>
        </View>
    )
}