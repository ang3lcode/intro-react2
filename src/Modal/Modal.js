import ReactDOM from 'react-dom';
import React from 'react';

export function Modal({children}){
    return ReactDOM.createPortal(
    <div className="Modal">
        {children}
    </div>,
    document.getElementById('modal'));
}
