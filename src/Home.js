import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <img className="home_image"
            src="https://images.indianexpress.com/2020/05/Amazon-Prime-Video-759.jpg"
            alt="Sale" />
            <h1 className="category">Fashion</h1>
            <div className="home_row">
                <Product 
                    id="123"
                    title="Nike Joyride Shoes"
                    price={9999}
                    rating={4}
                    image="https://c.static-nike.com/a/images/f_auto/dpr_3.0/h_500,c_limit/pzk5v9f1plo6f6jvqxjd/123-joyride-cdp-apla-xa-xp.jpg" />
                <Product 
                    id="124"
                    title="Puma Rise-XT"
                    price={8999}
                    rating={4}
                    image="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/104878/02/sv01/fnd/IND/fmt/png/Rise-XT-FUSE-1-Indoor-Training-Shoes" />
            </div>
            <div className="home_row">
                <Product 
                    id="423"
                    title="Friends T-Shirt"
                    price={499}
                    rating={4}
                    image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcvxV6lCab37ZeJ3bYQuvKiu09_eD27MfJ4f77ckUGRP110ZchOijoU8ZLMfF7SInHJILojL-QObN10VtMQdIzYCfpavozsLtOvn1K7e8-dcK3UY7_BYrOZQ&usqp=CAE" />
                <Product 
                    id="424"
                    title="Money Heist T-Shirt"
                    price={399}
                    rating={4}
                    image="https://cdn.shopify.com/s/files/1/0028/6559/4412/products/Money-Heist-Tshirt-2-W_720x.jpg?v=1605423810" />
                <Product 
                    id="425"
                    title="GOT T-shirt"
                    price={449}
                    rating={4}
                    image="https://static.cilory.com/276578-thickbox_default/game-of-thrones-black-round-neck-t-shirt.jpg" />
            </div>

            <h1 className="category">Electronics</h1>
            <div className="home_row">
                <Product 
                    id="223"
                    title="IPhone XR"
                    price={49999}
                    rating={4}
                    image="https://static.digit.in/default/b4e18cd02ebe74dfd5fbf178853c08e9e1118cfb.jpeg?tr=w-1200" />
                <Product 
                    id="224"
                    title="Google Pixel 4XL"
                    price={83900}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/414-t2pq0vL.jpg" />
            </div>
            <div className="home_row">
                <Product 
                    id="323"
                    title="Microsoft Surface Laptop 3"
                    price={98990}
                    rating={4}
                    image="https://zdnet3.cbsistatic.com/hub/i/r/2020/03/19/4d0e4e03-c980-43db-aa0f-2572aefcf89f/thumbnail/770x433/36d847f1d279f3a0cbaf29e1e9fc576f/surface-laptop-3-13-5-header.jpg" />
                <Product 
                    id="324"
                    title="Dell XPS 15"
                    price={194950}
                    rating={4}
                    image="https://i.dell.com/sites/csimages/Video_Imagery/all/xps_7590_touch.png" />
                <Product 
                    id="325"
                    title="HP Spectre"
                    price={124999}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81KPk6ZeglL._SL1500_.jpg" />
            </div>
            <div className="home_row">
                <Product 
                    id="723"
                    title="Sony 65 inches Smart 4K LED TV"
                    price={242900}
                    rating={4}
                    image="https://static.digit.in/default/d7a8a8ec1daec9290b445c38b22d7b30c076be08.jpeg?tr=w-1200" />
            </div>
            

            <h1 className="category">Musical Instruments</h1>
            <div className="home_row">
            <Product 
                    id="623"
                    title="Tablas"
                    price={1799}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71jIILqBuYL._SL1500_.jpg" />
                <Product 
                    id="624"
                    title="Guitar"
                    price={5999}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/712RQuDrHrL._SL1500_.jpg" />
                <Product 
                    id="625"
                    title="Piano"
                    price={12499}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71oE30%2B4dkL._SL1500_.jpg" />
            </div>
        </div>
    )
}

export default Home
