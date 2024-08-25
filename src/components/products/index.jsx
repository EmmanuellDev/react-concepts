import Productitem from "./components/product-items";



function ProductList ({name, city, productsList}) {
    return (
        <div>
            <h3>ECommerce Products List</h3>
            <h4>Name is {name}, he belongs to this city {city}</h4>
            <ul>
                {productsList.map ((item, index) => (
                    <Productitem singleProductName={item} key={index} />
            ))}
            </ul>
            {/* <Productitem /> */}
        </div>
    );
}
export default ProductList;