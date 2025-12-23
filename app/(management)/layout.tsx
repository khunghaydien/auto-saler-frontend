"use client";

import type { ReactNode } from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DashboardOutlined, AimOutlined, MessageOutlined } from "@ant-design/icons";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";

const { Content } = Layout;

export default function ManagementLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const t = useTranslations();

    const managementMenuItems = [
        {
            key: "/dashboard",
            icon: <DashboardOutlined />,
            label: <Link href="/dashboard">{t("dashboard")}</Link>,
        },
        {
            key: "/bot-training",
            icon: <AimOutlined />,
            label: <Link href="/bot-training">{t("bot_training")}</Link>,
        },
        {
            key: "/message",
            icon: <MessageOutlined />,
            label: <Link href="/message">{t("message")}</Link>,
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="flex justify-between items-center h-16 px-4 py-8">
                <div className="flex items-center gap-2">
                    <span className="font-semibold">AutoSaler Management</span>
                </div>
                <div className="flex items-center gap-2">
                    <LanguageSwitcher />
                    <ThemeToggle />
                </div>
            </div>
            <div className="flex">
                <div className="w-64">
                    <Menu
                        selectedKeys={[pathname]}
                        items={managementMenuItems}
                        className="!border-0 !rounded-lg !p-4 !bg-background"
                    />
                </div>
                <div className="flex-1">
                    <Content>
                        {children}
                    </Content>
                </div>
            </div>
        </div>
    );
}
