import { clsx as cn } from "clsx";
import { Pressable, Text, View } from "react-native";

interface SubscriptionManagementPanelProps {
    paymentMethod?: string;
    plan?: string;
    category?: string;
    onManagePress?: () => void;
    onChangePress?: () => void;
    onCancelPress?: () => void;
    isCancelling?: boolean;
}

const NOOP = () => { };

export function SubscriptionManagementPanel({
    paymentMethod,
    plan,
    category,
    onManagePress = NOOP,
    onChangePress = NOOP,
    onCancelPress = NOOP,
    isCancelling = false,
}: SubscriptionManagementPanelProps) {
    const resolvedPlan = plan?.trim() || category?.trim() || "Not provided";

    return (
        <View className="sub-body">
            <View className="sub-details">
                <View className="sub-row">
                    <View className="sub-row-copy">
                        <Text className="sub-label">Payment info:</Text>
                        <Text className="sub-value" numberOfLines={1} ellipsizeMode="tail">
                            {paymentMethod?.trim() || "Not provided"}
                        </Text>
                    </View>

                    <Pressable onPress={onManagePress} className="sub-detail-action">
                        <Text className="sub-detail-action-text">Manage</Text>
                    </Pressable>
                </View>

                <View className="sub-row">
                    <View className="sub-row-copy">
                        <Text className="sub-label">Plan details:</Text>
                        <Text className="sub-value" numberOfLines={1} ellipsizeMode="tail">
                            {resolvedPlan}
                        </Text>
                    </View>

                    <Pressable onPress={onChangePress} className="sub-detail-action">
                        <Text className="sub-detail-action-text">Change</Text>
                    </Pressable>
                </View>
            </View>

            <Pressable
                onPress={onCancelPress}
                disabled={isCancelling}
                className={cn("sub-cancel", {
                    "sub-cancel-disabled": isCancelling,
                })}
            >
                <Text className="sub-cancel-text">
                    {isCancelling ? "Cancelling..." : "Cancel Subscription"}
                </Text>
            </Pressable>
        </View>
    );
}
