import React from 'react'
import AddShopForm from '../components/shops/AddShopForm'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { toast } from 'react-hot-toast'

function AddShopPage() {
  async function addNewShop(newShopObj) {
    try {
      const docRef = await addDoc(collection(db, 'shops'), newShopObj)
      console.log('Document written with ID', docRef.id);
     
        toast.success('Shop added')
      }
    catch(error) {
        toast.error('Failed')
        console.log('error ===', error);
      }
  }
  return (
    <div className='container mx-auto'>
        <h1>Welcome to Add Shop Page</h1>
        <AddShopForm onNewShop={addNewShop} />
    </div>
  )
}

export default AddShopPage