import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  console.log(pathname)
  const isFile = /\.[a-z0-9]+$/i.test(pathname);

 // console.log(isFile)

  if (isFile || pathname === "/home") {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/home", req.url));
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
