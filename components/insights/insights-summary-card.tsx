import { formatSignedCurrency, formatSignedPercentage } from "@/lib/utils";
import { Text, View } from "react-native";

interface InsightsSummaryCardProps {
    summary: InsightSummary;
}

export function InsightsSummaryCard({ summary }: InsightsSummaryCardProps) {
    return (
        <View className="insights-summary-card mx-2.5">
            <View className="min-w-0 flex-1">
                <Text className="insights-summary-title">{summary.title}</Text>
                <Text className="insights-summary-period">{summary.period}</Text>
            </View>

            <View className="ml-4 items-end">
                <Text className="insights-summary-amount">
                    {formatSignedCurrency(summary.amount, summary.currency)}
                </Text>
                <Text className="insights-summary-change">
                    {formatSignedPercentage(summary.changePercentage)}
                </Text>
            </View>
        </View>
    );
}
