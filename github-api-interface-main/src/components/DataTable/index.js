import { DataGrid } from '@mui/x-data-grid';


export default function DataTable({rows, columns, pageSize, loading, sx}) {
  return (
    <div style={{ height: 400, width: '60%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        loading={loading}
        sx={sx}
      />
    </div>
  );
}