import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Restoperation from './Restoperation';
import Restreview from './Restreview';
function Viewrestaurant() {
    const params=useParams();
    console.log(params.id);
     // to hold the value
     const[allRestaurants,setRestaurants]=useState([])
     //function to call api to get restaurant information from
     //restauarant.json
     const getrestaurants=async()=>{
         await fetch('/restaurants.json')
         .then((data)=>{
             data.json()
             .then((result)=>{
                 // console.log(result);
                 setRestaurants(result.restaurants)
             })
             // console.log(data);
         })
     }
 useEffect(()=>{
     getrestaurants()
 },[])
 console.log(allRestaurants);
// eslint-disable-next-line eqeqeq
const viewrest=allRestaurants.find(item=>item.id==params.id)
console.log(viewrest);


  return (
    <>
    {
        viewrest?(
            <Row>
                <Col>
                <Image src={viewrest.photograph} style={{
                    width:'38rem'}}/>
               </Col>
               <Col>
               <p> ID:{viewrest.id}</p>
               <h3>Name : {viewrest.name}</h3>
               <h3>Neighborhood:{viewrest.neighborhood}</h3>
               <h4> Address:{viewrest.address} </h4>
               <h4>cuisine_type:{viewrest.cuisine_type}</h4>
               <Restoperation operate={viewrest.operating_hours}/>
               <Restreview reviews={viewrest.reviews}/></Col>
            </Row>

        ):'null'
    }    
    </>
  )
}

export default Viewrestaurant