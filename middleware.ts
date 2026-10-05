import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE = "tff_gate";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Always allow the gate page, the gate API, and Next.js internals
  if (
    pathname === "/gate" ||
    pathname.startsWith("/api/gate") ||
    pathname.startsWith("/_next/") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt"
  ) {
    return NextResponse.next();
  }

  if (req.cookies.get(COOKIE)?.value === "1") {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = "/gate";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt).*)"],
};
