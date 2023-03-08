import React, { createContext, useContext, useState } from 'react';

// Create the BuyerFormDataContext
const BuyerFormDataContext = createContext();

// Create the FreelancerFormDataContext
const FreelancerFormDataContext = createContext();

// Define the FormDataProvider component that wraps the app and provides the context
export function FormDataProvider({ children }) {
  const [buyerFormData, setBuyerFormData] = useState({
    // Initial state for the buyer form data
  });

  const [freelancerFormData, setFreelancerFormData] = useState({
    // Initial state for the freelancer form data
  });

  // Provide the buyer form data to components
  const buyerValue = { buyerFormData, setBuyerFormData };
  // Provide the freelancer form data to components
  const freelancerValue = { freelancerFormData, setFreelancerFormData };

  return (
    <BuyerFormDataContext.Provider value={buyerValue}>
      <FreelancerFormDataContext.Provider value={freelancerValue}>
        {children}
      </FreelancerFormDataContext.Provider>
    </BuyerFormDataContext.Provider>
  );
}

// Define a custom hook to access the buyer form data
export function useBuyerFormData() {
  const context = useContext(BuyerFormDataContext);
  if (!context) {
    throw new Error(
      'useBuyerFormData must be used within a FormDataProvider with a value for buyerFormData'
    );
  }
  return context;
}

// Define a custom hook to access the freelancer form data
export function useFreelancerFormData() {
  const context = useContext(FreelancerFormDataContext);
  if (!context) {
    throw new Error(
      'useFreelancerFormData must be used within a FormDataProvider with a value for freelancerFormData'
    );
  }
  return context;
}
