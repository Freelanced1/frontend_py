import React, { useState } from 'react';
import budget from './budget.gif';
import { useNavigate } from 'react-router-dom';

function TimelineBudgetForm() {
  const [timeline, setTimeline] = useState(null);
  const [deadline, setDeadline] = useState('');
  const [budget, setBudget] = useState(null);
  const [budgetValue, setBudgetValue] = useState('');

  const navigate = useNavigate();

  const handleTimelineChange = (option) => {
    setTimeline(option);
  };

  const handleDeadlineChange = (event) => {
    setDeadline(event.target.value);
  };

  const handleBudgetChange = (option) => {
    setBudget(option);
  };

  const handleBudgetValueChange = (event) => {
    setBudgetValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Timeline:', timeline);
    console.log('Deadline:', deadline);
    console.log('Budget:', budget);
    console.log('Budget Value:', budgetValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Timeline Requirements:<span className="required">*</span></label>
          <button style={{marginRight:'20PX'}}
            type="button"
            onClick={() => handleTimelineChange('flexible')}
            className={timeline === 'flexible' ? 'active' : ''}
          >
            Flexible
          </button>
          <button
            type="button"
            onClick={() => handleTimelineChange('deadline')}
            className={timeline === 'deadline' ? 'active' : ''}
          >
            Fixed Deadline
          </button>
        {timeline === 'deadline' && (
          <label> Deadline:<span className="required">*</span>
          <input style={{marginTop:'20PX', marginLeft:'20px'}}
            type="date"
            value={deadline}
            onChange={handleDeadlineChange}
            required
          />
          </label>
        )}
      </div>
      <div>
        <label style={{marginTop:'20px'}}>
          Budget Requirements:<span className="required">*</span></label>
          <button style={{marginRight:'20px', marginBottom:'20PX' }}
            type="button"
            onClick={() => handleBudgetChange('flexible')}
            className={budget === 'flexible' ? 'active' : ''}
          >
            Flexible
          </button>
          <button 
            type="button"
            onClick={() => handleBudgetChange('budget')}
            className={budget === 'budget' ? 'active' : ''}
          >
            Fixed Budget 
          </button>
          {budget === 'budget' && (
            <label >Budget:<span className="required">*</span>
            <input style={{marginLeft:'20px'}}
              type="number"
              value={budgetValue}
              onChange={handleBudgetValueChange}
              required
            />
            </label>
          )}

      </div>
      <button type="submit" onClick={() => navigate("/navpage4")} style={{ marginTop: '30px', marginLeft: 'auto', display: 'block', width: '150px', height: '40px', backgroundColor: '#62cdbf' }}>Save & Continue</button>
    </form>
   
  );
}


const Image = () => {
	return (
	  <div className='gif' style={{marginTop: '0px'}}>
		<img src={budget} alt="budget and timeline" />
	  </div>
	);
  };

const NavPage3 = () => {
  return (
    <div>
      <div className='flex-container'>
      <div className='gif'>
        <h1 className='heading'>Budget & Timeline</h1>
        <p className='text'>Could you give us some details about your ideal timeline and budget? </p>
        <p className='text'>This will help us find the perfect freelancer who can work  within your parameters, </p> 
        <p className='text'>and deliver exceptional results!</p><Image /></div>
      <TimelineBudgetForm/>
    </div>
    </div>

  );
};

export default NavPage3;
