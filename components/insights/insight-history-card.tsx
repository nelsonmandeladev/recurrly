import { formatCurrency, formatHistoryDateTime } from "@/lib/utils";
import { Image, Text, View } from "react-native";

export function InsightHistoryCard({
    icon,
    name,
    chargedAt,
    price,
    currency,
    billingLabel,
    color,
}: InsightHistoryCardProps) {
    return (
        <View className="insights-history-card mx-2.5" style={color ? { backgroundColor: color } : undefined}>
            <View className="insights-history-main">
                <View className="insights-history-icon-box">
                    <Image source={icon} className="insights-history-icon" resizeMode="contain" />
                </View>

                <View className="insights-history-copy">
                    <Text className="insights-history-title" numberOfLines={1}>
                        {name}
                    </Text>
                    <Text className="insights-history-date" numberOfLines={1}>
                        {formatHistoryDateTime(chargedAt)}
                    </Text>
                </View>
            </View>

            <View className="insights-history-price-box">
                <Text className="insights-history-price">{formatCurrency(price, currency)}</Text>
                <Text className="insights-history-billing">{billingLabel}</Text>
            </View>
        </View>
    );
}
