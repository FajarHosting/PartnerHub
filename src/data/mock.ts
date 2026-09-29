import {Product,Order,Partner} from '../types';
export const mockProducts:Product[]=[
{id:'PRD-001',name:'AI Workspace Premium',category:'AI',price:12900,stock:'Available',warranty:'7 Days',delivery:'Instant',description:'Premium AI productivity access for partner customers.',icon:'✦'},
{id:'PRD-002',name:'Creative Suite Pro',category:'Editing',price:9900,stock:'Available',warranty:'7 Days',delivery:'Instant',description:'Creative tools for design, video and content workflows.',icon:'◈'},
{id:'PRD-003',name:'Design Studio',category:'Design',price:7900,stock:'Available',warranty:'14 Days',delivery:'Instant',description:'Collaborative design workspace for digital creators.',icon:'◆'},
{id:'PRD-004',name:'Stream Plus',category:'Entertainment',price:18900,stock:'Available',warranty:'7 Days',delivery:'Manual',description:'Entertainment subscription access.',icon:'▶'},
{id:'PRD-005',name:'Music Premium',category:'Entertainment',price:14900,stock:'Available',warranty:'7 Days',delivery:'Instant',description:'Ad-free music and premium listening features.',icon:'♫'},
{id:'PRD-006',name:'Productivity Pro',category:'Productivity',price:10900,stock:'Available',warranty:'30 Days',delivery:'Instant',description:'Tools for notes, planning and team productivity.',icon:'✓'},
{id:'PRD-007',name:'Secure VPN',category:'VPN',price:11900,stock:'Out of stock',warranty:'7 Days',delivery:'Instant',description:'Privacy-focused VPN access.',icon:'⌁'},
{id:'PRD-008',name:'Learning Hub',category:'Education',price:15900,stock:'Available',warranty:'14 Days',delivery:'Manual',description:'Digital learning membership.',icon:'▤'}];
export const mockOrders:Order[]=[
{id:'ORD-10482',product:'AI Workspace Premium',customer:'Customer #8821',amount:12900,status:'Success',created:'Today, 19:42'},
{id:'ORD-10481',product:'Creative Suite Pro',customer:'Customer #8819',amount:9900,status:'Processing',created:'Today, 18:21'},
{id:'ORD-10480',product:'Design Studio',customer:'Customer #8814',amount:7900,status:'Success',created:'Today, 16:09'},
{id:'ORD-10479',product:'Stream Plus',customer:'Customer #8802',amount:18900,status:'Failed',created:'Today, 14:35'},
{id:'ORD-10478',product:'Music Premium',customer:'Customer #8797',amount:14900,status:'Pending',created:'Yesterday, 22:14'}];
export const mockPartners:Partner[]=[
{id:'P-10021',name:'Alpha Digital',email:'ops@alphadigital.example',status:'Active',balance:2485000,products:12,orders:482,lastActive:'2 min ago'},
{id:'P-10020',name:'Nova Reseller',email:'team@novareseller.example',status:'Active',balance:910000,products:8,orders:201,lastActive:'18 min ago'},
{id:'P-10019',name:'Orbit Media',email:'hello@orbitmedia.example',status:'Pending',balance:250000,products:5,orders:42,lastActive:'1 hr ago'},
{id:'P-10018',name:'Pixel Commerce',email:'admin@pixelcommerce.example',status:'Suspended',balance:0,products:18,orders:903,lastActive:'2 days ago'}];
export const chartData=[{name:'Mon',orders:48,revenue:720},{name:'Tue',orders:62,revenue:910},{name:'Wed',orders:54,revenue:820},{name:'Thu',orders:81,revenue:1180},{name:'Fri',orders:76,revenue:1090},{name:'Sat',orders:92,revenue:1360},{name:'Sun',orders:68,revenue:980}];
