
import { commentsData } from '../../../data/comments'

export default function handler(req, res) {

    if(req.method === 'GET') {

        const { commentId } = req.query
        console.log('commentId: '+commentId)
        const comment = commentsData.find( comment => comment.id === parseInt(commentId))
    
        res.status(200).json(comment)
    } else if(req.method === 'DELETE') {
        const { commentId } = req.query
        const deleteComment = commentsData.find( comment => comment.id === parseInt(commentId))

        const index = commentsData.findIndex( comment => {
            comment.id === parseInt(commentId)
        })

        commentsData.splice(index, 1)

        res.status(200).json(deleteComment)
    }

}