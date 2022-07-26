import { useState } from 'react';

const Filter = ({ label, title, limit, handleFilterClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openOption = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <div className="option-container">
      <div className="option-box">
        <span className="otion-label">{label}</span>
        <div className="option-header">
          {limit === 'Limit: 10' && <p>Limit: {limit}</p>}
          <svg viewBox="0 0 12 12" className="option-svg">
            <path d="M6.59406 9.17405L11.7538 4.01423C12.0821 3.68603 12.0821 3.15383 11.7538 2.82575C11.4256 2.49767 10.8935 2.49767 10.5655 2.82575L5.99993 7.39142L1.43458 2.82593C1.10635 2.49779 0.574264 2.49779 0.24617 2.82593C-0.0820567 3.15401 -0.0820567 3.68615 0.24617 4.01435L5.40591 9.17418C5.57003 9.33824 5.78492 9.42017 5.9999 9.42017C6.21498 9.42017 6.43002 9.33807 6.59406 9.17405Z"></path>
          </svg>
        </div>
        {isOpen && (
          <div className="optionListBox">
            <ul className="optionList">
              {title.map(item => (
                <li
                  onClick={() => handleFilterClick(title, item)}
                  key={item.id}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
