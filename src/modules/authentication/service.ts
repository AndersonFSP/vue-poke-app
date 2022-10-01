import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
  User,
  createUserWithEmailAndPassword,
  updateProfile
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
  async register({ email, password, name }: IUser) {
    const userCredential = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    )
    await updateProfile(userCredential.user, { displayName: name })
  },
  verifyIfIsLogged(): User | null {
    return firebaseAuth.currentUser
  }
}
