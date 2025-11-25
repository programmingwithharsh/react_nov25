import Card from "./Card";

const Grid = () => {
    return (<div className="row">
        <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3 customBorder"><Card cardTitle="HTML Training" cardText="Some quick example text to build on the card title and make up the bulk of the card’s content." linkText="More Info" imageUrl="https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png" />
        </div>
        <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3 customBorder"><Card cardTitle="CSS Training" cardText="Some quick example text to build on the card title and make up the bulk of the card’s content." linkText="More Info" imageUrl=" https://cdn-icons-png.freepik.com/256/732/732190.png?semt=ais_white_label" />
        </div>
        <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3 customBorder"><Card cardTitle="Javascript Training" cardText="Some quick example text to build on the card title and make up the bulk of the card’s content." imageUrl="https://skillforge.com/wp-content/uploads/2020/10/javascript.png" linkText="More Info" />
        </div>
        <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3 customBorder"> <Card cardTitle="React Training" cardText="Some quick example text to build on the card title and make up the bulk of the card’s content." imageUrl="https://miro.medium.com/v2/0*Hdm7hBTZ-hKlbtlV.png" linkText="More Info" />
        </div>
    </div>);
}

export default Grid;