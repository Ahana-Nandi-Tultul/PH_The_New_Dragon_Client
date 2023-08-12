import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInsights from '../EditorInsights/EditorInsights';

const NewsDetails = () => {
    const news = useLoaderData();
    // console.log(news);
    const {_id, author, title, image_url, details, rating, total_view, category_id} = news
    return (
        <div>
            <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="danger"> <FaArrowLeft/> All news in this category</Button> </Link>
            </Card.Body>
            </Card>
            <EditorInsights></EditorInsights>
        </div>
    );
};

export default NewsDetails;