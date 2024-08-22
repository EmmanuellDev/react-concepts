import Productitem from "./components/product-items";

const dummyProductData = ["product1", "product2", "product3"];

function ProductList () {
    return (
        <div>
            <h3>ECommerce Products List</h3>
            <ul>
                {dummyProductData.map ((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
            {/* <Productitem /> */}
        </div>
    );
}
export default ProductList;