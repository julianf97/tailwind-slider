import { useEffect, useState } from "react";
import '../ItemListContainer/itemListContainer.scss';
import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { categoryId } = useParams()

    console.log(categoryId);

    useEffect(() => {

        setLoading(true)

        pedirDatos()
        .then( (response) => {

            if(!categoryId){
                setProductos(response)
            } else{
                setProductos( response.filter((prod) => prod.category === categoryId) )
            }


            setLoading(false)
        })
        .catch( (error) => {
            
            console.log(error)

        })
        .finally( () => {
            setLoading(false)
        })

    }, [categoryId])


    return (
        <div className="contenedor">
            {
                loading
                ? <h2>Cargando...</h2>
                : <ItemList items={productos}/>
            }
        </div>
    )
};

