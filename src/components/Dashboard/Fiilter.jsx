import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const Filters = ({ filters, onFilterChange }) => {
  return (
    <div>
      <Select
        value={filters.user}
        onChange={(value) => onFilterChange('user', value)}
        placeholder="Select User"
      ></Select>
      <Select
        value={filters.category}
        onChange={(value) => onFilterChange('category', value)}
        placeholder="Select Category"
      ></Select>
    </div>
  );
};

export default Filters;
