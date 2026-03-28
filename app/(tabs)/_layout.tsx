import { tabs } from "@/constants/data";
import { clsx as cn } from 'clsx';
import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors, components } from "@/constants/theme";

export default function TabsRootLayout() {

    const insets = useSafeAreaInsets();
    const { tabBar } = components;

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: Math.max(insets.bottom, tabBar.horizontalInset),
                    height: tabBar.height,
                    marginHorizontal: tabBar.horizontalInset,
                    borderRadius: tabBar.radius,
                    borderTopWidth: 0,
                    elevation: 0,
                    backgroundColor: colors.primary
                },
                tabBarItemStyle: {
                    paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6
                },
                tabBarIconStyle: {
                    width: tabBar.iconFrame,
                    height: tabBar.iconFrame,
                    alignItems: "center"
                }
            }}

        >
            <Tabs.Screen name="subscriptions/[id]" options={{ href: null }} />

            {tabs.map((tab) => (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        title: tab.title,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon
                                icon={tab.icon}
                                focused={focused}
                            />
                        )
                    }}
                />

            ))}
        </Tabs>
    )
}

function TabIcon({ focused, icon }: TabIconProps) {
    return (
        <View className="tabs-icon">
            <View className={cn('tabs-pill', {
                'tabs-active': focused
            })}>
                <Image source={icon} resizeMode="contain" className="tabs-glyph" />
            </View>
        </View>
    )
}