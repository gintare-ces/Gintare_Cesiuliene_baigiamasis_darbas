import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import SingleShopCard from "../components/shops/SingleShopCard";
import { toast } from "react-hot-toast";
import { useAuthCtx } from "../store/AuthProvider";
import Loading from "../components/ui/loading/Loading";

function ShopPage() {
  const [shopsArr, setShopsArr] = useState([]);

  const { isLoading } = useAuthCtx();

  useEffect(() => {
    async function getShops() {
      try {
        let q = collection(db, "shops");
        const docPromise = getDocs(q);
        const querySnapshot = await docPromise;
        const tempShops = [];
        querySnapshot.forEach((doc) => {
          tempShops.push({
            uid: doc.id,
            ...doc.data(),
          });
          console.log("tempShops ===", tempShops);
          setShopsArr(tempShops);
        });
      } catch (error) {
        toast.error("Failed to load shops");
      }
    }
    getShops();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto ">
      <h1 className="text-white text-3xl font-bold px-4 pt-12 pb-4">
        <i className="fa fa-shopping-bag" aria-hidden="true"></i> Shops
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {shopsArr.map((sObj) => (
          <SingleShopCard item={sObj} key={sObj.uid} />
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
