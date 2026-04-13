import type { ReactNode } from "react";
import type { ImageSourcePropType } from "react-native";

declare global {
    interface AppTab {
        name: string;
        title: string;
        icon: ImageSourcePropType;
    }

    interface TabIconProps {
        focused: boolean;
        icon: ImageSourcePropType;
    }

    interface Subscription {
        id: string;
        icon: ImageSourcePropType;
        name: string;
        plan?: string;
        category?: string;
        paymentMethod?: string;
        status?: string;
        startDate?: string;
        price: number;
        currency?: string;
        billing: string;
        renewalDate?: string;
        color?: string;
    }

    interface SubscriptionCardProps extends Omit<Subscription, "id"> {
        expanded: boolean;
        onPress: () => void;
        expandedContent?: ReactNode;
        onCancelPress?: () => void;
        isCancelling?: boolean;
    }

    interface UpcomingSubscription {
        id: string;
        icon: ImageSourcePropType;
        name: string;
        price: number;
        currency?: string;
        daysLeft: number;
    }

    interface UpcomingSubscriptionCardProps
        extends Omit<UpcomingSubscription, "id"> { }

    interface InsightChartPoint {
        label: string;
        value: number;
        highlighted?: boolean;
    }

    interface InsightSummary {
        title: string;
        period: string;
        amount: number;
        currency?: string;
        changePercentage: number;
    }

    interface InsightHistoryItem {
        id: string;
        icon: ImageSourcePropType;
        name: string;
        chargedAt: string;
        price: number;
        currency?: string;
        billingLabel: string;
        color?: string;
    }

    interface InsightHistoryCardProps extends Omit<InsightHistoryItem, "id"> { }

    interface ListHeadingProps {
        title: string;
    }
}

export { };
