export const removeRow = (removedRowData) => ({
    type: 'REMOVE_ROW',
    payload: removedRowData,
  });
  
  export const addRow = (newRow) => {
    return {
      type: 'ADD_ROW',
      payload: newRow,
    };
  };

  export const addRows = (newRows) => {
    return {
      type: 'ADD_ROWS',
      payload: newRows,
    };
  };