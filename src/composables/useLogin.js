import { ref } from "vue"
import { auth } from "../firebase/config"


const error = ref(null)

const login = async (email,password) => {
    try {
        const response = await auth.signInWithEmailAndPassword(email,password);

        console.log(response)

        error.value = null
    }
    catch (err) {
        error.value = err.message
    }
}

const useLogin = () => {
    return { login, error }
}

export default useLogin