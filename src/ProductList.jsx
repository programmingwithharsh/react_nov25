import Product from "./Product";
import "./style.css"; // Import CSS File

export default function ProductList(props) {
    console.log(props); // receive props value in functional component
    return <div>
        <div>This is Product list functional component</div>
        <div class="table-responsive">
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
                        <Product data="This is Props data" key={index} product={product} />
                    ))}
                </tbody>
            </table>
        </div>
        <div className="message"><strong>Props Example: Message is {props.message}</strong></div>
    </div>
}