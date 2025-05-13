import { NextResponse } from "next/server";

export function middleware(request) {
  const cookie = request.cookies.get("authToken"); // Check for the authToken in cookies
  const url = new URL(request.url);

  // Log for debugging purposes
  console.log("Current URL:", url.pathname);
  console.log("Auth Token Cookie:", cookie);

  // If user is already authenticated and tries to access the login page, redirect them to /admin
  if (cookie && url.pathname === "/admin/login") {
    return NextResponse.redirect(new URL("/admin", request.url)); // Redirect to /admin if already logged in
  }

  // If user is not authenticated and tries to access any /admin page, redirect to login
  if (
    !cookie &&
    url.pathname.startsWith("/admin") &&
    url.pathname !== "/admin/login"
  ) {
    return NextResponse.redirect(new URL("/admin/login", request.url)); // Redirect to login if not authenticated
  }

  return NextResponse.next(); // Proceed with the request if authenticated and not trying to access login
}

export const config = {
  matcher: ["/admin", "/admin/login", "/admin((?!/login).*)"], // Protect /admin routes and the login route
};
