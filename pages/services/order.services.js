import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';


const orderCollectionRef = collection(db, "order")
class OrderDataService {
    addOrder = (newMenu) => {
        return addDoc(orderCollectionRef, newMenu);
    }

    updateOrder = (id, updatedMenu) => {
        const orderDoc = doc(db, 'order', id);

        return updateDoc(orderDoc, updatedMenu);
    }

    deleteOrder = (id) => {
        const orderDoc = doc(db, 'order', id)

        return deleteDoc(orderDoc)
    }

    getAllOrders = () => {
        return getDocs(orderCollectionRef);
    }

    getOrderForUser = async (user) => {
        const q = query(collection(db, "order"), where("user", "==", user));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });

        return querySnapshot;
    }

}


export default new OrderDataService();