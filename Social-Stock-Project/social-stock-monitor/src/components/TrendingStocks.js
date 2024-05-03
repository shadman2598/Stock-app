import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';

export default function TrendingStocks() {
    const [stocks, setStocks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const hostname = window.location.hostname;
            const server_port = process.env.REACT_APP_SERVER_PORT;
            let response = await axios.get(`${hostname}:${server_port}/trending-stocks`);
            setStocks(response.data);
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Trending Stocks</h1>
            <Row>
                {loading ? <p>Loading...</p> : stocks.map(stock => (
                    <Col key={stock.id} md={4}>
                        <h2>{stock.name}</h2>
                        <p>{stock.description}</p>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
