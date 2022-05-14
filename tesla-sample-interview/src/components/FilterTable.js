import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TableSummaryRowData from './TableSummaryRowData';

export default function FilterTable({data}) {

    const [filteredData, setFilteredData] = useState(data);

    const regionOptions = data.reduce((acc, curr, index) => {
        const option = [...acc];
        if (index === 0) {
            option.push("all");
            option.push(curr.region);
        }
        if (index !== 0 && data[index-1].region !== curr.region) {
            option.push(curr.region)
        }
        return option;
    }, [])

    const modelOptions = data.reduce((acc, curr, index) => {
        const option = [...acc];
        if (index === 0) {
            option.push("all");
            option.push(curr.model);
        }
        if (!(option.includes(curr.model))) {
            option.push(curr.model);
        }
        return option;
    }, [])

    const [selectedRegionValue, setSelectedRegionValue] = useState(regionOptions[0]);

    const [selectedModelValue, setSelectedModelValue] = useState(modelOptions[0]);

    const handleRegionFilter = (event) => {
        let value = event.target.value;
        setSelectedRegionValue(value);
    }

    const handleModelFilter = (event) => {
        let value = event.target.value;
        setSelectedModelValue(value);
    }

    useEffect(() => {
        if (selectedRegionValue === "all" && selectedModelValue === "all") {
            setFilteredData(data);
        } else if (selectedRegionValue !== "all" && selectedModelValue === "all") {
            setFilteredData(data.filter(ele => ele.region === selectedRegionValue));
        } else if (selectedModelValue !== "all" && selectedRegionValue === "all") {
            setFilteredData(data.filter(ele => ele.model === selectedModelValue));
        } else {
            setFilteredData(data.filter(ele => ele.model === selectedModelValue && ele.region === selectedRegionValue));
        }
    }, [selectedRegionValue, selectedModelValue])

    return (
        <>
            <p>Region Filter
            </p>
            <select
                onChange={handleRegionFilter}
                value={selectedRegionValue}
            >
                {regionOptions.map((ele) => {
                    return <option value={ele} key={uuidv4()}>{ele}</option>
                })}
            </select>
            <p>Model Filter
            </p>
            <select
                onChange={handleModelFilter}
                value={selectedModelValue}
            >
                {modelOptions.map((ele) => {
                    return <option value={ele} key={uuidv4()}>{ele}</option>
                })}
            </select>
            <table>
            <thead>
                <tr>
                    <th>region</th>
                    <th>model</th>
                    <th>sales</th>
                </tr>
            </thead>
            <tbody>
                {filteredData.length === 0 ?
                    null
                    :
                    filteredData.map((ele) => {
                        return <TableSummaryRowData ele={ele} key={uuidv4()} />
                    })
                }
            </tbody>
        </table>
        </>
    )
}
