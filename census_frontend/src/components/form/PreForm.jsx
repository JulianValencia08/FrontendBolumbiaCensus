import { useState} from "react";
import { Question, RadioButtonQuestion, CheckboxQuestion } from "../common/Question";
import { surveyLabels, optionsQuestion } from "../../utils/QuestionPerson1";

const PreForm = () => { 

    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    const handleNumberOfPeopleChange = (e) => {
      setNumberOfPeople(parseInt(e.target.value, 10));
    };

    const handlePhoneNumberChange = (e) => { 
        setPhoneNumber(e.target.value);
    };

    const handleCheckboxChange = (selectedOption) => {
        if (selectedOptions.includes(selectedOption)) {
            setSelectedOptions(selectedOptions.filter((select) => select !== selectedOption));
        } else {
            setSelectedOptions([...selectedOptions, selectedOption]);
        }
    };

    const handleRadioButton = (selectedOption) => {
        setSelectedOption(selectedOption);
    };
    
    return (
        <div> 
            <form action="" className='max-w-[500px] w-full mx-auto px-8'>
                {/* falta poner los checkbox */}
                <Question label={surveyLabels.question1}
                    placeholder='Ej: 3' value={numberOfPeople} onChange={handleNumberOfPeopleChange} />
                <CheckboxQuestion label={surveyLabels.question2}
                    options={optionsQuestion.optionsQuestion2} selectedOptions={selectedOptions} onCheckboxChange={handleCheckboxChange} 
                />
                <Question label={surveyLabels.question3}
                    placeholder={'+57 300 123 4567'} value={phoneNumber} onChange={handlePhoneNumberChange} 
                />
                <RadioButtonQuestion label={surveyLabels.question4}
                    options={optionsQuestion.question3Options} selectedOption={selectedOption} onRadioChange={handleRadioButton}
                />
                <div>
                    <p className="font-bold">{surveyLabels.paragraph5}</p>
                    <p className="font-bold">{surveyLabels.question5} </p>
                    <Question label='First Name' 
                        placeholder='Ej: 3' value={numberOfPeople} onChange={handleNumberOfPeopleChange} />
                    <Question label='Last Name' 
                        placeholder='Ej: 3' value={numberOfPeople} onChange={handleNumberOfPeopleChange} />
                </div>
                <RadioButtonQuestion label={surveyLabels.question6} 
                        options={optionsQuestion.optionsQuestion6} selectedOption={selectedOption} onRadioChange={handleRadioButton}
                />
                <Question label={surveyLabels.question7}
                    placeholder='Ej: 3' value={numberOfPeople} onChange={handleNumberOfPeopleChange} />
                  
                <button className='font-bold w-full my-5 py-2 shadow-lg bg-principal-orange shadow-teal-500/10 hover:bg-secondary-orange' type="submit" > Continuar </button>
                <button className='font-bold w-full my-5 py-2 shadow-lg bg-principal-blue shadow-teal-500/10 hover:bg-secondary-blue' type="submit" > Guardar </button>
            </form>  
        </div>
    )
} 

export { PreForm }