import FaqItem from "../FaqItem";
import './index.css'
const Faqs = (props) => {
  const {faqsList} = props;
  return (
    <div className="faq-bg">
      <div className="faq-container">
        <h1 className="faq-title">FAQs</h1>
        <ul>
          {faqsList.map((eachData) => (
            <FaqItem key={eachData.id} faqData={eachData} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faqs;
