import { useParams } from "react-router-dom";
function ProductDetail() {
    // Object destructuring
    let { id } = useParams();
    return (<h1>This is Product Detail Component - {id}</h1>);
}

export default ProductDetail;