import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'; 
import './styles.css'

export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        currentPage: 1
    };
    
    componentDidMount() {
        this.loadProducts();
    };

    loadProducts = async (currentPage = 1) => {
        const response = await api.get(`/products?page=${currentPage}`);
        
        /* ES6: Desconstructor + shorthand + spread operator (...) */
        const { docs, ...productInfo } = response.data;

        this.setState({products: docs, productInfo, currentPage});
    };

    prevPage = () => {
        const { currentPage } = this.state;

        if (currentPage === 1) return;

        const pageNumber = currentPage - 1;

        this.loadProducts(pageNumber);
    };

    nextPage = () => {
        const { currentPage, productInfo } = this.state;

        if (currentPage === productInfo.pages) return;

        const pageNumber = currentPage + 1;

        this.loadProducts(pageNumber);
    };

    // Sempre que o state muda, o render é invocado.
    render() {
        const { currentPage, productInfo } = this.state;

        return (
            <div className="product-list">
                {
                    this.state.products.map(product => (
                        <article key={product._id}>
                            <strong>{product.title}</strong>
                            <p>{product.description}</p>
                            {/* <a href="">Acessar</a> */}
                            <Link to={`/product/${product._id}`}>Acessar</Link>
                        </article>
                    ))
                }
                <div className="actions">
                    <button 
                        disabled={currentPage === 1} 
                        onClick={this.prevPage}>
                        Anterior
                    </button>
                    <button 
                        disabled={currentPage === productInfo.pages} 
                        onClick={this.nextPage}>
                        Proxima
                    </button>
                </div>
            </div>
        )
    }
}