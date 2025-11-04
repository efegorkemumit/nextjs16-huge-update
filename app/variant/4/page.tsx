import React from 'react'
import { addProduct } from './action';
import ProductList from './ProductList';

const VariantFourPage = () => {

    async function action(formData: FormData) {
        "use server";
        await addProduct(String(formData.get("name") || ""));
    }
    return (
        <main style={{ padding: 24 }}>
            <h1>Admin — products</h1>
            <ProductList />
            <form action={action} style={{ marginTop: 12 }}>
                <input name="name" placeholder="New product" />
                <button type="submit">Add</button>
            </form>
        </main>
    )
}

export default VariantFourPage