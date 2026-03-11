export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/membership/manage/:path*", "/events/manage/:path*", "/admin/:path*"],
};
