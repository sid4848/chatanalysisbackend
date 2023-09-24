import EngagementData from "../models/Engagement.js";

export const getEngagementData = async (req, res) => {
  try {
    const chatData = await EngagementData.find({}, { _id: 0 });
    res.json(chatData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
