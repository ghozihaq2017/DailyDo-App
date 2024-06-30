import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const publicPaths = ['/login', '/register'];
  const protectedPaths = ['/projects', '/projects/:path*', '/', '/tasks/:path*'];

  const accessToken = request.cookies.get('accessToken')?.value;

  if (publicPaths.includes(request.nextUrl.pathname)) {
    const response = NextResponse.next();

    if (accessToken) {
      response.headers.set('accessToken', accessToken);
    }
    return response;
  }

  if (protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path.replace(':path*', '')))) {
    if (!accessToken) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/login', '/register', '/projects', '/projects/:path*', '/', '/tasks/:path*']
};
