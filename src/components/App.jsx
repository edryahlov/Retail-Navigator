import React, {Component} from 'react';
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import Table from './Table'
import Panel from './Panel'

import panelData from '../panelData'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {id: 0}
        this.panelTotalWidth = 340;
    }
    componentDidMount() {
        $('.right-panel-link').panelslider({
            bodyClass: 'ps-active-right',
            clickClose: false,
        })
        $('#close-panel-bt').click(() => {
            $.panelslider.close();
        })

        const self = this
        $("#right-panel").on('clickedId', (e, id) => {
            self.sendDataToPanel(id)
        })
        window.onscroll = () => {
            let scrolled = window.pageXOffset || document.documentElement.scrollRight || 0
            let translateX = this.panelTotalWidth + scrolled
            document.getElementById("right-panel").style.transform = `translateX(${translateX}px)`
        }
    }
    sendDataToPanel = id => {
        const mock = new MockAdapter(axios)
        mock.onGet(/\/rest-api\/v1\/distribution\/\d+/).reply(200, {
            panelData
        })
        axios.get(`/rest-api/v1/distribution/${id}`).then(response => {
            const {pid, period, tradepoint, promouter, additional_payments, comments} = response.data.panelData.find(el => el.id === id)
            this.setState({pid, period, tradepoint, promouter, additional_payments, comments})
        });
        this.setState({id})
    }
    render() {
        return(
            <div>
                <Table/>
                <Panel {...this.state}/>
            </div>
        )
    }
}

export default App