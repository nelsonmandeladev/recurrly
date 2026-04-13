import { icons } from "./icons";

export const tabs: AppTab[] = [
    { name: "index", title: "Home", icon: icons.home },
    { name: "subscriptions", title: "Subscriptions", icon: icons.wallet },
    { name: "insights", title: "Insights", icon: icons.activity },
    { name: "settings", title: "Settings", icon: icons.setting },
];

export const HOME_USER = {
    name: "Adrian | JS Mastery",
};

export const HOME_BALANCE = {
    amount: 2489.48,
    nextRenewalDate: "2026-03-18T09:00:00.000Z",
};

export const UPCOMING_SUBSCRIPTIONS: UpcomingSubscription[] = [
    {
        id: "spotify",
        icon: icons.spotify,
        name: "Spotify",
        price: 5.99,
        currency: "USD",
        daysLeft: 2,
    },
    {
        id: "notion",
        icon: icons.notion,
        name: "Notion",
        price: 12.0,
        currency: "USD",
        daysLeft: 4,
    },
    {
        id: "figma",
        icon: icons.figma,
        name: "Figma",
        price: 15.0,
        currency: "USD",
        daysLeft: 6,
    },
];

export const HOME_SUBSCRIPTIONS: Subscription[] = [
    {
        id: "adobe-creative-cloud",
        icon: icons.adobe,
        name: "Adobe Creative Cloud",
        plan: "Teams Plan",
        category: "Design",
        paymentMethod: "Visa ending in 8530",
        status: "active",
        startDate: "2025-03-20T10:00:00.000Z",
        price: 77.49,
        currency: "USD",
        billing: "Monthly",
        renewalDate: "2026-03-20T10:00:00.000Z",
        color: "#f5c542",
    },
    {
        id: "github-pro",
        icon: icons.github,
        name: "GitHub Pro",
        plan: "Developer",
        category: "Developer Tools",
        paymentMethod: "Mastercard ending in 2408",
        status: "active",
        startDate: "2024-11-24T10:00:00.000Z",
        price: 9.99,
        currency: "USD",
        billing: "Monthly",
        renewalDate: "2026-03-24T10:00:00.000Z",
        color: "#e8def8",
    },
    {
        id: "claude-pro",
        icon: icons.claude,
        name: "Claude Pro",
        plan: "Pro Plan",
        category: "AI Tools",
        paymentMethod: "Amex ending in 1010",
        status: "paused",
        startDate: "2025-06-27T10:00:00.000Z",
        price: 20.0,
        currency: "USD",
        billing: "Monthly",
        renewalDate: "2026-03-27T10:00:00.000Z",
        color: "#b8d4e3",
    },
    {
        id: "canva-pro",
        icon: icons.canva,
        name: "Canva Pro",
        plan: "Yearly Access",
        category: "Design",
        paymentMethod: "Visa ending in 7784",
        status: "cancelled",
        startDate: "2024-04-02T10:00:00.000Z",
        price: 119.99,
        currency: "USD",
        billing: "Yearly",
        renewalDate: "2026-04-02T10:00:00.000Z",
        color: "#b8e8d0",
    },
];

export const INSIGHTS_WEEKLY_SPENDING: InsightChartPoint[] = [
    { label: "Mon", value: 36 },
    { label: "Tue", value: 31 },
    { label: "Wed", value: 23 },
    { label: "Thr", value: 40, highlighted: true },
    { label: "Fri", value: 34 },
    { label: "Sat", value: 21 },
    { label: "Sun", value: 24 },
];

export const INSIGHTS_SUMMARY: InsightSummary = {
    title: "Expenses",
    period: "March 2026",
    amount: -424.63,
    currency: "USD",
    changePercentage: 12,
};

export const INSIGHTS_HISTORY: InsightHistoryItem[] = [
    {
        id: "claude-history",
        icon: icons.claude,
        name: "Claude",
        chargedAt: "2026-06-25T12:00:00",
        price: 9.84,
        currency: "USD",
        billingLabel: "per month",
        color: "#f6d64b",
    },
    {
        id: "canva-history",
        icon: icons.canva,
        name: "Canva",
        chargedAt: "2026-06-30T16:00:00",
        price: 43.89,
        currency: "USD",
        billingLabel: "per month",
        color: "#abd8c8",
    },
    {
        id: "github-history",
        icon: icons.github,
        name: "GitHub",
        chargedAt: "2026-06-29T13:30:00",
        price: 19.99,
        currency: "USD",
        billingLabel: "per month",
        color: "#efe8d3",
    },
];
