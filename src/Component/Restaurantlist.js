import React, { useEffect } from 'react'
import { useState } from 'react'
import Restaurantcards from './Restaurantcards'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  {RestaurantListAction} from "../Actions/restaurantlistActions";
import { useDispatch, useSelector } from 'react-redux';

function Restaurantlist() {
    // to hold the value
    // eslint-disable-next-line no-unused-vars
    const[allRestaurants,setRestaurants]=useState([])
    //function to call api to get restaurant information from
    //restauarant.json
    // const getrestaurants=async()=>{
    //     await fetch('/restaurants.json')
    //     .then((data)=>{
    //         data.json()
    //         .then((result)=>{
    //             // console.log(result);
    //             setRestaurants(result.restaurants)
    //         })
    //         // console.log(data);
    //     })
    // }
    // console.log(allRestaurants);
    const dispatch=useDispatch();
    const  result=useSelector(state=>state.restaurantReducer)
    console.log(result);
    const {restaurantList}=result
useEffect(()=>{
    // getrestaurants()
    dispatch(RestaurantListAction())
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
  return (
    <Row>{
      restaurantList.map(item=>(
                        // <h1>{item.name}</h1>

            <Col sm={12} md={6} lg={4} xl={3}>

            <Restaurantcards restaurant={item}/>
            
    </Col>
        )) 
}
</Row>
  )
}

export default Restaurantlist