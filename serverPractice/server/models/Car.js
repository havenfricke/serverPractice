import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CarSchema = new Schema (
    {
        make: { type: String, required: true},
        model: { type: String, required: true},
        description: {type: String, required: true},
        year: { type: Number, required: true},
        price: { type: Number, required: true},
        imgUrl: { type: String, required: true},
        color: { type: String, required: true}
    },
    { timestamps: true, toJSON: { virtuals: true}}
)

