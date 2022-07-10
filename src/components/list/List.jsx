import { useState } from 'react';
import './list.css';

const List = ({data}) => {
   
const [items, setItems] = useState(0);
    // const [cart, setCart] = React.useState({});
    const itemList = data.map((prod, index) => {
        let n = index + 1049;
        let uhit = "https://picsum.photos/" + n;
            const addToCart = (e) => {
                    if (prod.instock === 0) return;
                    prod.instock = prod.instock - 1;
                    console.log(`add to Cart ${JSON.stringify(prod)}... 
                    prod instock ${JSON.stringify(prod.instock)}`);
                    setItems(prod.instock);

                };

        return (
            <div >
                <h5><img src={uhit} width={70} className="imageCircle"></img> {prod.name} ${prod.cost} <button onClick={addToCart}>Add To Cart</button></h5>
                    <p className="itemDetails">
                        Country: {prod.country} - Stock: {prod.instock} 
                    </p> 
            </div>
            
        )
    })

    return (
        <div className="listStyle">
        <h1>Items</h1>
            <ul key={itemList.id}>
                {itemList}
            </ul>
        </div>
    )

}


export default List;