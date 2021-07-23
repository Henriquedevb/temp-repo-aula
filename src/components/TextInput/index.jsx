import './style.css';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <div className="input-content"> 
    <input className="input-item" onChange={handleChange} value={searchValue} type="search" placeholder="Faça uma busca"/>
    </div>
    
    )
};
