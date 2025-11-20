import Product from "./Product";
export default function ProductList(props) {
    console.log(props); // receive props value in functional component
    return <div>
        <div>This is Product list functional component</div>
        <Product data="This is Props data" />
        <div><strong>Props Example: Message is {props.message}</strong></div>
    </div>
}