import React from 'react'

export default function TableSummaryRowData({ele}) {
  return (
    <tr>
        <td>{ele.region}</td>
        <td>{ele.model}</td>
        <td>{ele.sales}</td>
    </tr>
  )
}
