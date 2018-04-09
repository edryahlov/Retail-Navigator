import React, {Component} from 'react';

import Comments from './Comments'
import CommentsForm from './CommentsForm'

class Panel extends Component {
    render() {
        const {id, period, tradepoint, promouter, additional_payments} = this.props
        let comments = this.props.comments||{}
        comments = Object.keys(comments).map(key => comments[key])

        return(
            <div id="right-panel" className="panel">
                <div className="panel__inner">
                    <button id="close-panel-bt">Закрыть</button><br/><br/>

                    <p><b>Период:</b> {period}</p>
                    <p><b>Торговая точка:</b><br/>{tradepoint}</p>
                    <p><b>Промоутер:</b><br/>{promouter}</p>
                    <p><b>Доп. выплаты:</b> {additional_payments}</p>
                    <br/><br/>

                    <p className="panel__comments-header">Комментарии:</p>

                    {comments.length > 0 ? <Comments {...comments}/> : null}
                    <CommentsForm lineId={id}/>
                </div>
            </div>
        )
    }
}

export default Panel