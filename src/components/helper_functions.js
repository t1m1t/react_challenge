import React from 'react';

export function renderInput({input, label, type, meta: {error, touched}}){
    const hasError = touched && error;
    return (
        <div className={`form-group ${hasError ? 'has-danger' : ''}`}>
            <label className="form-control-label">{label}</label>
            <input {...input} className={`form-control ${hasError ? 'form-control-danger' : ''}`}type={type ? type : 'text'} />
            <div className="form-control-feedback">{hasError ? error : ''}</div>
        </div>
    )
}