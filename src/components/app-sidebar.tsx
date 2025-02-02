import { SearchForm } from "@/components/search-form";
import { VersionSwitcher } from "@/components/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";

// This is sample data.
const data = {
  versions: [
    "江川本店",
    "城栄店",
    "本原店",
    "大浦店",
    "新大工町ファンスクエア店",
    "住吉店",
    "宝町店",
    "時津店",
    "山里店",
  ],
  navMain: [
    {
      title: "店舗情報",
      url: "#",
      items: [
        {
          title: "店舗概要",
          url: "/dashboard",
        },
      ],
    },
    {
      title: "ランキング",
      url: "#",
      items: [
        {
          title: "商品ランキング",
          url: "#",
        },
      ],
    },
    {
      title: "POSデータ分析",
      url: "#",
      items: [
        {
          title: "ABC分析",
          url: "/dashboard/analysis/abc",
        },
        {
          title: "RFM分析",
          url: "/dashboard/analysis/rfm",
        },
        {
          title: "売上分析",
          url: "#",
        },
        {
          title: "在庫分析",
          url: "#",
        },
        {
          title: "顧客分析",
          url: "#",
        },
        {
          title: "商品分析",
          url: "#",
        },
      ],
    },
    {
      title: "傾向分析",
      url: "#",
      items: [
        {
          title: "売上予測",
          url: "#",
        },
        {
          title: "在庫予測",
          url: "#",
        },
        {
          title: "顧客予測",
          url: "#",
        },
        {
          title: "商品予測",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
