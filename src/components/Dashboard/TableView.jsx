import React from 'react';
import { Table } from 'antd';

const TableView = ({ data = [], filters = {} }) => {
  const filteredData = data.filter((item) => {
    return (
      (!filters.user || item.user === filters.user) &&
      (!filters.category || item.category === filters.category)
    );
  });

  const columns = [
    { title: 'User', dataIndex: 'user', key: 'user' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    // { title: 'Activity', dataIndex: 'activity', key: 'activity' },
  ];

  return <Table dataSource={filteredData} columns={columns} rowKey="id" />;
};

export default TableView;
