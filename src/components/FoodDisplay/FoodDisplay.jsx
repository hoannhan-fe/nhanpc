import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import Fooditem from "../Fooditem/FoodItem";

const FoodDisplay = ({ category }) => { // Thêm dấu ngoặc nhọn để nhận giá trị category từ props
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top cửa hàng linh kiện PC</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          console.log(category, item.category);
          if (category === "All" || category === item.category) {
            return ( // Di chuyển dấu ngoặc nhọn xuống dòng mới và sửa lỗi kỹ thuật
              <Fooditem
                key={index}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );}
          return null; // Thêm một dòng trả về null cho trường hợp không khớp
        })}
      </div>
    </div>
  );
};
export default FoodDisplay;
