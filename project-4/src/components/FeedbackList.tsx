import FeedbackItem from "./FeedbackItem";

const feedbackItems = [
  {
    upvoteCount: 10,
    badgeLetter: "B",
    companyName: "ByteGrad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis impedit commodi cum consequuntur reprehenderit accusantium!",
    daysAgo: 4,
  },
  {
    upvoteCount: 20,
    badgeLetter: "C",
    companyName: "Company",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis impedit commodi cum consequuntur reprehenderit accusantium!",
    daysAgo: 2,
  },
];

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
