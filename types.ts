// types.ts
export interface MenuItem {
    id: number;
    name: string;
    price: number;
    course: 'Starter' | 'Main' | 'Dessert';
  }
  
  export interface NavigationProps {
    navigation: any;
    route?: any;
  }
  