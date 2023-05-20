import { getUser } from '@/lib/auth'
import Image from 'next/image'

export function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left">
      {/* Em Image, width e height são os tamanhos de carregamento, e não o tamanho de exibição da imagem. Otimização da imagem, redimensiona ela */}
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full"
      />

      <p className="max-w-[140px] text-sm leading-snug">
        {name}
        <a
          href="/api/auth/logout"
          className="hover:text-red-3s00 block text-red-400"
        >
          Quero sair
        </a>
      </p>
    </div>
  )
}
