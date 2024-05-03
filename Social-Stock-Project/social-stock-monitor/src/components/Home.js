import React from 'react';

function Home() {
    return (
        <div>
            <header>
                <h1>StockTalk</h1> {/* Change 'StockTalk' to your actual app name */}
            </header>
            <input type="text" placeholder="Search stocks..." />
            <div>
                <h2>Popular Stocks</h2>
                {/* This could be a list fetched from an API */}
                <ul>
                    <li>AAPL</li>
                    <li>GOOGL</li>
                    <li>AMZN</li>
                </ul>
            </div>
            <div>
                <h2>Recent News</h2>
                {/* News items fetched from an API */}
                <p>Latest market updates...</p>
            </div>
        </div>
    );
}

export default Home;
