import { useEffect, useState } from "react"
import productList from '../produtList.json'
import ItemList from "./ItemList"

const ItemListContainer = () =>{
    const [products, setProducts] = useState([])

    useEffect(() => {
        const data = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productList)    
            }, 2000);     
            
        })
        data.then(data => {
            setProducts(data)}
            )
            data.catch(err => {
                console.error(err)
            }
            )
    }, [])

    return(
        <ItemList products={products} />
    )
}

export default ItemListContainer