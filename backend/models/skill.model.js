import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      default: "Frontend",
    },
  },
  { timestamps: true }
);

const Skill = mongoose.model("Skill", skillSchema);
export default Skill;
