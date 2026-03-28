import { GlobalSafeAreaView } from '@/components/globals/global-safe-area-view'
import { Text } from 'react-native'

export default function Settings() {
    return (
        <GlobalSafeAreaView preset='centered'>
            <Text>Settings</Text>
        </GlobalSafeAreaView>
    )
}
