import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Check for specific User-Agent and allow the request if it matches
  const userAgent = req.headers.get("user-agent");

  console.log("I am here");

  // If the user-agent matches "Google-InspectionTool/1.0", bypass authentication
  if (userAgent && userAgent.includes("Google-InspectionTool/1.0")) {
    console.log("I am returned");
    return NextResponse.next(); // Allow the request to continue without authentication
  }

  // Perform additional authentication or processing if necessary
  console.log("User-Agent does not match, authentication required.");
  // Here you can add more logic to handle other cases or block the request
  return NextResponse.next();
}


