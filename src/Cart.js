import styled from "styled-components";
import { useCartContext } from "./context/cart_context";
import CartItem from "./components/CartItem";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";
import FormatPrice from "./Helpers/FormatPrice";

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  return (
    <Wrapper>
      <div className="container">
        <div className="cart_heading cart_heading-heading grid grid-five-column">
          <p>Item</p>
          <p className="">Price</p>
          <p>Quntity</p>
          <p className="">Subtotal</p>
          <p>Remove</p>
        </div>
      </div>
      <hr />

      <div className="cart-item">
        {cart.map((curEle) => {
          return <CartItem key={curEle.id} {...curEle} />;
        })}
      </div>
      <hr />
      <div className="cart-part-two">
        <div className=" cart-two-button">
          <div className="two-button">
            <NavLink to="/products">
              <Button> continue Shopping </Button>
            </NavLink>
          </div>
          <div className="two-button ">
            <button className="btn btn-clear" onClick={clearCart}>
              clear cart
            </button>
          </div>
        </div>

        {/* order total_amount */}
        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>subtotal:</p>
              <p>
                <FormatPrice price={total_price} />
              </p>
            </div>
            <div>
              <p>shipping fee:</p>
              <p>
                <FormatPrice price={shipping_fee} />
              </p>
            </div>
            <hr />
            <div>
              <p>order total:</p>
              <p>
                <FormatPrice price={shipping_fee + total_price} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }
  .cart-part-two {
    display: flex;
  }

  .two-button {
    width: max-content;
    display: block;
    padding-bottom: 1rem;
  }
  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 18rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }

  .color-div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    .color-style {
      width: 1.4rem;
      height: 1.4rem;

      border-radius: 50%;
    }
  }

  .cart-two-button {
    padding: 0rem 18rem;
    /* display: grid; */
    width: fit-content;
    margin-top: 1rem;

    .btn-clear {
      background-color: #e74c3c;
      text-decoration: none;
      max-width: auto;
      color: rgb(255 255 255);
      padding: 1.4rem 2.4rem;
      border: none;
      text-transform: uppercase;
      text-align: center;
      cursor: pointer;
      :hover {
        transition: transform 0.2s ease;
        transform: scale(0.9);
      }
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: -1.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      margin-top: 2rem;
      padding-top: 3.2rem;
      padding-right: 18rem;
      padding-left: 5rem;
      padding-bottom: 3rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr 1fr 1fr;
    }
    .cart_heading-heading {
      grid-template-columns: 2.4fr 4fr 3fr 1fr 0fr;
    }
    
    .amount-toggle {
      gap: 1rem;
      font-size: 1rem;
    }
    .cart-item {
      padding: 1rem;
    }
    .cart-hide {
      display: none;
    }
    .two-button {
      width: max-content;
      align-content: flex-start;
      padding: 10px;
    }
    .cart-part-two {
      display: flex;
    }
    .cart-two-button {
      display: grid;
      padding: 0;
      justify-content: space-between;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
        margin-top: 1.9rem;
      }
    }
  }
`;

export default Cart;
