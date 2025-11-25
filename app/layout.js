import StoreProvider from "@/store/StoreProvider";
import "./globals.css";
import AppThemeProvider from "@/theme/theme-provider";
import DesktopHeader from "@/components/layout/DesktopHeader";
import MobileHeader from "@/components/layout/MobileHeader";
import Footer from "@/components/layout/Footer";
import { Box } from "@mui/material";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import DialogsProvider from "@/hooks/useDialogs/DialogsProvider";
import NotificationsProvider from "@/hooks/useNotifications/NotificationsProvider";

async function getDefaultSeo() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/settings/seo`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) throw new Error("Failed to fetch SEO");
    const { data } = await res.json();

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    return {
      title: data.title || "امریان واچ",
      description: data.description || "فروشگاه اینترنتی امیران واچ",
      keywords: data.keywords || "",
      robots: data.robots || "noindex, nofollow",
      canonical: data.canonical || baseUrl,
      additionalMetaTags: data.additionalMetaTags || "",
      openGraph: {
        title: data.ogTitle || data.title,
        description: data.ogDescription || data.description,
        url: data.canonical || baseUrl,
        images: data.ogImage ? [`${baseUrl}${data.ogImage.path}`] : [],
        siteName: "Your Site Name",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: data.twitterTitle || data.title,
        description: data.twitterDescription || data.description,
        images: data.twitterImage
          ? [`${baseUrl}${data.twitterImage.path}`]
          : [],
      },
    };
  } catch (err) {
    console.error("SEO fetch error:", err);
    return {
      title: "Default Title",
      description: "Default description",
      keywords: "",
      robots: "index, follow",
      canonical: process.env.NEXT_PUBLIC_BASE_URL,
      additionalMetaTags: "",
      openGraph: {
        title: "Default Title",
        description: "Default description",
        url: process.env.NEXT_PUBLIC_BASE_URL,
        images: [],
        siteName: "Your Site Name",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Default Title",
        description: "Default description",
        images: [],
      },
    };
  }
}

export async function generateMetadata() {
  return await getDefaultSeo();
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <StoreProvider>
          <AppThemeProvider>
            <NotificationsProvider>
              <DialogsProvider>
                <DesktopHeader />
                <MobileHeader />

                <Box component="main">{children}</Box>
                <Footer />
                <MobileBottomNav />
              </DialogsProvider>
            </NotificationsProvider>
          </AppThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
