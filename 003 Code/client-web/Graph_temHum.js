import React, { useState, useEffect } from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Area
} from "recharts";
import axios from 'axios';

function DrawGraphTemHum () {

    const [envList, setEnvList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchEnv = async() => {
        try {
        // 요청 처음에 초기화
        setError(null);
        setEnvList([]);
        // loading 상태 true
        setLoading(true);

        const response = await axios.get('http://hanbatcom.systems:3001/env');
        setEnvList(response.data);
        } catch (e) {
        setError(e);
        }
        setLoading(false);
    };
    
    useEffect(() => {
        fetchEnv();
    }, []);
  
    return (
        <div>
            <ComposedChart 
                width={600} 
                height={300} 
                data={envList}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
            >
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip />
            <Line
                stroke="#C90000"
                strokeWidth={1}
                dataKey="tem_value"
                dot={true}
                isAnimationActive={false}
            />
            <Area stroke="#B5C1DB" fill="#D9E5FF" dataKey="hum_value" />
            <XAxis dataKey="time" />
            <YAxis />
            <Legend />
            </ComposedChart>
        </div>
    );
  }
  
  export default DrawGraphTemHum;