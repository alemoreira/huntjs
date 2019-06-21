import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

export default class Product extends Component {
    state = {
        product: {}
    }

    async componentDidMount() {
        // pegar o id quem vem pela URL (rota). E quem pode ser acessado pelo props.
        console.log(this.props);
        const { id } = this.props.match.params

        const response = await api.get(`/products/${id}`);
        console.log(response);

        this.setState({ product: response.data });
    }

    render() {
        const { product } = this.state;

        return (
            <React.Fragment>
                <div className="product-info">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>
                        URL: <a href={product.url}>{product.url}</a>
                    </p>
                </div>

                <div className="actions">
                    {/* <button onClick={window.history.back()}>Voltar</button> */}
                    <Link to={`/`}>Voltar</Link>
                </div>
            </React.Fragment>
        );
    }
}