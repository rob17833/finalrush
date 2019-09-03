import React from 'react';
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container
} from 'reactstrap';
// import action from Actions for redux
import {generateTicket} from '../../Actions/index.js'
// import for redux
import {bindActionCreators}  from 'redux';
import {connect} from 'react-redux';



class Book extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      userInput:'',
      data: {
        nom : '',
        prenom : '',
        email : ''
      }
    }
  }

  onChange(event) {/*event=enregistre saisie clavier*/
    this.setState({
      data: {...this.state.data, [event.target.name]: event.target.value}
    })
  }

  toTicket = (event) => {
    event.preventDefault()
    this.props.generateTicket(this.state.data)
    this.props.history.push('/ticket');
  }

  render() {
    
    return(
      <Container>
        <h1>Book !</h1>
        <Form onSubmit={this.toTicket}>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleNom">Nom</Label>
                <Input 
                  type="text" placeholder="Nom"
                  name="nom"
                  id="Nom"
                  value={this.state.data.nom}
                  onChange={this.onChange.bind(this)}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="examplePrenom">Prenom</Label>
                <Input 
                  type="text" placeholder="Prenom"
                  name="prenom"
                  id="Prenom"
                  value={this.state.data.prenom}
                  onChange={this.onChange.bind(this)}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input 
                  type="text" placeholder="Email"
                  name="email"
                  id="Email"
                  value={this.state.data.email}
                  onChange={this.onChange.bind(this)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Button type="submit">
            Get your ticket
          </Button>
        </Form>
      </Container>
    )
  }
}

// create variable which contains dispatch
// all the actions 
// that's only syntax
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    generateTicket
  }, dispatch)
  )
// then connect component to the store
export default connect(null, mapDispatchToProps)(Book);