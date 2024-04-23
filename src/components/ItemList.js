import { useDispatch } from "react-redux";
import { addItem } from "../utils/cardSlice";



const ItemList = ({ items }) => {
    // console.log(items);
    const dispatch = useDispatch();

    const handleAddItem = (item)=> {
        dispatch(addItem(item));
    }
    return (
        <> 
            {items.map((item) =>
                <div key={item?.card?.info?.id} className="p-2 flex justify-between border-b border-sky-300 bg-slate-200">
                    <div className="w-10/12">
                        <span className="text-lg font-medium"> {item?.card?.info?.name}</span> <br />
                        <span className="font-normal"> ₹ {item?.card?.info?.price / 100} /-</span>
                        <p> {item?.card?.info?.description}</p>
                    </div>
                    <div className="w-2/12">
                    {
                       item?.card?.info?.imageId == undefined ?  <h2></h2> : <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item?.card?.info?.imageId}`} className="w-100" />
                    }
                    <button className="bg-sky-500/75 px-2 py-1 block mx-auto rounded-lg" onClick={() => handleAddItem(item)}>Add +</button>
                    </div>
                </div>
            )}
        </>
    );
}
export default ItemList;