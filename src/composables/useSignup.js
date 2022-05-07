import { ref } from "vue"
import { auth } from "../firebase/config.js"

const error = ref(null)

const signup = async (name, email, password) => {
    try {
        const response = await auth.createUserWithEmailAndPassword(email, password);

        response.user.updateProfile({displayName: name})
    }
    catch (err) {
        error.value = err.message
    }
}

const useSignup = () => {
    return { signup, error }
}

export default useSignup