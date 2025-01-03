import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export async function middleware(request: NextRequest) {
  const token = request.cookies.get("focusify-token")?.value;
  const url = request.nextUrl.clone();

  const publicRoutes = [
    "/auth/login", "/auth/signup",
    "/forgot-password",
  ];
  const protectedRoutes = [
    "/admin-feed",
    "/feedback",
    "/goals",
    "/home",
    "/pomodoro",
    "/profile",
    "/settings",
  ];

  // Verifica se a rota atual está entre as públicas
  const isPublicRoute = publicRoutes.includes(url.pathname);

  // Verifica se a rota atual está entre as protegidas
  const isProtectedRoute = protectedRoutes.includes(url.pathname);

  // Redireciona usuário com token para rota protegida padrão caso acesse rota pública
  if (token && isPublicRoute) {
    url.pathname = "/home"; // Redirecionar para a página inicial do sistema
    return NextResponse.redirect(url);
  }

  // Redireciona usuário sem token para /auth/sign-in ao acessar rotas protegidas
  if (!token && isProtectedRoute) {
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }

  // Redireciona usuário para página 404 caso a rota seja inexistentem
  // if (!isPublicRoute && !isProtectedRoute) {
  //   url.pathname = "/404";
  //   return NextResponse.redirect(url);
  // }

  return NextResponse.next();
}

// Configuração do matcher para definir as rotas onde o middleware será aplicado
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};