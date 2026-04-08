import { useState, useEffect } from 'react'

const List = ({data, handleSubmit, reset, handleSlider, threshold}) => {
    

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    name="name"
                    placeholder="Enter the country"
                />
                <button type="submit">Submit</button>
            </form>

            <label>Minimum GDP: ${threshold.toLocaleString()}</label>
            <input 
                type="range" 
                min="0" 
                max="290000" // ~22 Trillion (USA approx)
                step="1000"    // Jump by 1 Billion
                value={threshold} 
                onChange={handleSlider} 
                style={{ width: '100%' }}
            />
            <button onClick={reset}>Reset List</button>
            <table>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>GDP per Capita in US$ (2024)</th>
                        <th>Electricity Access (%)</th>
                        <th>Total Population</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.gdp ? item.gdp.toLocaleString() : 'N/A'}</td>
                            <td>{item.elec ? `${item.elec.toFixed(2)}%` : 'N/A'}</td>
                            <td>{item.pop ? item.pop.toLocaleString() : 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default List;