// middleware.js or middleware.ts
import { NextResponse } from 'next/server'


export function middleware(request) {
  const token = request.cookies.get('token')?.value
  const { pathname } = request.nextUrl

  // Only protect /profile path
  if (pathname.startsWith('/profile')) {
    if (!token) {
      // Redirect to login if token not found
      const loginUrl = new URL('/', request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  // Allow the request to continue
  return NextResponse.next()
}

// Specify which paths the middleware applies to
export const config = {
  matcher: ['/profile/:path*'], // protect /profile and its subpaths
}
