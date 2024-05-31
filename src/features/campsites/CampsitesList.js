import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { selectAllCampsites } from './campsitesSlice';
import CampsiteCard from "./CampsiteCard";

const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites);//We want to just pass the function itself without invoking it.
    console.log('campsites:', campsites) //help us see what's going on.
    
    return ( 
        <Row className='ms-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col md='5' className='m-4' key={campsite.id}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default CampsitesList;
