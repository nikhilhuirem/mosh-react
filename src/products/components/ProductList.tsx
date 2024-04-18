import React, { useEffect, useState } from 'react'

export default function ProductList({ category }: { category: string}) {
    const [products, setProducts] = useState<string[]>([]);
    useEffect(() => {
        console.log("Fetching Products", category);
        setProducts(["Clothing", "Electronics"]);
    }, [category]);

  return (
    <div>
        Product List
    </div>
  )
}
