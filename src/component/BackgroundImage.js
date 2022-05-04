import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export default function BackgroundImage(){
return (
<Card style={{backgroundColor: '#DFEED6'}} >  
<Card.Img  expand='lg' style={{width:'20em', marginLeft: 'auto'}} src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" alt="Card image" />
<Card.ImgOverlay>
 <Card.Text  style={{fontSize: '2.5em', margin: '50px', marginRight:'7em'}}>
      Order groceries for delivery or pickup today
    </Card.Text>
    <Card.Text style={{fontSize: '1.5em', margin: '50px', marginRight:'15em', marginTop: '-50px'}}>Whatever you want from local stores, brought right to your door</Card.Text>
    <Form.Label style={{marginRight: '20em'}}>
        <FormControl style={{width:'40em'}}
          type="Search"
          placeholder="Enter your address"
          className="pe-1"
          aria-label="Search"
        />
</Form.Label>
</Card.ImgOverlay>
 </Card>

);
} 