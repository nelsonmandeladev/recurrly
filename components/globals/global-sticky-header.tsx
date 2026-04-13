import { clsx } from "clsx";
import { BlurView } from "expo-blur";
import { type ReactNode } from "react";
import { type LayoutChangeEvent, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface GlobalStickyHeaderProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  intensity?: number;
  onHeightChange?: (height: number) => void;
}

export function GlobalStickyHeader({
  children,
  className,
  contentClassName = "pt-0",
  intensity = 70,
  onHeightChange,
}: GlobalStickyHeaderProps) {
  const insets = useSafeAreaInsets();

  const handleLayout = (event: LayoutChangeEvent) => {
    onHeightChange?.(event.nativeEvent.layout.height);
  };

  return (
    <View
      onLayout={handleLayout}
      className={clsx("absolute inset-x-0 top-0 z-50 overflow-hidden", className)}
      style={{ paddingTop: insets.top }}
    >
      <BlurView
        pointerEvents="none"
        tint="extraLight"
        intensity={intensity}
        experimentalBlurMethod="dimezisBlurView"
        style={StyleSheet.absoluteFill}
      />
      <View
        pointerEvents="none"
        className="absolute inset-0 bg-background/5"
      />
      <View className={contentClassName}>{children}</View>
    </View>
  );
}
