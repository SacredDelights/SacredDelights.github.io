import React, { useEffect, useState } from "react";
import "./Feedbacklist.css";

// 1. Define the shape of your data
interface FeedbackItem {
  timestamp: string;
  name: string;
  email: string;
  rating: string;
  message: string;
}

const FeedbackList: React.FC = () => {
  const [feedback, setFeedback] = useState<FeedbackItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Replace with your actual Web App URL from Step 1
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbz3_eblalabEE1lczbi7LAKZFxKXLza2VIF4Zs27wor4AbAQRbG9HWdefO328-N5Z3U5w/exec";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
          method: "GET",
          mode: "cors", // Explicitly ask for CORS
          redirect: "follow", // Forces browser to follow the Google redirect
          headers: {
            "Content-Type": "text/plain", // Use text/plain to avoid pre-flight CORS blocks
          },
        });

        const data = await response.json();
        setFeedback(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading feedback...</p>;

  return (
    <div className="feedback-container flex flex-col md:flex-row max-w-[1024px] justify-center bg-secondary text-white">
      {/* <h2>Latest Feedback</h2> */}
      {feedback.map((item, index) => (
        <div
          key={index}
          className="feedback-card flex-1 relative overflow-hidden p-6 md:py-12 lg:px-8 bg-cocoa"
        >
          <div className="star-rating pb-8" data-rating={item.rating}></div>
          <p className=" pb-8">"{item.message}"</p>
          <div className="flex gap-4 items-center justify-center">
            <h3>{item.name}</h3>
            <small>{new Date(item.timestamp).toLocaleDateString()}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
