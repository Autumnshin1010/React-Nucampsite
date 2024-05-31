import { Card, CardImg, CardTitle, CardText } from 'reactstrap';

const DisplayCard = ({ partner }) => {
    const { name, image, description } = partner;
    return (
                <Card>
                    <CardImg 
                        src={image}
                        alt={name}
                    /> 
                        <CardTitle>{name}</CardTitle>
                        <CardText>{description}</CardText>                  
                </Card>
    );
}

export default DisplayCard;
