import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import TableSummaryRowData from './TableSummaryRowData';
import '../css/TableSummary.css'

export default function TableSummary({data}) {

    const reduceHelper = (region) => {
        return data.reduce((acc, curr) => {
            if (acc.region === undefined && curr.region === region) {
                acc.region = region;
                acc.model = "sum";
                acc.sales = curr.sales;
            } else if (curr.region === region) {
                acc.sales = acc.sales + curr.sales;
            }
            return acc;
        },{})
    };
    const dataSummary = () => data.reduce((acc, curr, index, arr) => {
        var updateAcc = [...acc];
        if (index !== 0 && curr.region !== arr[index - 1].region) {
            updateAcc.push(reduceHelper(arr[index - 1].region));
        }
        updateAcc.push(curr);
        if (index === arr.length - 1) {
            updateAcc.push(reduceHelper(arr[index - 1].region));
        }
        return updateAcc;
    }, [])
    // console.log(dataSummary());

    return (
    <table>
        <thead>
            <tr>
                <th>region</th>
                <th>model</th>
                <th>sales</th>
            </tr>
        </thead>
        <tbody>
            {data.length === 0 ?
                null
                :
                dataSummary().map((ele) => {
                    return <TableSummaryRowData ele={ele} key={uuidv4()} />
                })
            }
        </tbody>
    </table>
    )
}
