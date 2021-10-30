type Filter ={
    brand: String;
    color: String;
    useFor: String;
}
export interface Product{
    id: any;
    productName: String;
    productDescription: String;
    price: number;
    filter: Filter;
}
