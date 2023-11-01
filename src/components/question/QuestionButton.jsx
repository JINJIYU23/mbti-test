import styles from "../../App.module.css";

const QuestionButton = (props) => {
    return (
        <>
            <button className={styles.square_button}
            onClick={() => {
                props.type === 'first' 
                ? props.onClickButton(props.questionData[props.indexNum].type, 1) 
                : props.onClickButton(props.questionData[props.indexNum].type, 0);
            }}
            >
                {props.type === 'first'
                ? props.questionData[props.indexNum].answerA
                : props.questionData[props.indexNum].answerB}
            </button>
        </>

    );
};

export default QuestionButton;