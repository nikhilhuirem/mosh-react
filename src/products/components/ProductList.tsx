import React, { useEffect, useState } from 'react'

export default function ProductList() {
    const [products, setProducts] = useState<string[]>([]);
    useEffect(() => {
        console.log("Fetching Products");
        setProducts(["Clothing", "Electronics"]);
    }, []);
    
  return (
    <div>
        Product List
    </div>
  )
}
