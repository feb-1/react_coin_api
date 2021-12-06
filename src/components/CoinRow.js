import React from 'react'
import './Coin.css'
function CoinRow({image,name,symbol,price,volume,priceChange}) {
    return (
        <div className="container">
            <div className="App-row">
                <div className="coin">
                    <img src={image} alt="crypto"></img>
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="price">₹{price}</p>
                    <p className="volume">₹{volume.toLocaleString()}</p>
                    {priceChange <0 ? (
                        <p style={{color:'red'}}>{priceChange.toFixed(2)}</p>
                    ) : <p style={{color:'green'}}>{priceChange.toFixed(2)}</p>}
                </div>
            </div>

        </div>
    )
}

export default CoinRow
