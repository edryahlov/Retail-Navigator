import React, {Component} from 'react';
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

class CommentsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {newComment: ''}
    }
    newComment = e => {
        this.setState({newComment: e.target.value})
    }
    sendForm = e => {
        e.preventDefault()

        const mock = new MockAdapter(axios)
        mock.onPost(/\/rest-api\/v1\/distribution\/\d+\/comment-add/).reply(200) // 404 to test the error

        const formData = JSON.stringify({ // + needs some additional info imho - like author, date, etc...
            message: this.state.newComment
        })
        axios.post(`/rest-api/v1/distribution/${this.props.lineId}/comment-add`, formData).then(response => {
            console.log('all good')
            this.setState({newComment: ''})
        })
    }
    render() {
        return(
            <form onSubmit={this.sendForm} method="post">
                <textarea name="comment" placeholder="Ваш комментарий" onChange={this.newComment} value={this.state.newComment}/>
                <input type="submit" value="Отправить комментарий" />
            </form>
        )
    }
}

export default CommentsForm