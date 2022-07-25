import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Model1 from "../Components/bookslots/Model1";
import styles from "../StyleComponents/Services.module.css";

const Summary = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(553);

  const [data,setData]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:8080/cart')
    .then((r)=>setData(r.data))
    .catch((e)=>console.log(e))
  },[])

  console.log(data,"data")
  const handleProcced = () => {
    navigate("/:city/summary/checkout");
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.img}>
          <img
            style={{ height: "50px" }}
            id="img"
            src="https://fontawesomeicons.com/images/svg/arrow-back.svg"
            alt="arrow.png"
          />
        </div>
        <div>
          <h1 style={{ fontSize: "50px" }}>Summary</h1>
        </div>
      </div>
      <hr />
      <div className={styles.heading}>
        <div className={styles.text}>
          {/* text */}
          <div className={styles.textp}>
            <div className={styles.text1}>
              <p>Haircut + Beard Grooming + Massage</p>
            </div>
            <div className={styles.counter}>
              {count === 0 ? (
                <button
                  className={styles.addCartItem}
                  onClick={() => setCount((prev) => prev + 1)}
                >
                  ADD
                </button>
              ) : (
                <div className={styles.addCartItem}>
                  <button
                    disabled={count === 1}
                    onClick={() => setCount((prev) => prev - 1)}
                  >
                    -
                  </button>
                  <button>{count}</button>
                  <button onClick={() => setCount((prev) => prev + 1)}>
                    +
                  </button>
                </div>
              )}
            </div>
            <p>₹{price * count}</p>
          </div>
          <hr />
          <div className={styles.list}>
            <ul>
              <li>Men's Haircut x1</li>
              <li>Beard Shape & Style x1</li>
              <li>10 min Head Massage x1</li>
            </ul>
          </div>

          <div className={styles.member}>
            {/*  */}
            <div>
              <h2 style={{ fontSize: "20px", width: "50%", margin: "2%" }}>
                Frequently added together
              </h2>
              <div className={styles.suggetions}>
                <div>
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload//t_medium_res_category//categories/category_v2/category_f7d85a20.jpeg"
                    alt=""
                  />
                  {/* <p>Head Massage Head Massage</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PAYMENT SECTION RIGHT SIDE BOX */}

        <div className={styles.payment}>
          <div className={styles.phead}>
            <h3>Payment Summary</h3>
          </div>
          <div className={styles.pitem}>
            <div className={styles.itotal}>Item total</div>
            <div className={styles.itotalprice}>₹{price * count}</div>
          </div>

          <div className={styles.pitem}>
            <div className={styles.itotal}>Convenience fee</div>
            <div className={styles.itotalprice}>₹49</div>
          </div>

          <hr style={{ marginTop: "2%" }} />
          <div className={styles.pitem}>
            <div className={styles.itotal}>Total</div>
            <div className={styles.itotalprice}>₹{price * count + 49}</div>
          </div>

          <hr style={{ marginTop: "2%" }} />

          <div className={styles.blank}></div>

          <div className={styles.offers}>
            <div className={styles.img}>
              <img
                id="img1"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5SxrkEmZkOPbrpX7JME9ZGAxOo9gD3CShd9z2ZqxGsMQc0MlkX_9MQu2xsP76kV0-MEc&usqp=CAU"
                alt=""
              />
            </div>
            <div className={styles.text1}>
              <p>Coupons and offers Login/Sign up to view offers</p>
              <p></p>
            </div>
          </div>

          <div className={styles.blank}></div>

          <hr />
          <div className={styles.loginsignup}>
            <button
              style={{
                border: "1px solid #6e7dff",
                fontSize: "20px",
                marginTop: "5%",
                borderRadius: "10px",
                padding: "5px",
                backgroundColor: "#6e7dff",
                color: "white",
              }}
              onClick={handleProcced}
            >
              Procced to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
