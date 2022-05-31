import React from "react";
import Products from './products.json'
import {DropdownButton,Dropdown,Card,Button,Form, Container} from 'react-bootstrap'
import {useState} from 'react'
function Product(){
    const [cat1,setCat1]=useState("Grocery & Staples")
    const [cat2,setCat2]=useState("Rice & Rice Products")
    
    const [cat3,setCat3]=useState("Rice")
    const [search,setSearch]=useState("")
    var a ="Grocery & Staples";
    var b="Rice & Rice Products";
    var d ="Rice";
    var res1 = Products.data.map(a=>a["category_level1"])
    res1=[... new Set(res1)]
    var res2 = Products.data.map(a=>a["category_level2"])
    res2=[... new Set(res2)]
    var res3 = Products.data.map(a=>a["category_level3"])
    res3=[... new Set(res3)]
    

    
    return(
        <Container fluid>
           
<div></div>
<br/>
<h2 className="heading">Product Store</h2>
<Form.Control  type="text" className="search" placeholder="search for a product......."  onChange={(e)=>{setSearch(e.target.value)}}></Form.Control >
<div className="category">


<DropdownButton id="dropdown-basic-button" title={cat1}>
            {res1.map((a)=>(
                     <Dropdown.Item   onClick={()=>{setCat1(a)}}>{a}</Dropdown.Item>
                ))}

               

               
 
 
</DropdownButton>
<DropdownButton id="dropdown-basic-button"
title={cat2}

>
                {res2.map((a)=>(
                     <Dropdown.Item   onClick={()=>{setCat2(a)}}>{a}</Dropdown.Item>
                ))}

               

               
 
 
</DropdownButton>
<DropdownButton id="dropdown-basic-button" title={cat3}>
                {res3.map((a)=>(
                     <Dropdown.Item   onClick={()=>{setCat3(a)}}>{a}</Dropdown.Item>
                ))}

               

               
 
 
</DropdownButton>
</div>




            <div className="maindiv"> 
            {
               Products.data.filter(c=>c.name.toLocaleLowerCase().includes(search) && (c.category_level1.includes(cat1) || c.category_level2.includes(cat2) || c.category_level3.includes(cat3) )).map((a)=>(
                   <div className="displaycards">
                <Card style={{ width: '18rem' }}>
               
                <Card.Body>
                  <Card.Title>{a["name"]}</Card.Title>
                  <Card.Text>
                   {a["category_level1"]}<br></br>
                   {a["category_level2"]}<br></br>
                   {a["category_level3"]}<br></br>
                  </Card.Text>
                  <Button variant="primary">Buy</Button>
                </Card.Body>
              </Card>
              </div>
               ))
            }
            </div>

            </Container>
    )
}

export default Product;