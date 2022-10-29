import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { DATA } from "./data";
import { Button, LinearProgress, Typography } from "@mui/material";

import "./style.css";

export const Quiz = () => {
	const [currQues, setCurrQues] = useState(0);
	const [score, setScore] = useState(0);
	const [inCorrectScore, setInCorrectScore] = useState(10);
	const [isCorect, setIsCorrect]=useState(false)

	//only questions
	const question = [...DATA];

	//for getting answers
	let answer = question[currQues].correct_answer;

	const handleNext = () => {
		const nextquestion = currQues + 1;
		setCurrQues(nextquestion);
	};

	const handleSelect = (answer) => {
		setIsCorrect(true)
		if (answer === question[currQues].correct_answer) {
			let scores = score + 1;
			let correct_score_percent = (scores / question.length) * 100;
			setScore(correct_score_percent);
		} else {
		}
	};

	return (
		<div>
			<div className="app">
				<h4>Questions {currQues + 1} of 20 </h4>
				<p>Category:{question[currQues].category}</p>
				<StarIcon />
				<StarIcon />
				<StarIcon />
				<StarBorderIcon />
				<StarBorderIcon />
				<div className="question-section">{question[currQues].question}</div>

				<div className="incorrect-answer-seection">
					{question[currQues].incorrect_answers.map((incorrect_answer) => {
						return (
							<div>
								<Button
								variant="contained"
								style={{ margin: 5, display: "flex"}}
								onClick={() => handleSelect(incorrect_answer)}
								disabled={isCorect}
								>
								{incorrect_answer}
								</Button>
							</div>
						);
					})}
				</div>
				<div className="correct-answer-options">
					<Button
						style={{ margin: 5, display: "flex" }}
						onClick={() => handleSelect(answer)}
					>
						{answer}
					</Button>
				</div>

				<Button
					style={{ marginLeft: 180, marginTop: 20 }}
					onClick={() => handleNext()}
				>
					NEXT QUESTION
				</Button>

				<LinearProgress
					value={score}
					color="success"
					variant="determinate"
					disbaled={false}
					style={{
						height: 30,
						width: "50%",
						marginLeft: 50,
						marginTop: 80,
					}}
				/>
				<LinearProgress
					value={inCorrectScore}
					color="primary"
					variant="determinate"
					style={{
						height: 30,
						width: "50%",
						marginLeft: 50,
						marginTop: 10,
					}}
				/>

				<LinearProgress
					color="secondary"
					variant="determinate"
					style={{
						height: 30,
						width: "50%",
						marginLeft: 50,
						marginTop: 10,
					}}
				/>
				<Typography style={{ marginLeft: 50 }}>Max Score</Typography>
			</div>
		</div>
	);
};
