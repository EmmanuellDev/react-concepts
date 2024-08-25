function ButtonComponent () {
    return (
        <div>
            <button>Click</button>
        </div>
    );
}

function Productitem ({singleProductName, key}) {
    return (
        <div key={key}>
            <p>{singleProductName}</p>
            <ButtonComponent />
        </div>
    );
}

export default Productitem;