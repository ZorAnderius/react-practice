const Product = ({productName, price = 100, imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder"}) => {
    return <div>
        <h2>{productName}</h2>
        <img src={imgUrl} alt={productName} width="640" />
        <p>Price: {price} credits</p>
        </div>
}

export default Product;