import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard'
import { selectFeaturedPartner } from '../partners/partnersSlice'
import { selectFeaturedCampsite } from '../campsites/campsitesSlice'
import { selectFeaturedPromotion } from '../promotions/promotionsSlice'
import Error from '../../components/Error';
import Loading from '../../components/Loading';



const DisplayList = () => {
    const items = useSelector((state) =>  //To convert this entire array to be able to access the Redux State. 
    [ //defined an array named items by calling these three selected functions.
        selectFeaturedCampsite(state),
        selectFeaturedPromotion(state),
        selectFeaturedPartner(state)
        ]);
    
    console.log('display items:', items);
    
    return (
        <Row>
            {items.map((item, idx) => {
                const { featuredItem, isLoading, errMsg } = item;
                if (isLoading) {
                    return <Loading key={idx} />;
                }
                if (errMsg) {
                    return <Error errMsg={errMsg} key={idx} />;
                }
                return (
                featuredItem && (
                    <Col className='m-1' key={idx}>
                        <AnimatedDisplayCard item={featuredItem} />
                    </Col>
                )
                ); 
            })}
        </Row>
     );
};

export default DisplayList;
