import './PoemDetails.css';
import Button from 'react-bootstrap/Button';

function PoemDetails() {
	return (
		<div className="details">
			<div className="edit">
				<i className="fa fa-pencil" style={{'backgroundColor':'#f6a617'}}> Edit</i>
			</div>
			<Button variant="primary">Редактирай!</Button>
			<div className="author">Иван Вазов</div>
			<div className="title">Молитва</div>
			<div className="content">
				{`Дядо господи, прости ме,
моля ти се от душа,
с ум и разум надари ме,
да не мога да греша!

Запази ми ти сърцето
от зли мисли и неща,
всичко видиш от небето:
зло до мен недей праща!

Дай на мама, дай на тате
здравье, сила и живот,
мир, любов на всички братя
и добро на наш народ!`}
			</div>
			<div className="rating">
				<i className="fa fa-thumbs-up" style={{'backgroundColor':'#57ff41'}}> Like</i>
				<i className="fa fa-thumbs-down" style={{'backgroundColor':'#ff6e6e'}}> Dislike</i>
			</div>
		</div>
	);
}

export default PoemDetails;