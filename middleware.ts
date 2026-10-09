import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Extract user info from session cookie (in a real app, verify a JWT)
  const sessionCookie = request.cookies.get('session');
  
  const isDashboardRoute = request.nextUrl.pathname.startsWith('/dashboard');
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');
  
  if (isDashboardRoute || isAdminRoute) {
    if (!sessionCookie) {
      // Not logged in
      return NextResponse.redirect(new URL('/login', request.url));
    }
    
    try {
      const sessionData = JSON.parse(sessionCookie.value);
      
      // Admin routes strict protection
      if (isAdminRoute) {
        if (sessionData.role !== 'admin' && sessionData.role !== 'superadmin') {
          // If a regular user tries to access /admin, kick them to /dashboard
          return NextResponse.redirect(new URL('/dashboard', request.url));
        }
      }
      
      // Allow access
      return NextResponse.next();
    } catch (e) {
      // Invalid session format
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/admin/:path*',
    '/dashboard/:path*',
  ],
};
