import './styles.css';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input placeholder='Digite a pesquisa!' className='text-input' onChange={handleChange} type="search" value={searchValue} />
  );
}