import mongoose from "mongoose";

// Define the Mongoose schema
const chatDataSchema = new mongoose.Schema({
  year: Number,
  message_volume: {
    data: [
      {
        date: String,
        messages: Number,
      },
    ],
  },
  user_engagement: {
    data: [
      {
        user: String,
        messages_sent: Number,
      },
    ],
  },
  sentiment_analysis: {
    data: [
      {
        sentiment: String,
        count: Number,
      },
    ],
  },
  word_count: {
    data: [
      {
        word: String,
        frequency: Number,
      },
    ],
  },
  user_activity: {
    data: {
      January: [
        {
          day: String,
          hour: Number,
          count: Number,
        },
      ],
      February: [
        {
          day: String,
          hour: Number,
          count: Number,
        },
      ],
      March: [
        {
          day: String,
          hour: Number,
          count: Number,
        },
      ],
      April: [
        {
          day: String,
          hour: Number,
          count: Number,
        },
      ],
      May: [
        {
          day: String,
          hour: Number,
          count: Number,
        },
      ],
      June: [
        {
          day: String,
          hour: Number,
          count: Number,
        },
      ],

      // Add data for other months...
    },
  },
  topic_modeling: {
    data: [
      {
        topic: String,
        count: Number,
      },
    ],
  },
  response_time: {
    data: [
      {
        user: String,
        response_time_ms: [Number],
      },
    ],
  },
  user_message_length: {
    data: [
      {
        user: String,
        message_length: Number,
      },
    ],
  },
});

// Create the Mongoose model
const ChatData = mongoose.model("Chat", chatDataSchema);

// Export the model
export default ChatData;
