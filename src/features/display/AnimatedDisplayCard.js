import { useState, useEffect } from 'react';
import { Card, CardImg, CardTitle, CardText } from 'reactstrap';
import { useSpring, animated } from 'react-spring';

const AnimatedDisplayCard = ({ partner }) => {
    const { name, image, description } = partner;
    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config: { durtion: 500 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);

    return (
        <animated.div style={animatedStyle}>

            <Card>
                <CardImg 
                    src={image}
                    alt={name}
                /> 
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>                  
            </Card>
        </animated.div>
);
}
export default AnimatedDisplayCard;
