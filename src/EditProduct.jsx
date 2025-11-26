import { useParams } from "react-router-dom";
function EditProduct() {
    // Object destructuring
    let { id } = useParams();
    /*
    Display editable fields
        1. Get all products data from localstorage using localstorage.getitem
        2. Filter product based on id
        3. Update product value inside html based on id

    Update new record, we can use updateProduct function for this
        1. Get new product record from html form
        2. Replace older record and update new one in localstorage
    */
    return (<div className="col-6 mt-2">
        <h1>Edit Product id is {id}</h1>
        <form>
            Product Name<input className="form-control" type="text" name="productName" value="iphone" />
            Product Code <input className="form-control" type="text" name="productCode" />
            Release Date <input className="form-control" type="date" name="releaseDate" />
            Description <input className="form-control" type="text" name="description" />
            Price <input className="form-control" type="text" name="price" />
            Rating <input className="form-control" type="number" name="rating" />
            <input type="submit" className="btn btn-primary mt-2" value="Update Product" />
        </form>
    </div>);
}

export default EditProduct;