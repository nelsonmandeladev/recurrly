import { GlobalScreenHeader } from '@/components/globals/global-screen-header'
import { GlobalSafeAreaView } from '@/components/globals/global-safe-area-view'
import { GlobalStickyHeader } from '@/components/globals/global-sticky-header'
import { SubscriptionCard } from '@/components/subscriptions/subscription-card'
import { SubscriptionManagementPanel } from '@/components/subscriptions/subscription-management-panel'
import { icons } from '@/constants/icons'
import { spacing } from '@/constants/theme'
import { router } from 'expo-router'
import { useState } from 'react'
import { FlatList, Text, View } from 'react-native'

const SUBSCRIPTIONS_SCREEN_ITEMS: Subscription[] = [
    {
        id: "dropbox-premium",
        icon: icons.dropbox,
        name: "Dropbox",
        plan: "Premium",
        paymentMethod: "****4215",
        price: 16.96,
        currency: "USD",
        billing: "1 month",
    },
    {
        id: "spotify-family",
        icon: icons.spotify,
        name: "Spotify",
        plan: "Family Plan",
        paymentMethod: "****9048",
        price: 76.77,
        currency: "USD",
        billing: "3 months",
    },
    {
        id: "github-copilot",
        icon: icons.github,
        name: "GitHub Copilot",
        category: "Pro Business",
        plan: "Premium",
        paymentMethod: "****8530",
        price: 49.99,
        currency: "USD",
        billing: "1 month",
    },
    {
        id: "adobe-family",
        icon: icons.adobe,
        name: "Adobe",
        plan: "Family Plan",
        paymentMethod: "****1124",
        price: 98.1,
        currency: "USD",
        billing: "2 months",
    },
    {
        id: "figma-premium",
        icon: icons.figma,
        name: "Figma",
        plan: "Premium",
        paymentMethod: "****3156",
        price: 19.23,
        currency: "USD",
        billing: "1 month",
    },
];

const DEFAULT_EXPANDED_SUBSCRIPTION_ID = "github-copilot";

export default function Subscriptions() {
    const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<string | null>(DEFAULT_EXPANDED_SUBSCRIPTION_ID);
    const [headerHeight, setHeaderHeight] = useState(0);

    const handleBackPress = () => {
        if (router.canGoBack()) {
            router.back();
            return;
        }

        router.replace('/');
    };

    return (
        <GlobalSafeAreaView edges={['left', 'right', 'bottom']}>
            <View className='flex-1'>
                <GlobalStickyHeader onHeightChange={setHeaderHeight}>
                    <GlobalScreenHeader title="My Subscriptions" onBackPress={handleBackPress} />
                </GlobalStickyHeader>

                <FlatList
                    data={SUBSCRIPTIONS_SCREEN_ITEMS}
                    renderItem={({ item }) => {
                        const expanded = item.id === expandedSubscriptionId;

                        return (
                            <SubscriptionCard
                                {...item}
                                expanded={expanded}
                                onPress={() => setExpandedSubscriptionId(item.id === expandedSubscriptionId ? null : item.id)}
                                expandedContent={
                                    expanded ? (
                                        <SubscriptionManagementPanel
                                            paymentMethod={item.paymentMethod}
                                            plan={item.plan}
                                            category={item.category}
                                        />
                                    ) : undefined
                                }
                            />
                        );
                    }}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={
                        <Text className='home-empty-state mx-2.5'>
                            No subscriptions found
                        </Text>
                    }
                    ItemSeparatorComponent={() => (<View className='h-5' />)}
                    contentContainerStyle={{ paddingTop: headerHeight, paddingBottom: spacing[30] }}
                />
            </View>
        </GlobalSafeAreaView>
    )
}
