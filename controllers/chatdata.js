import ChatData from "../models/ChatData.js";

export const getChataData = async (req, res) => {
  try {
    const chatData = await ChatData.find({}, { _id: 0 });
    res.json(chatData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
