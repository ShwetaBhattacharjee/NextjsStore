import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import type { NextRequest, NextFetchEvent } from "next/server";

// Custom Middleware Logic
export function middleware(req: NextRequest, event: NextFetchEvent) {
  // Check for specific User-Agent and allow the request if it matches
  const userAgent = req.headers.get("user-agent");

  console.log("I am here");

  // If the user-agent matches "Google-InspectionTool/1.0", bypass authentication
  if (userAgent && userAgent.includes("Google-InspectionTool/1.0")) {
    console.log("I am returned");
    return NextResponse.next(); // Allow the request to continue without authentication
  }

  console.log("User-Agent does not match, delegating to Clerk authMiddleware.");

  // Use Clerk's authMiddleware for all other requests
  const clerkMiddleware = authMiddleware({
    publicRoutes: ["/:path*"], // Allow these routes to bypass authentication
  });

  return clerkMiddleware(req, event); // Pass the request and event to Clerk's middleware
}

// Config object for Clerk and custom logic
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"], // Define the routes for middleware application
};
