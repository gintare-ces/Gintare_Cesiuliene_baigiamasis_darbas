import { collection, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebase'
import SingleShopCard from '../components/shops/SingleShopCard'
import { toast } from 'react-hot-toast'

function ShopPage() {
  const [shopsArr, setShopsArr] = useState([])

  useEffect(() => {
    async function getShops() {
      try {
        let q = collection(db, 'shops')
        const docPromise = getDocs(q)
        const querySnapshot = await docPromise
        const tempShops = []
        querySnapshot.forEach((doc) => {
          tempShops.push({
            uid: doc.id,
            ...doc.data(),
          })
          console.log('tempShops ===', tempShops);
          setShopsArr(tempShops)
        })
      } catch (error) {
        toast.error('Failed to load shops')
      }
    }
    getShops()
  }, [])

  return (
    <div className='container mx-auto'>
        <h1>Welcome to Shop Page</h1>
          <ul>
            {shopsArr.map((sObj) => (
              <li key={sObj.uid}>
                <SingleShopCard item={sObj} />
              </li>
            ))}
          </ul>
    </div>
  )
}

export default ShopPage