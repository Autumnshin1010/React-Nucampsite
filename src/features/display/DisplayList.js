import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedPartner } from '../partners/partnersSlice'
import { selectFeaturedCampsite } from '../campsites/campsitesSlice'
import { selectFeaturedPromotion } from '../promotions/promotionsSlice'


const DisplayList = () => {
    const items = useSelector((state) =>  //To convert this entire array to be able to access the Redux State. 
    [ //defined an array named items by calling these three selected functions.
        selectFeaturedPartner(state),
        selectFeaturedCampsite(state),
        selectFeaturedPromotion(state)
        ]);
    
    console.log('display items:', items);
    
    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    <Col className='m-1' key={idx}>
                        <AnimatedDisplayCard item={item} />
                    </Col>
                ); 
            })}
        </Row>
     );
};

export default DisplayList;
