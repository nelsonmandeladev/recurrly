import { GlobalListHeading } from "@/components/globals/global-list-heading";
import { GlobalSafeAreaView } from "@/components/globals/global-safe-area-view";
import { GlobalStickyHeader } from "@/components/globals/global-sticky-header";
import { SubscriptionCard } from "@/components/subscriptions/subscription-card";
import { UpComingSubscriptionCard } from "@/components/subscriptions/upcoming-subscription-card";
import { HOME_BALANCE, HOME_SUBSCRIPTIONS, HOME_USER, UPCOMING_SUBSCRIPTIONS } from "@/constants/data";
import { icons } from "@/constants/icons";
import { spacing } from "@/constants/theme";
import images from "@/constants/images";
import "@/global.css";
import { formatCurrency } from "@/lib/utils";
import dayjs from "dayjs";
import { Fragment, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function App() {

  const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<string | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <GlobalSafeAreaView
      edges={['left', 'right', 'bottom']}
    >
      <View className="flex-1">
        <GlobalStickyHeader onHeightChange={setHeaderHeight}>
          <View className="home-header px-2.5">
            <View className="home-user">
              <Image source={images.avatar} className="home-avatar" />
              <Text className="home-user-name">{HOME_USER.name}</Text>
            </View>
            <View
              className="size-12 border border-border rounded-full flex items-center justify-center"
            >
              <Image source={icons.add} className="home-add-icon" />
            </View>
          </View>
        </GlobalStickyHeader>

        <FlatList
          ListHeaderComponent={() => (
            <Fragment>
              <View
                className="home-balance-card mx-2.5"
              >
                <Text className="home-balance-label">Balance</Text>
                <View
                  className="home-balance-row"
                >
                  <Text className="home-balance-amount">{formatCurrency(HOME_BALANCE.amount)}</Text>
                  <Text className="home-balance-date">{dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}</Text>
                </View>
              </View>

              <View>
                <GlobalListHeading title="Upcoming" />
                <FlatList
                  data={UPCOMING_SUBSCRIPTIONS}
                  renderItem={({ item }) => <UpComingSubscriptionCard {...item} />}
                  keyExtractor={(item) => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ListEmptyComponent={
                    <Text>
                      No upcoming subscriptions
                    </Text>
                  }
                  contentContainerClassName="mx-2.5"
                />
              </View>
              <GlobalListHeading title="All subscriptions" />
            </Fragment>
          )}
          data={HOME_SUBSCRIPTIONS}
          renderItem={({ item }) =>
            <SubscriptionCard
              {...item}
              expanded={item.id === expandedSubscriptionId}
              onPress={() => setExpandedSubscriptionId(item.id === expandedSubscriptionId ? null : item.id)}
            />
          }
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text>
              No  subscriptions
            </Text>
          }
          ItemSeparatorComponent={() => (<View className="h-4" />)}
          contentContainerStyle={{ paddingTop: headerHeight, paddingBottom: spacing[30] }}
        />
      </View>
    </GlobalSafeAreaView>
  );
}
