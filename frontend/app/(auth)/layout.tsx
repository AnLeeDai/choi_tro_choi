"use client";

import { Card } from "@nextui-org/card";
import { Tabs, Tab } from "@nextui-org/tabs";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { Spacer } from "@nextui-org/spacer";
import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";

interface AuthLayoutProps {
  readonly children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const pathName = usePathname();

  const dataListTabs = [
    {
      href: siteConfig.appRoute.login,
      title: "Đăng nhập",
    },

    {
      href: siteConfig.appRoute.register,
      title: "Đăng ký",
    },
  ];

  const generateTab = (href: string, title: string) => {
    return <Tab key={href} title={title} href={href} as={NextLink} />;
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <Card className="w-[35%]">
        <div className="px-8 pt-6 pb-5">
          <p className="text-2xl font-semibold">
            {pathName === siteConfig.appRoute.login ? "Đăng nhập" : "Đăng ký"}
          </p>

          <Spacer y={7} />

          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={pathName}
          >
            {dataListTabs.map((tab) => generateTab(tab.href, tab.title))}
          </Tabs>

          <div className="mt-5">{children}</div>
        </div>

        <div className="flex justify-center items-center gap-1 pb-3">
          <Link isBlock as={NextLink} href={siteConfig.appRoute.home}>
            Quay lại trang chủ
          </Link>
        </div>
      </Card>
    </div>
  );
}
