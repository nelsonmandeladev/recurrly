import { GlobalListHeading } from '@/components/globals/global-list-heading'
import { GlobalScreenHeader } from '@/components/globals/global-screen-header'
import { GlobalSafeAreaView } from '@/components/globals/global-safe-area-view'
import { GlobalStickyHeader } from '@/components/globals/global-sticky-header'
import { InsightHistoryCard } from '@/components/insights/insight-history-card'
import { InsightsSummaryCard } from '@/components/insights/insights-summary-card'
import { WeeklyInsightsChart } from '@/components/insights/weekly-insights-chart'
import { INSIGHTS_HISTORY, INSIGHTS_SUMMARY } from '@/constants/data'
import { spacing } from '@/constants/theme'
import { router } from 'expo-router'
import { useState } from 'react'
import { FlatList, View } from 'react-native'

export default function Insights() {
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
                    <GlobalScreenHeader title="Monthly Insights" onBackPress={handleBackPress} />
                </GlobalStickyHeader>

                <FlatList
                    data={INSIGHTS_HISTORY}
                    renderItem={({ item }) => <InsightHistoryCard {...item} />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <View>
                            <GlobalListHeading title="Upcoming" />
                            <WeeklyInsightsChart />
                            <InsightsSummaryCard summary={INSIGHTS_SUMMARY} />
                            <GlobalListHeading title="History" />
                        </View>
                    }
                    ItemSeparatorComponent={() => <View className='h-5' />}
                    contentContainerStyle={{ paddingTop: headerHeight, paddingBottom: spacing[30] }}
                />
            </View>
        </GlobalSafeAreaView>
    )
}
