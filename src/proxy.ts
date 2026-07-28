import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale } from "./lib/i18n/config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  if (firstSegment && isLocale(firstSegment)) {
    return;
  }

  request.nextUrl.pathname =
    pathname === "/"
      ? `/${defaultLocale}/dashboard`
      : `/${defaultLocale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = { matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"] };
