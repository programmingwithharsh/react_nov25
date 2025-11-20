export default function Product(props) {
    console.log("Product component", props);
    return <tr>
        <td><img src={props.product.imageUrl} width="50" height="50" /></td>
        <td>{props.product.productName}</td>
        <td>{props.product.productCode}</td>
        <td>{props.product.releaseDate}</td>
        <td>{props.product.description}</td>
        <td>{props.product.price}</td>
        <td>{props.product.starRating}</td>
    </tr>
}
