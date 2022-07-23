import React from 'react'
import { useState } from 'react'

const Summary = () => {

  const [count, setCount] = useState(0)
   const handleCount= ()=> {
    setCount(true)
   }  


  return (
        <div className='container'>
          <div className='header'>
               <div className='img'>
               <img id='img' src="https://fontawesomeicons.com/images/svg/arrow-back.svg" alt="arrow.png" />
               </div>
               <div className='title'>
               <h3 id='head'>Summary</h3>
               </div>
          </div>
          <hr />
          <div className='heading'>
            <div className='text'>
              {/* text */}
              <div className='textp'>
              <div className='text1'>
              <p>Haircut + Beard Grooming + Massage</p>
              </div>
              <div className='counter'>
              {count === 0 ? (
            <button className="addCartItem" onClick={() => setCount(1)}>
              ADD
             </button>
          ) : (
            <div className="addCartItem">
              <button  onClick={() => handleCount(-1)}>-</button>
              <button  >{count}</button>
              <button   onClick={() => handleCount(1)}>+</button>
            </div>
          )}

              </div>
              <p>₹549</p>
              </div>
              <hr />
              <div className='list'>
                <ul>
                  <li>Men's Haircut x1</li>
                  <li>Beard Shape & Style x1</li>
                  <li>10 min Head Massage x1</li>
                </ul>

              </div>
              <div className='edit'>
                <button id='edit' >Edit Package</button>

              </div>

              <div className='member'>
                <div className='member1'>
                <h3>Plus Membership</h3>
                </div>
                <div className='cover'>
                <div className='months'>
                   <p>12 months</p>
                </div>
                <div className='add'>
                    <button className='add' >Add</button>
                    </div>
                   
                    </div>

                  {/* <div className='container1'>
                        


                  </div>
                     */}
                       <div>
          <h3>Frequently added together</h3>
          <div className="suggetions">
            <div>
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload//t_medium_res_category//categories/category_v2/category_f7d85a20.jpeg"
                alt=""
              />
              <p>Head Massage Head Massage</p>
              <p style={{ fontWeight: "500", marginTop: "15px" }}>₹000</p>
              <div className="button">
                {count === 0 ? (
                  <button className="addToCartItem1" onClick={() => setCount(1)}>
                    ADD
                    <strong
                      style={{
                        width: "20px",
                        background: "#EFF1FF",
                        marginLeft: "10px",
                      }}
                    >
                      +
                    </strong>
                  </button>
                ) : (
                  <div className="addedToCartItem1">
                    <button onClick={() => handleCount(-1)}>-</button>
                    <button>{count}</button>
                    <button onClick={() => handleCount(1)}>+</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>


                
                 

              </div>
            </div>
              <div className='payment'>
                <div className='phead'>
                  <h3>Payment Summary</h3>
                </div>
                  <div className='pitem'>
                   
                  <div className='itotal'>Item total</div>
                    <div className='itotalprice'>item total price</div> 

  
                  </div>
                  <div className='pitem'>
                   
                  <div className='itotal'>Membership Discount</div>
                    <div className='itotalprice'>-₹83</div> 

  
                  </div>
                  <div className='pitem'>
                   
                  <div className='itotal'>Convenience fee</div>
                    <div className='itotalprice'>₹49</div> 

  
                  </div>
                  <div className='pitem'>
                   
                  <div className='itotal'>Plus Membership</div>
                    <div className='itotalprice' >
                      ₹999 ₹299
                      </div> 

  
                  </div>
                  <hr />
                  <div className='pitem'>
                   
                   <div className='itotal'>Total</div>
                     <div className='itotalprice' >
                       Totalprice
                       </div> 
 
   
                   </div>

                   <div  className='bottom'>
                       <p id='bottom'>Yay! You have saved ₹783 on final bill </p>
                   </div>
                       <hr />

                             <div className='blank'></div>

                       <div className='offers'>
                            <div className='img'>
                              <img id="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5SxrkEmZkOPbrpX7JME9ZGAxOo9gD3CShd9z2ZqxGsMQc0MlkX_9MQu2xsP76kV0-MEc&usqp=CAU" alt="" />
                               </div>
                               <div className='text1'>
                                   <p>Coupons and offers
                                   Login/Sign up to view offers
                                   </p>
                                   <p></p>
                               </div>
                       </div>
                       
                       <div className='blank'></div>

                       <hr />
                      <div className='loginsignup'>
                          <button id='loginsignup'>Login/signup to proceed</button>
                      </div>


                </div>
          </div>
     </div>
      
    
  )

}

export default Summary