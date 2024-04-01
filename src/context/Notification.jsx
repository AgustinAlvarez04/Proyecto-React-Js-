import { createContext, useContext, useState } from "react";

const Notification = ({message, severity}) => {

    const background = {
        success: 'green',
        error: 'red',
        warning: 'orange',
        info: 'blue',
    }

    const notificationStyles = {
        position: 'absolute',
        top: 100,
        right: 30,
        padding: '5px',
        backgroundColor: background[severity] || background.default,
        color: 'white',
    }


    if(message === '') return;
    return (
        <>
            <h1 style={notificationStyles}>{message}</h1>
        </>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {

    const [message, setMensaje] = useState('')
    const [severity, setSeverity] = useState('success')

    const setNotification = (sev, msg) => {
        setMensaje(msg)
        setSeverity(sev)
        setTimeout(()=>{
            setMensaje('')
        }, 1500)
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification message={message} severity={severity} />
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}
