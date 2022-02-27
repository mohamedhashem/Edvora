import React, { Component } from 'react';
import './item-preview.styles.scss'
const ItemPreview = () => {
    return (
        <div className='item-preview' >
            <div className='img'>
            </div>
            <div className='details'>
                <div>
                    <label className='label'> Ride id :</label>
                    <label> 002</label>
                </div>
                <div>
                    <label className='label'> Origin Station :</label>
                    <label> Here</label>
                </div>
                <div>
                    <label className='label'> Station_Path :</label>
                    <label> The path</label>
                </div>
                <div>
                    <label className='label'> Date :</label>
                    <label> Today</label>
                </div>
                <div>
                    <label className='label'> Distance :</label>
                    <label> 1</label>
                </div>

            </div>
        </div>

    );
}

export default ItemPreview;