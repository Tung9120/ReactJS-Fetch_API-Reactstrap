import React from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get("https://m20nq.sse.codesandbox.io/products").then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div className="Products">
        <Container>
          <Row>
            {products.length > 0 &&
              products.map((product, index) => {
                return (
                  <Col sm="4" className="my-2" key="index">
                    <Card>
                      <CardImg
                        top
                        width="100%"
                        src={product.imgUrl}
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardTitle>{product.name}</CardTitle>
                        <CardSubtitle>Some text ...</CardSubtitle>
                        <CardText>description: {product.description}</CardText>
                        <Button>Button</Button>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            {products.length <= 0 && (
              <h2 className="lead text-center">Nothing here.</h2>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Products;
