import { useState } from "react";
import Square from "./Square";
import "./tictactoe.css";

export default function Board() {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [isNext, setIsNext] = useState(true);
	const onSquareClick = (i: number) => {
		if (squares[i] || calculateWinner(squares)) {
			return;
		}
		const nextSquares = squares.slice();
		if (isNext) {
			nextSquares[i] = "X";
		} else {
			nextSquares[i] = "O";
		}
		setSquares(nextSquares);
		setIsNext(!isNext);
	};
	const winner = calculateWinner(squares);
	let status: string;
	if (winner) {
		status = `${winner} a gagné`;
	} else {
		status = `Prochain tour : ${isNext ? "X" : "O"}`;
	}
	return (
		<main className="board">
			<div className="status">{status}</div>
			<div className="board-row">
				<Square onSquareClick={() => onSquareClick(0)} value={squares[0]} />
				<Square onSquareClick={() => onSquareClick(1)} value={squares[1]} />
				<Square onSquareClick={() => onSquareClick(2)} value={squares[2]} />
			</div>
			<div className="board-row">
				<Square onSquareClick={() => onSquareClick(3)} value={squares[3]} />
				<Square onSquareClick={() => onSquareClick(4)} value={squares[4]} />
				<Square onSquareClick={() => onSquareClick(5)} value={squares[5]} />
			</div>
			<div className="board-row">
				<Square onSquareClick={() => onSquareClick(6)} value={squares[6]} />
				<Square onSquareClick={() => onSquareClick(7)} value={squares[7]} />
				<Square onSquareClick={() => onSquareClick(8)} value={squares[8]} />
			</div>
		</main>
	);
}

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}
