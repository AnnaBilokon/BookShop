import React, { useContext } from 'react'
import '../pages/css/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import all_product from '../components/assets/all_product'
import Item from '../components/Item/Item'

function ShopCategory(props) {
  const { all_products } = useContext(ShopContext)
  return (
    <div className="shop_category">
      <img src={props.banner} alt="" />
      <div className="shopcategory_indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory_sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory_products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            )
          } else {
            return null
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory
