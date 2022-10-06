import { useRouter } from 'next/router'
import user_service from '../../services/user_service'

export default function GovoPage() {
  const router = useRouter()

  return (
    <div>
      <button onClick={() => user_service.setClaim('Пидор конченный')}>ЖМАКНИ МЕНЯ</button>
      <button onClick={() => router.push('/govno')}>GO TO GOVNO</button>
    </div>
  )
}
