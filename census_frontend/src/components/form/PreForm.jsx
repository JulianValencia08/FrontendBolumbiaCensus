import { useState, useEffect } from "react";
import axios from "axios";
import { Question, RadioButtonQuestion, CheckboxQuestion } from "../common/Question";
import { surveyLabels, optionsQuestion } from "../../utils/QuestionPerson1";

const PreForm = () => { 
    const [selectedQuestion1, setSelectedQuestion1] = useState(0);
    const [responses, setResponses] = useState([]);
    /* const [selectedQuestion2, setSelectedQuestion2] = useState([]);
    const [selectedQuestion3, setSelectedQuestion3] = useState('');
    const [selectedQuestion4, setSelectedQuestion4] = useState('');
    const [selectedQuestion5Name, setSelectedQuestion5Name] = useState('');
    const [selectedQuestion5LastName, setSelectedQuestion5LastName] = useState('');
    const [selectedQuestion6, setSelectedQuestion6] = useState('');
    const [selectedQuestion7, setSelectedQuestion7] = useState(0); */

    // const jsonForm = { 
    //     "houseHoldSize": selectedQuestion1,
    //     "firstResponses": {
    //         "question2": selectedQuestion2,
    //         "question3": selectedQuestion3,
    //         "question4": selectedQuestion4,
    //         "question5": { 
    //             "name": selectedQuestion5Name,
    //             "lastName": selectedQuestion5LastName
    //         },
    //         "question6": selectedQuestion6,
    //         "question7": selectedQuestion7
    //     }
    // }

    const handleOptionSelected = (personIndex, question, option) => {
        setResponses(prevState => {
            const newResponses = [...prevState];
            newResponses[personIndex] = { ...newResponses[personIndex], [question]: option };
            return newResponses;
        });
    };

    const handleSubmit = (e) => { 
        e.preventDefault();
        const headers = { 
            'Authorization': `${localStorage.getItem('token')}`, 
            'Content-Type': 'application/json'
        };
        axios.post('http://localhost:3000/api/v1/survey/first-person-answers', jsonForm , { headers: headers})
            .then((response) => {
                console.log(response);
                // Mandar a la siguiente página del formulario
            }, (error) => {
                console.log(error);
        });
    }

    // Question 2 - Handler
/*     const handleQuestion2Change = (selectedOption) => {
        if (selectedQuestion2.includes(selectedOption)) {
            setSelectedQuestion2(selectedQuestion2.filter((select) => select !== selectedOption));
        } else {
            setSelectedQuestion2([...selectedQuestion2, selectedOption]);
        }
    }; */

    useEffect(print(responses), [responses]);

    const renderQuestionsOtherPeople = () => {
        let questions = []; 
        for(let i = 1; i < selectedQuestion1; i++) { 
            questions.push( 
                <div>
                    <h2 className="font-bold text-center text-2xl">Person { i + 1 }</h2>
                    <form action="" className='max-w-[500px] w-full mx-auto px-8'>
                        {/* Question 5 */}
                        <div>
                            <p className="font-bold">{surveyLabels.paragraph5}</p>
                            <p className="font-bold">{surveyLabels.question5} </p>
                            <Question label='First Name' type={'text'}
                                placeholder='Ej: John' value={responses[i]?.question5Name} onChange={(e) => handleOptionSelected(i, "question5Name", e.target.value)} 
                            />
                            <Question label='Last Name' type={'text'} 
                                placeholder='Ej: Doe' value={responses[i]?.question5LastName} onChange={(e) => handleOptionSelected(i, "question5LastName", e.target.value)} 
                            />
                        </div>
                        {/* Question 6 */}
                        <RadioButtonQuestion label={surveyLabels.question6} 
                            options={optionsQuestion.optionsQuestion6} selectedOption={responses[i]?.question6} onRadioChange={(selectedOption) => handleOptionSelected(i, "question6", selectedOption) }
                        />
                        {/* Question 7 */}
                        <Question label={surveyLabels.question7} type={'number'}
                            placeholder='Ej: 20' value={responses[i]?.question7} onChange={(e) => handleOptionSelected(i, "question7", e.target.value)} 
                        />
                    </form>
                </div>
            )
        } 
        return questions;
    }


    return (
        <div>
            <h2 className="font-bold text-center text-2xl">Person 1</h2>
            <form action="" className='max-w-[500px] w-full mx-auto px-8'>
                {/* Question 1 */}
                <Question label={surveyLabels.question1} type={'number'} 
                    placeholder='Ej: 3' value={selectedQuestion1} onChange={(e) =>  setSelectedQuestion1(e.target.value)} 
                />
                {/* Question 2 */}
                <CheckboxQuestion label={surveyLabels.question2}
                    options={optionsQuestion.optionsQuestion2} selectedOptions={responses[0]?.question2} onCheckboxChange={(selectedOption) => handleOptionSelected(0, "question2", selectedOption)} 
                />
                {/* Question 3 */}
                <Question label={surveyLabels.question3} type={'text'}
                    placeholder={'+57 300 123 4567'} value={responses[0]?.question3} onChange={(e) => handleOptionSelected(0, "question3", e.target.value)} 
                />
                {/* Question 4 */}
                <RadioButtonQuestion label={surveyLabels.question4}
                    options={optionsQuestion.question3Options} selectedOption={responses[0]?.question4} onRadioChange={(selectedOption) => handleOptionSelected(0, "question4", selectedOption)}
                />
                {/* Question 5 */}
                <div>
                    <p className="font-bold">{surveyLabels.paragraph5}</p>
                    <p className="font-bold">{surveyLabels.question5} </p>
                    <Question label='First Name' type={'text'}
                        placeholder='Ej: John' value={responses[0]?.question5Name} onChange={(e) => handleOptionSelected(0, "question5Name", e.target.value)} 
                    />
                    <Question label='Last Name' type={'text'} 
                        placeholder='Ej: Doe' value={responses[0]?.question5LastName} onChange={(e) => handleOptionSelected(0, "question5LastName", e.target.value)} 
                    />
                </div>
                {/* Question 6 */}
                <RadioButtonQuestion label={surveyLabels.question6} 
                        options={optionsQuestion.optionsQuestion6} selectedOption={responses[0]?.question6} onRadioChange={(selectedOption) => handleOptionSelected(0, "question6", selectedOption) }
                />
                {/* Question 7 */}
                <Question label={surveyLabels.question7} type={'number'}
                    placeholder='Ej: 20' value={responses[0]?.question7} onChange={(e) => handleOptionSelected(0, "question7", e.target.value)} 
                />
            </form> 
            {/* Hacer el map para mostrar las preguntas de las otras personas */}
            { renderQuestionsOtherPeople() }

            <button className='font-bold w-full my-5 py-2 shadow-lg bg-principal-orange shadow-teal-500/10 hover:bg-secondary-orange' type="submit" onClick={handleSubmit} > Continuar </button>
            <button className='font-bold w-full my-5 py-2 shadow-lg bg-principal-blue shadow-teal-500/10 hover:bg-secondary-blue' type="submit"  > Guardar </button>
        </div>
    )
} 

export { PreForm }