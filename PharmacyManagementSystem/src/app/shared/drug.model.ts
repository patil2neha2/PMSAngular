export class Drug {
    drugId:number=0;
    drugName:string;
    quantity:number;
    price:number;
    expiryDate:any;
    supplier:Supplier;
    supplierId:number;
}
export class Supplier{
    supplierId:number;
    supplierEmail:string='';
}
