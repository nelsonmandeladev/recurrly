import { formatCurrency } from '@/lib/utils'
import { Image, Text, View } from 'react-native'

export function UpComingSubscriptionCard({ daysLeft, icon, name, price, currency }: UpcomingSubscriptionCardProps) {
    return (
        <View className='upcoming-card'>
            <View
                className='upcoming-row'
            >
                <Image source={icon} className='upcoming-icon' />
                <View>
                    <Text className='upcoming-price' numberOfLines={1}>{formatCurrency(price, currency)}</Text>
                    <Text className='upcoming-meta' numberOfLines={1}>
                        {daysLeft > 0 ? `${daysLeft} days left` : 'Last day'}
                    </Text>
                </View>
            </View>
            <Text className='upcoming-name' numberOfLines={1}>{name}</Text>
        </View>
    )
}