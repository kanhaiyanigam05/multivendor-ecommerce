"use client";
import {
  AllCommunityModule,
  ModuleRegistry,
  themeQuartz,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useState } from "react";
import Button from "./Button";
ModuleRegistry.registerModules([AllCommunityModule]);

const myTheme = themeQuartz.withParams({
  checkboxCheckedBackgroundColor: "black",
  checkboxCheckedShapeColor: "yellow",
});

const Table = ({
  data,
  columns,
  view = null,
  edit = null,
  destroy = null,
}) => {
  const theme = useMemo(() => {
    return myTheme;
  }, []);
  const rowSelection = useMemo(() => {
    return {
      mode: "multiRow",
    };
  }, []);
  const hasAction = view || edit || destroy;
  const baseColumns = columns.map((col) => ({
    ...col,
    flex: 1, // allows equal flexible width distribution
    autoHeight: true, // 👈 key setting for auto row height
    cellStyle: { whiteSpace: 'normal' }, // allow text wrapping
  }));
  
  const [colDefs, setColDefs] = useState([
    ...baseColumns,
    hasAction && {
      headerName: "Action",
      field: "actions",
      cellRenderer: (params) => {
        const { data } = params;

        return (
          <div className="flex gap-2 items-center h-full">
            {view && (
              <Button type={'button'} onClick={(e) => view(e, data)}>
                <i className="fa fa-eye"></i>
              </Button>
            )}
            {edit && (
              <Button type={'button'} onClick={(e) => edit(e, data)} variant="success">
                <i className="fa fa-pencil"></i>
              </Button>
            )}
            {destroy && (
              <Button type={'button'} onClick={(e) => destroy(e, data)} variant="danger">
                <i className="fa fa-trash"></i>
              </Button>
            )}
          </div>
        );
      },
      suppressMenu: true,
      sortable: false,
      filter: false,
      width: 150,
      pinned: "right", // optional
      flex: 1,
    },

    // { field: "vendor" }
  ].filter(Boolean));
  return (
    <div className={"w-full min-h-125"}>
      <AgGridReact
        rowData={data}
        columnDefs={colDefs}
        rowSelection={rowSelection}
        domLayout="autoHeight"
        theme={theme}
      />
    </div>
  );
};

export default Table;
