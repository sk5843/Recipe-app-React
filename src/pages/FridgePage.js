import React, { useContext, useState, useEffect } from "react";
import FridgeAdd from "../components/FridgeAdd";
import FridgeList from "../components/FridgeList";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/Auth";
import { firebase } from "../firebase";

const FridgePage = () => {
  const [ingredients, setIngredients] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const db = firebase.firestore();

  //Get all ingredients from Firestore live and update state as firestore updates
  useEffect(() => {
    db.collection("ingredients")
      .where("userId", "==", currentUser.email)
      .onSnapshot((snapshot) => {
        const newIngredients = snapshot.docs.map((item) => item.data().name);
        setIngredients([...newIngredients]);
      });
  }, []);

  const addIngredient = (ingredient) => {
    db.collection("ingredients")
      .add({
        name: ingredient,
        userId: currentUser.email,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const deleteIngredient = (ingredient) => {
    var toDelete_query = db
      .collection("ingredients")
      .where("name", "==", ingredient);
    toDelete_query.get().then((snapshot) => {
      snapshot.docs.map((doc) => {
        doc.ref.delete();
      });
    });
  };

  return (
    <>
      <Navbar />
      <div className="flexwrapper">
        <div className="add-ingredientswrapper">
          <h1 className="add-heading">Add Ingredients</h1>
          <FridgeAdd addIngredient={addIngredient} />
        </div>
        <FridgeList
          ingredients={[...ingredients]}
          deleteIngredient={deleteIngredient}
        />
      </div>
    </>
  );
};

export default FridgePage;
