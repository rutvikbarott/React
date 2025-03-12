import React, { useState, useEffect } from 'react';
import { fireDb } from '../Firebase';
import { Timestamp, addDoc, collection, deleteDoc, doc,QuerySnapshot, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import Mycontext from './Mycontext';

function Mystate(props) {
    const [products, setProducts] = useState({
        name: "",
        price: "",
        model: "",
        color: "",
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });

    const [allitems, setAllItems] = useState([]);
    const [search, setSearch] = useState(""); 

    const addproduct = async () => {
        if (products.name === "" || products.price === "" || products.model === "" || products.color === "") {
            return alert("All fields are required");
        }

        const productRef = collection(fireDb, "items");
        try {
            await addDoc(productRef, products);
            getproducts();
            alert("Product added successfully");
            setTimeout(() => {
                window.location.href = "/";
            }, 800);
            setProducts({
                name: "",
                price: "",
                model: "",
                color: "",
                time: Timestamp.now(),
                date: new Date().toLocaleString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                })
            });
        } catch (error) {
            console.log(error);
        }
    };

    const getproducts = async () => {
        try {
            const q = query(
                collection(fireDb, 'items'),
                orderBy('time')
            );

            const data = onSnapshot(q, (QuerySnapshot) => {
                let ProductArray = [];
                QuerySnapshot.forEach((doc) => {
                    ProductArray.push({ ...doc.data(), id: doc.id });
                });
                setAllItems(ProductArray);
            });

            return () => data();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getproducts();
    }, []);

    const editProducthandle = (item) => {
        setProducts(item);
    };

    const ediproducts = async (items) => {
        try {
            await setDoc(doc(fireDb, 'items', items.id), products);
            getproducts();
            alert("Product updated successfully");
            setTimeout(() => {
                window.location.href = "/";
            }, 800);
            setProducts({
                name: "",
                price: "",
                model: "",
                color: "",
                time: Timestamp.now(),
                date: new Date().toLocaleString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                })
            });
        } catch (error) {
            console.log(error);
        }
    };

    const deleteproducts = async (item) => {
        try {
            await deleteDoc(doc(fireDb, "items", item.id));
            getproducts();
            alert("Product deleted successfully");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Mycontext.Provider value={{
            products, setProducts, addproduct, getproducts, allitems, editProducthandle, ediproducts, deleteproducts, search, setSearch
        }}>
            {props.children}
        </Mycontext.Provider>
    );
}

export default Mystate;
