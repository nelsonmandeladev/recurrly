import { colors, spacing } from "@/constants/theme";
import { clsx } from "clsx";
import { styled } from "nativewind";
import { type ComponentRef, forwardRef } from "react";
import {
  type Edge,
  SafeAreaView as RNSafeAreaView,
  type SafeAreaViewProps,
} from "react-native-safe-area-context";

const StyledSafeAreaView = styled(RNSafeAreaView);

const safeAreaPresets = {
  screen: "flex-1",
  centered: "flex-1 items-center justify-center",
  content: "flex-1",
} as const;

const insetPresets = {
  all: ["top", "right", "bottom", "left"],
  horizontal: ["left", "right"],
  top: ["top", "left", "right"],
  bottom: ["bottom", "left", "right"],
  vertical: ["top", "bottom"],
  none: [],
} as const satisfies Record<string, readonly Edge[]>;

type GlobalSafeAreaPreset = keyof typeof safeAreaPresets;
type GlobalSafeAreaSurface = keyof typeof colors | "transparent";
type GlobalSafeAreaInsetPreset = keyof typeof insetPresets;
type GlobalSafeAreaPadding = boolean | keyof typeof spacing;

export type GlobalSafeAreaViewProps = SafeAreaViewProps & {
  preset?: GlobalSafeAreaPreset;
  surface?: GlobalSafeAreaSurface;
  insetPreset?: GlobalSafeAreaInsetPreset;
  paddingX?: GlobalSafeAreaPadding;
};


export const GlobalSafeAreaView = forwardRef<
  ComponentRef<typeof RNSafeAreaView>,
  GlobalSafeAreaViewProps
>(function GlobalSafeAreaView(
  {
    children,
    className,
    preset = "screen",
    surface = "background",
    insetPreset = "all",
    paddingX,
    edges,
    mode = "padding",
    style,
    ...props
  },
  ref
) {
  const resolvedEdges = edges ?? insetPresets[insetPreset];


  return (
    <StyledSafeAreaView
      ref={ref}
      mode={mode}
      edges={resolvedEdges}
      className={clsx(safeAreaPresets[preset], className)}
      style={{
        backgroundColor: colors.background,
      }}
      {...props}
    >
      {children}
    </StyledSafeAreaView>
  );
});
