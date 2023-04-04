import { Component } from "react";
import { Card,CardBody,card,CardImgOverlay,CardHeader,CardTitle,CardImg, CardText  } from "reactstrap";
class MyMediaClass extends Component{
    constructor(props){
        super(props)
        this.state={
            selectDish:null
        }
    }


     selectDish(value){
        this.setState({
            selectDish:value
        })
    }
    renderDish(dish){
        if(dish != null){
            return(
                <Card className="col-12 d-flex flex-row">
                        <CardImg style={{flex:"0 0 20%"}}  src={dish.image} alt="" />
                        <CardBody >
                            <CardTitle style={{fontWeight:"600"}}>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                </Card>
            )
        }
        else{
            return(
                <div>
                    <p>Please select a card....</p>
                </div>
            )
        }
    }
    render(){
        let menu = this.props.dishes.map((value)=>{
            return(

                <div className="col-12 col-sm-6 col-md-3 p-1">
                    <Card onClick={()=>{this.selectDish(value)}}>
                        <CardImg  src={value.image} alt="" />
                        <CardBody className="text-center">
                            <CardTitle>{value.name}</CardTitle>
                        </CardBody>
                    </Card>
                </div>

            )
        })

        return(
          <div className="container-fluid">
            <div className="row">
                    {menu}
             </div>
             <div className="mt-4">
                <row >
                    <h4>Detail View</h4>
                    {this.renderDish(this.state.selectDish)}
                </row>
             </div>
          </div>
        )
    }
}

export default MyMediaClass