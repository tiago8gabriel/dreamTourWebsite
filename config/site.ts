import { SiteConfig } from "@/types/siteConfig";

//ToDO: see this
export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";

export const SOURCE_CODE_URL = "";
export const PRO_VERSION = "https://nexty.dev";

const EMAIL_URL = 'ss@gmail.com'
const GITHUB_URL = 'https://github.com/ss'

export const siteConfig: SiteConfig = {
  name: "Next.js Starter",
  tagLine: 'Multilingual Next.js 16 Starter',
  description:
    "A multilingual Next.js 16 starter with built-in i18n support. Launch your global-ready web application with a clean, efficient, and SEO-friendly foundation.",
  url: BASE_URL,
  authors: [
    {
      name: "ss",
      url: "https://ss.com",
    }
  ],
  creator: '@ss',
  socialLinks: {
    github: GITHUB_URL,
    email: EMAIL_URL
  },
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  defaultNextTheme: 'system', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png", // apple-touch-icon.png
  },
}
