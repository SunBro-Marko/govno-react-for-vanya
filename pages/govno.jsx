import { Button } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import user_service from '../services/user_service'

function GovoPage() {
  const router = useRouter()

  return (
    <>
      <div>{user_service.claim}</div>
      <Button variant="contained" onClick={() => user_service.setClaim('Пидор конченный')}>
        ЖМАКНИ МЕНЯ
      </Button>
      <Button variant="contained" onClick={() => router.push('/users')}>
        GO TO USERS
      </Button>
    </>
  )
}

export default observer(GovoPage)
