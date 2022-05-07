import {ref} from "vue"
import { firestore } from "../firebase/config"


const getCollection = (collection) => {
    const documents = ref([])
    const error = ref(null)

    try{
        const collectionRef = firestore.collection(collection).orderBy('createdAt');

        collectionRef.onSnapshot(snap => {
            documents.value = snap.docs.map(doc => {
               return {...doc.data(),id:doc.id}
            })
        })
    }

    catch(err) {
        error.value = err.message;
        document.value = []
    }

    return {documents, error}
}

export default getCollection