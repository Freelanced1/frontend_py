import React, { useState } from 'react';
import './App.css';

const FAQs = () => {
    const [activeFAQ, setActiveFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    const faqs = [
        {
            question: 'What is Freelanced and how does it work?',
            answer: 'FReelanced is a freelance job platform that connects freelancers with clients. It works by allowing freelancers to create a profile showcasing their skills and experience, and allowing clients to post job opportunities. Freelancers can then apply for the job and the client can hire the freelancer that best fits their needs.',
        },
        {
            question: 'How can I create a freelancer profile on Freelanced?',
            answer: 'To create a freelancer profile on FReelanced, simply sign up for an account and follow the prompts to fill out your profile information, including your skills, experience, and portfolio.',
        },
        {
            question: "How can I find freelance job opportunities on Freelanced?",
            answer: 'You can find freelance job opportunities on FReelanced by browsing through the job listings and applying for the jobs that match your skills and experience.'
        },
        {
            question: 'How does Freelanced ensure that freelancers get paid for their work?',
            answer: 'FReelanced uses a secure payment system to ensure that freelancers get paid for their work. Clients must submit payment for the work before the freelancer begins working, and the payment is held in escrow until the job is completed. Once the job is completed, the freelancer can request payment and the funds will be released from escrow'
        },
        {
            question: "How does Freelanced handle disputes between freelancers and clients?",
            answer: 'FReelanced has a dispute resolution process in place to handle any issues that arise between freelancers and clients. If a dispute arises, both parties will be asked to provide evidence and the FReelanced team will review the evidence and make a decision.',
        },
        {
            question: 'Is there a fee to use Freelanced as a freelancer?',
            answer: 'Yes, there is a fee to use Freelanced as a freelancer. Freelanced charges a small percentage fee for each job completed on the platform.'
        },
        {
            question: 'What types of freelance jobs are available on Freelanced',
            answer: 'FReelanced offers a wide range of freelance job opportunities, including graphic design, web development, writing, marketing, and more'
        },
        {
            question: 'How does Freelanced ensure that I get quality freelance candidates?',
            answer: 'Freelanced has a strict vetting process for freelance candidates to ensure that only quality candidates are able to apply for jobs. Freelancers are required to complete a profile with their skills, experience, and portfolio, and FReelanced reviews each profile before allowing freelancers to apply for jobs.'
        },
        {
            question: 'How can I communicate with freelancers on Freelanced?',
            answer: 'You can communicate with freelancers on FReelanced through the messaging system on the platform. This allows you to ask questions, clarify requirements, and provide feedback to the freelancer.'
        },
        {
            question: 'How does Freelanced protect my personal and financial information? ',
            answer: 'Freelanced uses industry-standard security measures to protect your personal and financial information. This includes encryption, secure servers, and two-factor authentication. Freelanced also uses a secure payment system to ensure that payments are processed safely and securely'
        },
    ];

    return (
        <div className="faq-container">
            <h1 className="faq-header">Frequently Asked Questions</h1>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div
                    key={index}
                    className={`faq ${activeFAQ === index ? 'active' : ''}`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="faq-question">{faq.question}</h3>
                    <p className="faq-answer">{faq.answer}</p>
                  </div>
                  
            ))}
        </div>
    </div >
    );
};

export default FAQs;
