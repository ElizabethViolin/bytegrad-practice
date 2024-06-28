import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessages, setErrorMessages] = useState("");

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(
  //     "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
  //   )
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error();
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setFeedbackItems(data.feedbacks);
  //       setIsLoading(false);
  //     })
  //     .catch(() => {
  //       setErrorMessages("Something went wrong.");
  //       setIsLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    const fetchFeedbackItems = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        // network error, not 2xx response, or JSON parsing error
        setErrorMessages("Something went wrong.");
        setIsLoading(false);
      }

      setIsLoading(false);
    };

    fetchFeedbackItems();
  }, []);

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}

      {errorMessages && <ErrorMessage message={errorMessages} />}

      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
