import moment from 'moment';
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const {_id, author, title, image_url, details, rating, total_view} = news
    return (
        <div className='mb-4'>
            <Card className="">
            <Card.Header className='d-flex justify-contents-center align-items-center gap-2'>
                <Image src={author.img} alt="" style={{height: "40px"}} roundedCircle />
                <div className='flex-grow-1'>
                    <h6 className='mb-0 mt-2'>{author.name}</h6>
                    <p><small>{moment(author?.published_date).format('yyyy-MM-D') }</small></p>
                </div>
                <FaRegBookmark></FaRegBookmark>
                <FaShareAlt></FaShareAlt>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} className='my-4'/>
                <Card.Text>
                {
                
                details.length < 250 ? <>{details}</> :
               <>
               {
                details.slice(0, 250) }... <Link to={`/news/${_id}`}
                 className='text-decoration-none text-warning'>Read More</Link>
               </>
                
                }
                </Card.Text>
                
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                <Rating className='text-warning me-2'
                    placeholderRating={rating?.number}
                    readonly
                    emptySymbol={<FaRegStar/>}
                    placeholderSymbol={<FaStar/>}
                    fullSymbol={<FaStar/>}
                    />
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye></FaEye>
                    <span className='ms-2'>{total_view}</span>
                </div>
            </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;