import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cardSlice";

const Cart = () => {
  const cardItem = useSelector((store) => store.card.items);

  const dispatch = useDispatch();
  const removeCart = ()=>{
    dispatch(clearItem())
  }
  return (
    <>
      <div className="w-6/12 mx-auto text-center mb-3">
        <button className="bg-sky-500/75 px-2 py-1 block mx-auto rounded-lg" onClick={removeCart}>
          Clear Cart
        </button>
        {cardItem.length == 0 ? (
          <div> no data found. </div>
        ) : (
          <ItemList items={cardItem} />
        )}
      </div>
    </>
  );
};
export default Cart;
