import Select from 'react-select';

const Filter = ({ selectedOption, setSelectedOption, options }) => {
  return (
    <div className="select-box row">
      <Select
        className="react-select-container   "
        placeholder="10 by default"
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        theme={theme => ({
          ...theme,
          borderRadius: '10px',

          colors: {
            ...theme.colors,
            primary25: '#99876f',
            primary: '#827717 ',
            neutral0: '#ebeddf',
          },
        })}
      />
    </div>
  );
};

export default Filter;
