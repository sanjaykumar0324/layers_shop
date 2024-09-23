export type User ={
 firstName : string,
 lastName : string,
 age:number,
 birthDate:Date,
 email:string,
 bloodGroup :  string,
 image :string,
 phone:string,
 university :string,
 username:string
}
export type Product = {
    name: string;
    price: string;
    brandName: string;
    id: number;
    rating: number;
    desc: string;
    stock: number;
    brandId: number;
    image: string;
    categoryName:string,

};
export type BrandItem ={
    image: string;
    brandName: string;
    brandId:number
  }


export type Cart={
    productName : string,
   quantity : number,
   productId : number,
   price : number,
   image : string



}