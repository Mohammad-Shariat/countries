import { Input } from '@nextui-org/react';

const SearchInput = ({ value, onChange }) => {
  return (
    <div>
      <Input
        labelPlaceholder='Search for a country...'
        status='primary'
        width='300px'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
