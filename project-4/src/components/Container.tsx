import { TFeedbackItem } from "../types/types";
import FeedbackList from "./FeedbackList";
import Header from "./Header";

type ContainerProps = {
  handleAddFeedbackItem: (text: string) => void;
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessages: string;
};

export default function Container({
  feedbackItems,
  isLoading,
  errorMessages,
  handleAddFeedbackItem,
}: ContainerProps) {
  return (
    <main className="container">
      <Header handleAddFeedbackItem={handleAddFeedbackItem} />
      <FeedbackList
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessages={errorMessages}
      />
    </main>
  );
}
