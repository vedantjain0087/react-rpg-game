import React from 'react'
import walkSprint from './playerwalk.png'
import {connect} from 'react-redux'
function Player(props){
    return(
        <div
        style={{
            position:'relative',
            top:props.position[1],
            left:props.position[0],
            backgroundImage:`url('${walkSprint}')`,
            backgroundPosition:'0 0',
            width:'60px',
            height:'70px'
        }}>
        </div>
    )
}

function mapStateToProps(state){
    return {
        ...state.player
    }
}
export default connect(mapStateToProps)(Player)