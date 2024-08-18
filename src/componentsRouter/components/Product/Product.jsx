import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { id, title, description, images, price } = product;
    return (
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={images[0]}
              className="img-fluid rounded-start"
              alt={title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <h6 className="">Price: {price}</h6>
              <Link to={`${id}`}>
                <h5 className="btn btn-primary">More info</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Product;