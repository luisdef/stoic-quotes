import mongoose, { Schema, Document, Model } from "mongoose";

export interface IQuote extends Document {
  text: string;
  author: string;
}

const QuoteSchema: Schema = new Schema({
  text: { type: String, required: true },
  author: { type: String, required: true },
});

const Quote: Model<IQuote> =
  mongoose.models.Quote ||
  mongoose.model<IQuote>("Quote", QuoteSchema, "quote");

export default Quote;
