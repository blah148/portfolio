import { NextResponse } from "next/server";

const OLD_HOSTS = new Set(["blah148.com", "www.blah148.com"]);
const NEW_HOST = "blahnok.com";

export function middleware(req) {
  const host = (req.headers.get("host") || "").toLowerCase();

  if (!OLD_HOSTS.has(host)) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.host = NEW_HOST;
  url.protocol = "https:";

  // Permanent redirect, keeps path + query
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
