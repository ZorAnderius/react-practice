const URL_DEFAULT = 'https://dummyjson.com/products';

export const fetchProducts = async() => {
    const data = await fetch(URL_DEFAULT)
                .then(res => res.json())
                .then(data => data);
    
    return data;
}

export const fetchProductById = async id => {
    const data = await fetch(`${URL_DEFAULT}/${id}`)
        .then(res => res.json());
    return data;
}