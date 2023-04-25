import React from "react";
import AddShopForm from "../components/shops/AddShopForm";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { toast } from "react-hot-toast";
import { useAuthCtx } from "../store/AuthProvider";
import Loading from "../components/ui/loading/Loading";
import { Navigate } from "react-router-dom";

function AddShopPage() {
  const { isLoading, shopAdded } = useAuthCtx();
  async function addNewShop(newShopObj) {
    try {
      const docRef = await addDoc(collection(db, "shops"), newShopObj);
      console.log("Document written with ID", docRef.id);

      toast.success("Shop added");
    } catch (error) {
      toast.error("Failed");
      console.log("error ===", error);
    }
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto">
      {shopAdded && <Navigate to={'/shops'} />}
      <AddShopForm onNewShop={addNewShop} />
    </div>
  );
}

export default AddShopPage;
