import { Dropdown } from '@nextui-org/react';

function DropdownCountry() {
  return (
    <Dropdown>
      <Dropdown.Button flat>Filter by Region</Dropdown.Button>
      <Dropdown.Menu aria-label='Static Actions'>
        <Dropdown.Item key='africa'>Africa</Dropdown.Item>
        <Dropdown.Item key='america'>America</Dropdown.Item>
        <Dropdown.Item key='asia'>Asia</Dropdown.Item>
        <Dropdown.Item key='europe'>Europe</Dropdown.Item>
        <Dropdown.Item key='oceania'>Oceania</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownCountry;
