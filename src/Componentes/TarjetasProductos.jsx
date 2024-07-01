import { useState, useEffect, useRef } from 'react';
import Tarjeta from './Tarjeta.jsx';
import axios from 'axios';

export default function TarjetasProductos() {
    const [productos, setProductos] = useState([]);
    const hasFetched = useRef(false);

    useEffect(() => {
        if (!hasFetched.current) {
            const fetchProductos = async () => {
                try {
                    const response = await axios.get('http://127.0.0.1:8000/api/productos');
                    console.log('Productos fetched:', response.data);
                    setProductos(response.data);
                    hasFetched.current = true;
                } catch (error) {
                    console.error('Error fetching products:', error);
                }
            };

            fetchProductos();
        }
    }, []);

    console.log('Rendering TarjetasContainer with productos:', productos);

    return (
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {productos && productos.length > 0 ? (
                productos.map((producto) => (
                    <Tarjeta key={producto.id} producto={producto} />
                ))
            ) : (
                <p>No hay productos disponibles.</p>
            )}
        </div>
    );
}
