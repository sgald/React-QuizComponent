import React, {Component} from 'react'

class QuizQuestion extends Component {

    render(){

        let quiz_question = this.props.quiz_question;

       return(
           <main>
                <section>
                    <p>{quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        <li>{quiz_question.answer_options[0]}</li>
                    </ul>
                </section>
            </main>
       )
    }

}

export default QuizQuestion