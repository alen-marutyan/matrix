import React from 'react';
import {LineChart, Line, YAxis, CartesianGrid, ResponsiveContainer,} from 'recharts';
import {data} from "../../utils/data";

const ChartLine = () => {

    return (
        <>
        <ResponsiveContainer width="90%" height={200}>
            <LineChart data={data} syncId="anyId" margin={{top: 10, right: 30, left: 0, bottom: 0,}}>
                <CartesianGrid strokeWidth={3} stroke={'#282828'} horizontal={'true'} vertical={''} />
                <YAxis tick={{stroke: 'white', strokeWidth: 1}} type='number' domain={[-80, 60]} tickCount={9} dataKey='line1' stroke={''} />
                <Line strokeWidth={3} margin={{ left: 20 }} type="natural" dataKey="line1" stroke="#1ca29b" fill="#1ca29b"/>
                <Line strokeWidth={3} type="natural" dataKey="line2" stroke="#d6c68a" fill="#d6c68a"/>
                <Line strokeWidth={3} type="natural" dataKey="line3" stroke="#2c7394" fill="#2c7394"/>
            </LineChart>
        </ResponsiveContainer>
        </>
    );
};

export default ChartLine;
