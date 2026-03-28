import { GlobalSafeAreaView } from "@/components/globals/global-safe-area-view";
import "@/global.css";
import { Link } from "expo-router";
import { Text } from "react-native";

export default function App() {
  return (
    <GlobalSafeAreaView
      className="p-5 gap-5"
    >
      <Text className="text-5xl font-sans-bold text-success">
        Home
      </Text>
      <Text className="text-5xl font-bold text-success">
        Home
      </Text>

      <Link
        href={"/onboarding"}
        className="rounded bg-primary px-5 py-2.5 text-white"
      >
        Go to onboarding
      </Link>

      <Link
        href={"/subscriptions/spotify"}
        className="rounded bg-primary px-5 py-2.5 text-white"
      >
        Spotify subscription
      </Link>

      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" }
        }}
        className="rounded bg-primary px-5 py-2.5 text-white"
      >
        Claude subscription
      </Link>
    </GlobalSafeAreaView>
  );
}
