import { commentsData } from "../../data/comments"

function Comment({ comment }) {

    return (
        <div key={comment.id}>
            {comment.id} - {comment.text}
        </div>
    )
}

export default Comment

export async function getStaticProps(context) {

    const { params} = context
    const commentId = params.commentId
    
    const comment = commentsData.find(comment => comment.id === parseInt(commentId))
    console.log(comment)

    return {
        props: {
            comment,
        },
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { commentId: '1'}},
            { params: { commentId: '2'}},
            { params: { commentId: '3'}},
        ],
        fallback: false,
    }
}