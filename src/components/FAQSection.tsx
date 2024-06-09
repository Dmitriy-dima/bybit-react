import React, { useState } from "react";
import "../css/FAQ.scss";
import plusIcon from "../images/plus.svg";
import minusIcon from "../images/minus.svg";

function FAQSection() {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const toggleQuestion = (index: number) => {
    const currentIndex = activeIndices.indexOf(index);
    if (currentIndex === -1) {
      setActiveIndices([...activeIndices, index]);
    } else {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    }
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-questions">
          {faqData.map((question, index: number) => (
            <div
              className="faq-question"
              key={index}
              onClick={() => toggleQuestion(index)}
            >
              <div className="faq-question_header">
                <h3>{question.title}</h3>
                <img
                  src={activeIndices.includes(index) ? minusIcon : plusIcon}
                  alt={activeIndices.includes(index) ? "minusIcon" : "plusIcon"}
                />
              </div>
              {activeIndices.includes(index) && <p>{question.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqData = [
  {
    title: "Is there an app for MacOS and Linux?",
    answer: "Yes, there are apps available for both MacOS and Linux.",
  },
  {
    title: "Is downloading the app worthwhile?",
    answer:
      "Downloading the app can provide additional features and convenience, depending on your usage.",
  },
  {
    title: "How much time can I trade on Bybit Platform without fees?",
    answer:
      "You can trade on the Bybit Platform without fees for a limited time, depending on current promotions and conditions. Please check the platform for the latest information.",
  },
  {
    title: "What is the expiration date of the welcome bonus offer?",
    answer:
      "The expiration date of the welcome bonus offer varies and is subject to change. Please refer to the terms and conditions of the offer for specific details.",
  },
  {
    title: "Can I use the app without an internet connection?",
    answer:
      "Some features of the app may be available offline, but for full functionality, an internet connection is usually required.",
  },
  {
    title: "Can I customize the app’s interface to suit my preferences?",
    answer:
      "Yes, many apps offer customization options to tailor the interface to your preferences.",
  },
];

export default FAQSection;
