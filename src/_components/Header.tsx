`use client`

import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter()

  return(
    <div>
      <button className="mx-4" type="button" onClick={() => router.push('/')}>
        Home
      </button>
      <button className="mx-4" type="button" onClick={() => router.push('/dashboard')}>
        Dashboard
      </button>
    </div>
  )
}