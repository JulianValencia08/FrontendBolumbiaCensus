const Question = ({ label, type, placeholder, value, onChange }) => { 
    return (
        <div className='flex flex-col py-2'>
          <label className='font-bold'>{label}</label>
          <input
            placeholder={placeholder}
            className='mt-2 p-2 outline-principal-orange border border-principal-orange rounded'
            type={type}
            value={value}
            onChange={onChange}
            min={1}
          />
        </div>
      );
}

const RadioButtonQuestion = ({ label, options, selectedOption, onRadioChange }) => {
  return (
    <div className='flex flex-col py-2'>
      <label className='font-bold'>{label}</label>
      {options.map((option) => (
        <div key={option}>
          <input
            type='radio'
            id={option}
            name='radioGroup'
            value={option}
            checked={selectedOption === option}
            onChange={() => onRadioChange(option)}
          />
          <label htmlFor={option} className='ml-2'>{option}</label>
        </div>
      ))}
    </div>
  );
};

const CheckboxQuestion = ({ label, options, selectedOptions, onCheckboxChange }) => {
  return (
    <div className='flex flex-col py-2'>
      <label className='font-bold'>{label}</label>
      {options.map((option) => (
        <div key={option}>
          <input
            type='checkbox'
            id={option}
            name={option}
            checked={selectedOptions.includes(option)}
            onChange={() => onCheckboxChange(option)}
          />
          <label htmlFor={option} className='ml-2'>{option}</label>
        </div>
      ))}
    </div>
  );
};

export { Question, RadioButtonQuestion, CheckboxQuestion };