// import React, { createContext, useState } from 'react';

// export const ItemsContext = createContext();

// const initialState = [
//     {
//         id: 1,
//         name: 'Nintendo Switch - Versión 1.1',
//         price: 6499,
//         img: '/images/switch.jpg',
//         stock: 15,
//         category: 'Nintendo',
//         featured: true,
//     },
//     {
//         id: 2,
//         name: 'Nintendo Switch - Versión OLED',
//         price: 8691,
//         img: '/images/switcholed.jpg',
//         stock: 12,
//         category: 'Nintendo',
//         featured: false,
//     },
//     {
//         id: 3,
//         name: 'PlayStation 5 - Standard Edition',
//         price: 13999,
//         img: '/images/ps5standard.jpg',
//         stock: 7,
//         category: 'PlayStation',
//         featured: false,
//     },
//     {
//         id: 4,
//         name: 'PlayStation 5 - Digital Edition',
//         price: 11499,
//         img: '/images/ps5digital.jpg',
//         stock: 3,
//         category: 'PlayStation',
//         featured: true,
//     },
//     {
//         id: 5,
//         name: 'Xbox Series S',
//         price: 6899,
//         img: '/images/xboxseriess.jpg',
//         stock: 5,
//         category: 'Xbox',
//         featured: true,
//     },
//     {
//         id: 6,
//         name: 'Xbox Series X',
//         price: 15799,
//         img: '/images/xboxseriesx.jpg',
//         stock: 2,
//         category: 'Xbox',
//         featured: false,
//     },
//     {
//         id: 7,
//         name: 'Pokemon Legend Arceus - Nitendo Switch',
//         price: 1234,
//         img: '/images/arceus.jpg',
//         stock: 30,
//         category: 'Nintendo',
//         featured: false,
//     },
//     {
//         id: 8,
//         name: 'Kirby and the Forgotten Land - Nintendo Switch',
//         price: 1287,
//         img: '/images/kirby.jpg',
//         stock: 15,
//         category: 'Nintendo',
//         featured: false,
//     },
//     {
//         id: 9,
//         name: 'Gran Turismo 7 - PlayStation 5',
//         price: 1499,
//         img: '/images/granturismo.jpg',
//         stock: 22,
//         category: 'PlayStation',
//         featured: false,
//     },
//     {
//         id: 10,
//         name: 'Horizon II - Forbidden West - Play Station 5',
//         price: 1425,
//         img: '/images/horizon.jpg',
//         stock: 12,
//         category: 'PlayStation',
//         featured: false,
//     },
//     {
//         id: 11,
//         name: 'Fifa 21 - Xbox Series S|X',
//         price: 560,
//         img: '/images/fifa.jpg',
//         stock: 28,
//         category: 'Xbox',
//         featured: false,
//     },
//     {
//         id: 12,
//         name: 'Gears 5 - Xbox Series S|X',
//         price: 599,
//         img: '/images/gears.jpg',
//         stock: 16,
//         category: 'Xbox',
//         featured: false,
//     },
// ];

// export const ItemsProvider = ({ children }) => {
//     const [items, setItems] = useState(initialState);

//     return (
//         <ItemsContext.Provider value={[items, setItems]}>
//             {children}
//         </ItemsContext.Provider>
//     );
// };
