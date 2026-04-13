import { INSIGHTS_WEEKLY_SPENDING } from "@/constants/data";
import { colors } from "@/constants/theme";
import type { barDataItem } from "gifted-charts-core";
import { BarChart } from "react-native-gifted-charts/dist/BarChart";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

function InsightValueBubble({ value }: { value: number }) {
    return (
        <View style={styles.valueBubbleWrap}>
            <View style={styles.valueBubble}>
                <Text style={styles.valueBubbleText}>${value}</Text>
            </View>
            <View style={styles.valueBubbleTail} />
        </View>
    );
}

export function WeeklyInsightsChart() {
    const { width } = useWindowDimensions();
    const chartWidth = Math.max(width - 76, 260);

    const data: barDataItem[] = INSIGHTS_WEEKLY_SPENDING.map((item) => ({
        value: item.value,
        label: item.label,
        frontColor: item.highlighted ? colors.accent : colors.primary,
        barBorderRadius: 999,
        topLabelComponent: item.highlighted
            ? () => <InsightValueBubble value={item.value} />
            : undefined,
    }));

    return (
        <View className="insights-chart-card mx-2.5">
            <BarChart
                data={data}
                width={chartWidth}
                height={240}
                overflowTop={24}
                maxValue={45}
                noOfSections={4}
                yAxisLabelWidth={34}
                yAxisLabelTexts={["0", "5", "25", "35", "45"]}
                xAxisLabelsHeight={24}
                xAxisThickness={0}
                yAxisThickness={0}
                hideAxesAndRules={false}
                rulesType="dashed"
                rulesColor="rgba(8, 17, 38, 0.08)"
                dashWidth={8}
                dashGap={8}
                initialSpacing={12}
                endSpacing={12}
                spacing={22}
                barWidth={24}
                disableScroll
                disablePress
                isAnimated
                animationDuration={700}
                xAxisLabelsVerticalShift={12}
                xAxisLabelTextStyle={styles.xAxisLabel}
                yAxisTextStyle={styles.yAxisLabel}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    valueBubbleWrap: {
        alignItems: "center",
        justifyContent: "center",
    },
    valueBubble: {
        borderRadius: 16,
        backgroundColor: "#ffffff",
        paddingHorizontal: 14,
        paddingVertical: 8,
    },
    valueBubbleText: {
        color: colors.accent,
        fontFamily: "sans-bold",
        fontSize: 18,
    },
    valueBubbleTail: {
        width: 12,
        height: 12,
        marginTop: -6,
        transform: [{ rotate: "45deg" }],
        backgroundColor: "#ffffff",
    },
    xAxisLabel: {
        color: "#3f557d",
        fontFamily: "sans-medium",
        fontSize: 17,
    },
    yAxisLabel: {
        color: "#3f557d",
        fontFamily: "sans-medium",
        fontSize: 17,
    },
});
