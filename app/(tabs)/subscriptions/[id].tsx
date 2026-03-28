import { GlobalSafeAreaView } from '@/components/globals/global-safe-area-view';
import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

export default function SubscriptionDetail() {
    const { id } = useLocalSearchParams<{ id: string }>();
    return (
        <GlobalSafeAreaView preset='centered'>
            <Text>Subscription Detail: {id}</Text>
        </GlobalSafeAreaView>
    )
}
