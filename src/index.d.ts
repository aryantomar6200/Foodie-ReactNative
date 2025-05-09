interface menuItems{
    id: number;
    name: string;
    price: string;
    rating: number;
    image: string;
}
interface category {
    items: menuItems[];
}


interface Menu {
    [category: string]: category;
}

interface Restaurants {
    id: number;
    name: string;
    image: string;
    address: string;
    phone: string;
    menu: Menu  
    openHours: string;
}

