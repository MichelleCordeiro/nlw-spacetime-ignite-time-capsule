import { NextRequest, NextResponse } from 'next/server'

const sighInURL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

export function middleware(request: NextRequest) {
  // console.log('middleware funcionando')

  const token = request.cookies.get('token')?.value
  // console.log(request.url)

  if (!token) {
    return NextResponse.redirect(sighInURL, {
      headers: {
        'Set-Cookie': `redirectTo=${request.url}; Path=/; HttpOnly; max-age=$15`,
        // HttpOnly tira a visibilidade do cookie no DevTools, o cookie não ficará disponível na parte do JS q tá rodando no browser, só ficará disponivel na camada backend da aplicação
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  // no matcher informamos quais endereços da aplicação queremos disparar o middleware
  // em quais endereços da aplicação eu quero obrigar q p o usuário acessar ele precisa estar logado
  matcher: '/memories/:path*',
}
