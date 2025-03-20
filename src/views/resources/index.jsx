import React from 'react';
import './resources.css';

const Resources = () => {
    return (
        <div>
            {/* FAQ Section */}
            <div className="faq-container">
                <h1 className="faq-title">FAQs</h1>
                <div className="faq-card">
                    <span className="faq-question">Lorem ipsum lorem ipsum lorem ipsum?</span>
                    <span className="faq-icon">V</span>
                </div>
                <div className="faq-card">
                    <span className="faq-question">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum?</span>
                    <span className="faq-icon">V</span>
                </div>
                <div className="faq-card">
                    <span className="faq-question">Lorem ipsum lorem ipsum?</span>
                    <span className="faq-icon">V</span>
                </div>
                <div className="faq-card">
                    <span className="faq-question">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum?</span>
                    <span className="faq-icon">V</span>
                </div>
            </div>

            {/* Additional Resources Section */}
            <div className="resources-container">
                <h1 className="resources-title">Additional Resources</h1>
                <div className="resources-grid">
                    <div className="resource-item">
                        <strong>Lorem ipsum</strong>
                        <p>Lorem ipsum lorem ipsum</p>
                    </div>
                    <div className="resource-item">
                        <strong>Lorem ipsum</strong>
                        <p>Lorem ipsum lorem ipsum</p>
                    </div>
                    <div className="resource-item">
                        <strong>Lorem ipsum</strong>
                        <p>Lorem ipsum lorem ipsum</p>
                    </div>
                    <div className="resource-item">
                        <strong>Lorem ipsum</strong>
                        <p>Lorem ipsum lorem ipsum</p>
                    </div>
                    <div className="resource-item">
                        <strong>Lorem ipsum</strong>
                        <p>Lorem ipsum lorem ipsum</p>
                    </div>
                    <div className="resource-item">
                        <strong>Lorem ipsum</strong>
                        <p>Lorem ipsum lorem ipsum</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;