import React, { useEffect } from 'react'
import "./productSummary.scss"
import { AiFillDollarCircle } from "react-icons/ai";
import { BsCart4, BsCartX } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import InfoBox from '../../infoBox/InfoBox';
import { useDispatch, useSelector } from 'react-redux';
import {CALC_CATEGORY, CALC_OUTOFSTOCK, CAL_STORE_VALUE, selectCategory, 
  selectOutOfStock,
   selectTotalStoreValue} from "../../../redux/features/product/productSlice"




const earningIcon = <AiFillDollarCircle size={40} color="#fff"/>
const productIcon = <BsCart4 size={40} color="#fff"/>
const categoryIcon = <BsCartX size={40} color="#fff"/>
const outOfStockIcon = <BiCategory size={40} color="#fff"/>

// Format Amount
export const formatNumbers = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g , ",");
};

export default function ProductSummary({products}) {
  const dispatch = useDispatch();
  const totalStoreValue = useSelector(selectTotalStoreValue)
  const outOfStock = useSelector(selectOutOfStock)
  const totalCategory = useSelector(selectCategory)

useEffect(() => {
  dispatch(CAL_STORE_VALUE(products))
  dispatch(CALC_OUTOFSTOCK(products))
  dispatch(CALC_CATEGORY(products))
}, [dispatch, products]);


  return (
    <div className='product-summary'>
      <h3 className='--mt'>Inventory Stacks</h3>
      <div className="info-summary">
        <InfoBox icon={productIcon} title={"Total Products"} count={products.length} bgColor="card1" />
        <InfoBox icon={earningIcon} title={"Total Store Value"} count={`$${formatNumbers(totalStoreValue)}`} bgColor="card2" />
        <InfoBox icon={outOfStockIcon} title={"Out Stock"} count={outOfStock} bgColor="card3" />
        <InfoBox icon={categoryIcon} title={"All Category"} count={totalCategory.length} bgColor="card4" />
      </div>
      </div>
  )
}
