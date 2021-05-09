import React from 'react'
import '../Stylesheets/Home.css';
import Product from './Product';

const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <img className="home-image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Samsung/SamsungM/Family/8thMay/D20729242_IN_WLME_SamsungM_Family_DesktopTallHero_1500x600_1.1._CB669478640_.jpg" />
                <div className="home-row">
                    <Product
                        id={1231}
                        title="New Apple iPhone 12 (64GB) - Black"
                        price={75900.00}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71fVoqRC0wL._SL1500_.jpg" />
                    <Product
                        id={1232}
                        title="Samsung Galaxy Z Flip (Gold, 8GB RAM, 256GB Storage)"
                        price={84999.00}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61e3gEDsIbL._SL1500_.jpg" />
                </div>
                <div className="home-row">
                    <Product
                        id={1233}
                        title="AmazonBasics 564 L Side-by-Side Door Refrigerator"
                        price={47499.00}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71DuofqGR8L._SL1500_.jpg" />
                    <Product
                        id={1234}
                        title="Panasonic 2 Tons 5 Star Wi-Fi Inverter Split AC"
                        price={52990.00}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/61vern5TkcL._SL1500_.jpg" />
                    <Product
                        id={1235}
                        title="Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine"
                        price={14190.00}
                        rating={2}
                        image="https://images-na.ssl-images-amazon.com/images/I/51QmQjHQASL._SL1500_.jpg" />
                </div>
                <div className="home-row">
                    <Product
                        id={1236}
                        title="LG 217 cms (86 inches) 4K Ultra HD Smart NanoCell TV 86SM9400PTA | With Built-in Alexa (Rocky Black) (2019 Model)"
                        price={679990.00}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/91S8zeQzHuL._SL1500_.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Home;
