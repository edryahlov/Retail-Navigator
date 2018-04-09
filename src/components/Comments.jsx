import React, {Component} from 'react';

class Comments extends Component {
    render() {
        return(
            <div>
                {Object.keys(this.props).map(key => {
                    const {created, author, message} = this.props[key]
                    return (
                        <div key={created+author} className="comment">
                            <p>
                                <b className="comment__author">{author}</b><br/>
                                <span className="comment__created">{created}</span>
                            </p>
                            <p className="comment__message">{message}</p>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Comments