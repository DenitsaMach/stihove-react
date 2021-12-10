import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import * as poemService from '../../services/poemService';

import './PoemDetails.css';


function PoemDetails({id, excerptMode}) {
	let poemId = useParams().poemId ?? id;
	let {author, title, excerpt, content} = poemService.get(poemId);
	return (
        <div className="details">
			<div className="edit">
				<i className="fa fa-pencil" style={{'backgroundColor':'#f6a617'}}> Edit</i>
			</div>
			<div className="author">{author}</div>
			<div className="title">{title}</div>
			<div className="content">{excerptMode ? excerpt : content}</div>
			<Link to={`/details/${poemId}`}><Button variant="primary">... Прочети!</Button></Link>
			<div className="rating">
				<i className="fa fa-thumbs-up" style={{'backgroundColor':'#57ff41'}}> Like</i>
				<i className="fa fa-thumbs-down" style={{'backgroundColor':'#ff6e6e'}}> Dislike</i>
			</div>
		</div>
    );
}

export default PoemDetails;