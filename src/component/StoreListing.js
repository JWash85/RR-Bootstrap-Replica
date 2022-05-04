import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'



export default function StoreListing(){
    
return(
<Container style={{ marginTop: "40px" }} >
<h2  style={{ textAlign: "center", paddingBottom: "2em"}}>Browse stores in Richmond, VA </h2>
    <Row class="d-flex justify-content-center" style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
        <Row xs="auto" className="justify-content-center">
            <Col >
                <Image src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
            </Col>
            <Col style={{paddingRight: "60px"}}>
                <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                <p>Delivery by 2:45pm * Pickup 1.6mi</p>
            </Col>       
        <Col>
                <Image src="https://www.instacart.com/image-server/58x/www.instacart.com/assets/domains/warehouse/logo/231/6347ea31-64ed-43c4-991b-7433b2d74bda.png" roundedCircle />
            </Col>
            <Col style={{paddingRight: "60px"}}>
                <h5 style={{ fontWeight: "bold" }}>Wegmans</h5>
                <p>Delivery by 2:20pm * Pickup 1.4mi</p>
            </Col>        
            <Col >
                <Image src="https://www.instacart.com/image-server/58x/www.instacart.com/assets/domains/warehouse/logo/58/bc25fc5b-fb60-4c10-a871-ce427c1d7e78.png" roundedCircle />
            </Col>
            <Col >
                <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                <p>Delivery by 2:15pm</p>
            </Col>
        </Row>
    </Row>
</Container>
);
}