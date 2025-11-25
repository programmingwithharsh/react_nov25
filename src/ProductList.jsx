import { Link } from "react-router-dom";
import Star from "./Star";

export default function ProductList(props) {
    console.log(props); // receive props value in functional component
    return <div>
        <div>This is Product list functional component</div>
        <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Product Code</th>
                        <th>Release Date</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((product, index) => (
                        <tr key={index}>
                            <td><img src={product.imageUrl} width="50" height="50" /></td>
                            <td><Link to={`/products/${product.productId}`}>{product.productName}</Link></td>
                            <td>{product.productCode}</td>
                            <td>{product.releaseDate}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td><Star rating={product.starRating} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="message"><strong>Props Example: Message is {props.message}</strong></div>
    </div>
}