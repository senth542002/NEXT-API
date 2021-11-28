import { commentsData } from '../../../data/comments'

export default function handler(req,res) {
    
    console.log(commentsData)

    if(req.method === 'GET') {
        res.status(200).json(commentsData)
    } else if(req.method === 'POST') {
        const comment = req.body.comment
        const newComment = {
            id: Date.now(),
            text: comment
        }
        commentsData.push(newComment)

        res.status(201).json(newComment)
    }
}
