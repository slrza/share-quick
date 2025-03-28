import FAQListItem from "./FAQListItem";

const FAQ = () => {
  return (
    <section id="faq" className="py-32 px-8 bg-[#f8f9fc]">
      <div className="py-32 px-8 max-w-3xl mx-auto">
        <p className="text-sm uppercase font-medium text-center text-primary mb-4">
          FAQ
        </p>
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <ul className="max-w-lg mx-auto">
          {[
            {
              question: "What do i get exactly?",
              answer: "Loreum Ipsum",
            },
            {
              question: "Can i get a refund?",
              answer: "Loreum Ipsum",
            },
            {
              question: "I have another question",
              answer: "Loreum Ipsum",
            },
          ].map((qa) => (
            <FAQListItem key={qa.question} qa={qa} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
