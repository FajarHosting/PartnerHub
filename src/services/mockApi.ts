// Frontend-only adapter. Replace these functions with the existing backend adapter later.
import {mockOrders,mockPartners,mockProducts} from '../data/mock';
export const mockApi={getProducts:async()=>mockProducts,getOrders:async()=>mockOrders,getPartners:async()=>mockPartners};
