import { comments } from "../../../data/comments";
import { commentsData } from '../../../data/comments'

export default function handler(req,res) {
    console.log(commentsData)
    res.status(200).json(commentsData)
}