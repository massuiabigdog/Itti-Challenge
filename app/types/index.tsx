export interface IMovie { 
    id: string; 
    title: string; 
    image: string; 
    price: number; 
    category: string; 
    rating: { 
        rate: number; 
        count: number; 
    }; 
    description: string;     
}