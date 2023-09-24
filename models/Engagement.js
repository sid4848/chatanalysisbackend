import mongoose from "mongoose";

// Define the engagement schema
const engagementSchema = new mongoose.Schema({
  number: Number,
  message_engagement: {
    data: [
      {
        user: String,
        messages_sent: Number,
        sentiment: String,
        media_count: Number,
        topic: [String],
      },
    ],
  },
  call_engagement: {
    data: [
      {
        user: String,
        incoming_count: Number,
        outgoing_count: Number,
        missed_count: Number,
      },
    ],
  },
});

// Create a model using the engagement schema
const EngagementData = mongoose.model("Engagement", engagementSchema);
export default EngagementData;
