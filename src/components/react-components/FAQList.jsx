import './css/faqlist.css';
import { useState } from "react";

const FAQList = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const handleItemClick = (index) =>
    {
        if (expandedIndex === index)
        {
            setExpandedIndex(index);
        }
        else
        {
            setExpandedIndex(index);
        }
    };

    return (
        <div className="faq-list">
            {items.map((item, index) => (
                <div key={index} className={`faq-list-item ${index !== items.length - 1 ? 'border-bottom' : ''}`}>
                    <div
                        className="faq-list-item-header"
                        onClick={() => handleItemClick(index)}
                    >
                        <h4>{item.title}</h4>
                        <span className={expandedIndex === index ? 'icon-expanded' : 'icon-collapsed'}>
                            {expandedIndex === index
                                ? <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8 16H24" stroke="#142133" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 24V8" stroke="#142133" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8 16H24" stroke="#142133" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                        </span>
                    </div>
                    {expandedIndex === index && (
                        <div className="faq-list-item-content">
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQList;