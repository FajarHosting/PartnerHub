export type Status='Success'|'Processing'|'Failed'|'Cancelled'|'Pending'|'Approved'|'Rejected'|'Resolved'|'Available'|'Out of stock';
export type Product={id:string;name:string;category:string;price:number;stock:Status;warranty:string;delivery:string;description:string;icon:string};
export type Order={id:string;product:string;customer:string;amount:number;status:Status;created:string};
export type Partner={id:string;name:string;email:string;status:'Active'|'Suspended'|'Pending';balance:number;products:number;orders:number;lastActive:string};
