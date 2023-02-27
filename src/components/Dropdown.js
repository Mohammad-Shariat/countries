import { Dropdown } from '@nextui-org/react';

function DropdownCountry({ value, onChange, handleFilterByRegion }) {
  return (
    <Dropdown onSubmit={handleFilterByRegion} value={value} onChange={onChange}>
      <Dropdown.Button flat>Filter by Region</Dropdown.Button>
      <Dropdown.Menu aria-label='Static Actions'>
        <Dropdown.Item key='africa' value='africa'>
          Africa
        </Dropdown.Item>
        <Dropdown.Item key='america' value='america'>
          America
        </Dropdown.Item>
        <Dropdown.Item key='asia' value='asia'>
          Asia
        </Dropdown.Item>
        <Dropdown.Item key='europe' value='europe'>
          Europe
        </Dropdown.Item>
        <Dropdown.Item key='oceania' value='oceania'>
          Oceania
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownCountry;
