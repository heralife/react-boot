import Table from 'react-bootstrap/Table'

export default function DesignSpecTable({ specs }) {
  if (!specs) return null

  const specRows = [
    { label: 'Package Type', value: specs.type },
    { label: 'Dimensions', value: specs.dimensions },
    { label: 'Pin Count', value: specs.pinCount },
    { label: 'Pitch', value: specs.pitch },
    { label: 'Substrate Material', value: specs.material },
    { label: 'Die Size', value: specs.dieSize },
    { label: 'Wire Bond Type', value: specs.wireBond },
    { label: 'Encapsulation', value: specs.encapsulation },
  ].filter(row => row.value !== undefined)

  return (
    <Table bordered hover responsive className="mb-0">
      <thead>
        <tr className="table-light">
          <th style={{ width: '35%' }}>Parameter</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {specRows.map((row, i) => (
          <tr key={i}>
            <td className="fw-semibold text-secondary">{row.label}</td>
            <td>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
