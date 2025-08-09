import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const dummyUserData = {
        role: "admin",
        email: 'admin@admin.com'
    }
    let isServicesPage = request.nextUrl.pathname.startsWith('/services');
    let isAdmin = dummyUserData.role == "admin"
    if (!isAdmin && isServicesPage) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
}
/* export function middleware(request) {
    return NextResponse.redirect(new URL('/', request.url))
} */

// See "Matching Paths" below to learn more
/* export const config = {
    matcher: '/about/:path*',
} */