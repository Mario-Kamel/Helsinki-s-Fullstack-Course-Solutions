import React from "react"

const Notification = ({message}) =>{
    const positiveStyle = {
        color: "#29B51C",
        fontSyle:'italic',
        fontSize: 30,
        border: '3px solid #29B51C',
        backgroundColor: '#D4D4D4',
        textAlign: 'center'
    }
    const negativeStyle = {...positiveStyle, color: 'red',border: '3px solid red'}
    if(message == ''){
        return(
            <></>
        )
    }
    if(message.toLowerCase().includes('added')){
        return(
            <div style={positiveStyle}>
                {message}
            </div>
        )
    }

    return(
        
        <div style={negativeStyle}>
            {message}
        </div>
        
    )
    
}

export default Notification