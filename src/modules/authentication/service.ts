import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
  User
} from 'firebase/auth'
import { firebaseAuth } from '@/firebase'

export default {
  loginWithGoogle(): Promise<UserCredential> {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(firebaseAuth, provider)
  },
  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(firebaseAuth, email, password)
  },
  verifyIfIsLogged(): User | null {
    return firebaseAuth.currentUser
  }
}
