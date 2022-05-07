import { firestore } from "../firebase/config";
import { ref } from "vue"

const useCoolection = () => {
    const addDoc = async (doc, collectionName) => {
        const error = ref(null);

        try {
            await firestore.collection(collectionName).add(doc)
            error.value = null
        }
        catch (err) {
            error.value = err.message
        }
        return {error}
    }

    return { addDoc }
}

export default useCoolection