import React from 'react';
import './graph.css'; 


const Graph = () => {

    return (
        <div className="graph-container">
            <div className="row">
                <div className="graph-item pie-chart">
                    <h3>Daily Budget</h3>
                </div>
                <div className="graph-item pie-chart">
                    <h3>Weekly Budget</h3>
                </div>
                <div className="graph-item pie-chart">
                    <h3>Monthly Budget</h3>
                </div>
            </div>
            <div className="row">
                <div className="graph-item bar-chart">
                    <h3>Expense Trend</h3>
                </div>
            </div>
        </div>
    );
};

export default Graph;
