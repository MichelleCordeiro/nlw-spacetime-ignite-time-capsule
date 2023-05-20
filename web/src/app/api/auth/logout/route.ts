import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // depois q o usuário sai da aplicação é redirecionado p a home(/)
  const redirectURL = new URL('/', request.url)

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=; Path=/; max-age=0`,
    },
  })
}
