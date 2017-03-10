import React from 'react';

const defaultProps = {
    photoSrc : '',
    comment  : '',
    name     : '',
    position : ''
}

const WorkersItem = props => {

    const p = Object.assign({}, defaultProps, props);

    return (
        <div className="workers-item">
            <div className="workers-item__img">
                <img className={`workers-image workers-image--${p.name.replace(/ /g,'')}`} alt={p.name} src={p.photoSrc}></img>
            </div>
            <p className="workers-item__desc">{`"${p.comment}"`}</p>
            <p className="workers-item__name">{p.name}</p>
            <p className="workers-item__position">{p.position}</p>
        </div>
    );

}

export default WorkersItem;
