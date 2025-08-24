import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSessionAndProfile } from "@/src/lib/auth";

const PROTECTED: Record<string, Array<"ADMIN"|"HR"|"EMPLOYEE">> = {
  "/admin": ["ADMIN"],
  "/hr": ["HR","ADMIN"],
  "/employee": ["EMPLOYEE","HR","ADMIN"],
};

export async function middleware(req: NextRequest) {
  const url = new URL(req.url);
  const path = url.pathname;

  // Protect top-level sections
  for (const base in PROTECTED) {
    if (path.startsWith(base)) {
      const { profile } = await getSessionAndProfile(req);
      if (!profile) return NextResponse.redirect(new URL("/(auth)/login", url));
      const allowed = PROTECTED[base].includes(profile.role as any);
      if (!allowed) return NextResponse.redirect(new URL("/(auth)/login?unauthorized=1", url));
      break;
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/hr/:path*", "/employee/:path*"],
};
