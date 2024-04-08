import React, { useState, useEffect } from "react";
import "../scss/QuickStartPage.scss";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import Question from "../components/QuickStartPage/Question";
import QuizHeader from "../components/QuickStartPage/QuickHeader";
import GoogleAd from "../components/GoogleAd";
import ListSection from "../components/Login/ListSection";
// import initialQuestions from "../data/initialQuestion.json";
import { firstTwoRandomQuestion } from "../services";

export default function QuickStartPage() {
  const [page, setPage] = useState(1);
  const [selectedQue, setSelectedQue] = useState({});
  const [questionSet, setQuestionSet] = useState([]);

  const [buttonStates, setButtonStates] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const [disabledButtons, setDisabledButtons] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [initialQuestionSet, setInitialQuestionSet] = useState([]);

  function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await firstTwoRandomQuestion();
        setQuestionSet(data);
        setSelectedQue(data[page-1]);
        console.log(data, " ============================ ",page);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const selectedQuestionIndex = (page - 1) % questionSet.length;
    setSelectedQue(questionSet[selectedQuestionIndex]);
    
  }, [page, questionSet]);

  const handleButtonClick = (buttonIndex) => {
    setDisabledButtons(true);

    setButtonStates((prevState) => ({
      ...prevState,
      [buttonIndex]: true,
    }));

    setClicked(true);

    setTimeout(() => {
      setPage((prevPage) => prevPage + 1);
   
      setButtonStates({
        1: false,
        2: false,
        3: false,
        4: false,
      });
      setDisabledButtons(false);
    }, 1000);
  };

  if (page === 2+1) {
    navigate("/playNow");
  }

  return (
    <div className="page-container">
      <GoogleAd />
      <QuizHeader />

      <div>
        <div className="quiz-card-body">
          <Question queNumber={page} />
          <h3 className="quiz-que">{selectedQue?.question}</h3>

          <ul className="quiz-answer-list">
            {selectedQue?.answerOptions?.map((option, index) => (
              <li className="quiz-answers" key={index}>
                <button
                  className={`quiz-button ${
                    buttonStates[index + 1]
                      ? option.isCorrectAnswer
                        ? "quiz-answer-correct"
                        : "slide quiz-answer-incorrect"
                      : ""
                  }`}
                  onClick={() => handleButtonClick(index + 1)}
                  disabled={disabledButtons}
                >
                  {option.answer}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="fun-fact">
        <h4
          className="fact-heading"
          style={{ fontSize: "16px", fontFamily: "system-ui" }}
        >
          #Fun Fact
        </h4>
        <p className="fact" style={{ paddingBottom: "0px" }}>
          The first match was played between Royal Challengers Bangalore (RCB)
          and KKR in 2008.
        </p>
      </div>
      <ListSection />
    </div>
  );
}
