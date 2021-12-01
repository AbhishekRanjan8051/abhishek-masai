import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto;
  gap: 20px;
`;

const Card = styled.div`
  ${
    "" /* width: 95px;
  overflow: hidden;
  border-radius: 25px;
  border: 1px solid lavender;
  margin: 10px;
 
  width;150px;
  height;150px;
  display:flex;
  flex-direction: column;
  justify-content:space-between; */
  }
  box-shadow: 5px 5px 15px 5px rgba(100, 150, 200, 1);
  height: 300px;
  width: 250px;
  ${'' /* background-color: red; */}
  margin: 15px;
`;

const Image = styled.div`
  position: relative;
  height: 150px;
`;
const Img = styled.img`
  border-radius: 30px 50px;
  height: 100px;
  object-fit: cover;
  object-position: center;
  width: 95%;
  padding: 10px 5px;
`;
const Info = styled.div`
  ${
    "" /* display: flex;
  justify-content: space-between; */
  }
  display: grid;
  grid-template-columns: auto auto;
`;
const Infotitle = styled.h3`
  font-weight: 600;
  text-wrap: wrap;
  text-overflow: ellipsis;
`;
const Rate = styled.span`
  font-weight: bold;
  font-size: 20px;
`;
const Paymentdiv = styled.span`
  font-weight: 500;
  font-size: 20px;
`;
const Pricediv = styled.span`
  font-weight: 500;
  font-size: 20px;
`;

function List({ data, rate, payment, price }) {
  return (
    <div>
      {data
        .filter((e) => (rate === "" ? e : e.rating === rate))
        .filter((el) =>
          payment === "cash"
            ? el.payment.cash
            : payment === "online"
            ? el.payment.online
            : payment === "both"
            ? el.payment.cash && el.pay.online
            : el
        )
        .sort((a, b) => {
          if (price === "Lth") {
            return a.price - b.price;
          } else if (price === "HtL") {
            return b.price - a.price;
          }
        })
        .map((ele) => (
          <Container>
          
            <Card>
              <Image>
                <Img src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content9442.jpg"></Img>
              </Image>
              <Info>
                <Infotitle>{ele.name}</Infotitle>
                <Rate>{ele.rating}</Rate>
                
                <Paymentdiv>
                  {ele.payment.cash && ele.payment.online
                    ? "cash - online"
                    : ele.payment.cash
                    ? "cash"
                    : "online"}
                </Paymentdiv>

                <Pricediv>price :- {ele.price}</Pricediv>
              </Info>
            </Card>
          </Container>
        ))}
    </div>
  );
}

export { List };
