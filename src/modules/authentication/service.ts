import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
  User,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { firebaseAuth } from '@/firebase'
import { IUser } from './store/types'

export default {
  loginWithGoogle(): Promise<UserCredential> {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(firebaseAuth, provider)
  },
  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(firebaseAuth, email, password)
  },
  register({ email, password }: IUser) {
    return createUserWithEmailAndPassword(firebaseAuth, email, password)
  },
  verifyIfIsLogged(): User | null {
    return firebaseAuth.currentUser
  }
}
