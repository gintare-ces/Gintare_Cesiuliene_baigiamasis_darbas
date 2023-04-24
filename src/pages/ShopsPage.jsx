import { collection, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebase'
import SingleShopCard from '../components/shops/SingleShopCard'
import { toast } from 'react-hot-toast'
import { useAuthCtx } from '../store/AuthProvider'
import Loading from '../components/ui/loading/Loading'

function ShopPage() {
  const [shopsArr, setShopsArr] = useState([])

  const { isLoading } = useAuthCtx()

  
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
  
  if (isLoading) {
    return <Loading />
  }
  return (
    <div className='container mx-auto '>
        <h1>Welcome to Shop Page</h1>
        
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {shopsArr.map((sObj) => (
                <SingleShopCard 
                  item={sObj} 
                  key={sObj.uid}
                  />
            
            ))}
          </div>
    </div>
  )
}

export default ShopPage