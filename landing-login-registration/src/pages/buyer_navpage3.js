import React, { useState } from 'react';
import budget from './budget.gif';
import { useNavigate } from 'react-router-dom';

function TimelineBudgetForm() {
  var [timeline, setTimeline] = useState(null);
  var [deadline, setDeadline] = useState('');
  var [budget, setBudget] = useState(null);
  var [budgetValue, setBudgetValue] = useState('');

  var navigate = useNavigate();

  var handleTimelineChange = (option) => {
    setTimeline(option);
  };

  var handleDeadlineChange = (event) => {
    setDeadline(event.target.value);
  };

  var handleBudgetChange = (option) => {
    setBudget(option);
  };

  var handleBudgetValueChange = (event) => {
    setBudgetValue(event.target.value);
  };

  var handleSubmit = (event) => {
    event.preventDefault();
    if (timeline && (timeline === 'flexible' || (timeline === 'deadline' && deadline))) {
      if (budget && (budget === 'flexible' || (budget === 'budget' && budgetValue))) {
        console.log('Timeline:', timeline);
        console.log('Deadline:', deadline);
        console.log('Budget:', budget);
        console.log('Budget Value:', budgetValue);
        navigate('/buyer_navpage4');
      } else {
        alert('Please fill in all required fields.');
      }
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <form className='form-main' onSubmit={handleSubmit}>
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
            type="button" style={{marginRight:'20px'}}
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
            type="button" style={{marginRight:'20px'}}
            onClick={() => handleBudgetChange('budget')}
            className={budget === 'budget' ? 'active' : ''}
          >
            Fixed Budget 
          </button>
          {budget === 'budget' && (
            <label >Budget:<span className="required">*</span>
            <input style={{marginLeft:'0px'}}
              type="number"
              value={budgetValue}
              onChange={handleBudgetValueChange} placeholder="Enter your budget"
              required
            />
            </label>
          )}

      </div>
      <button type="submit" style={{ marginTop: '30px' }}>Save & Continue</button>
    </form>
   
  );
}


var Image = () => {
	return (
	  <div className='gif' style={{marginTop: '0px'}}>
		<img src={budget} alt="budget and timeline" />
	  </div>
	);
  };

var BNavPage3 = () => {
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

export default BNavPage3;
