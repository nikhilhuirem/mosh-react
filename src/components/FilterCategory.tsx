import React from 'react';
import categories from './categories';

interface Props {
    onSelectCategories: (category: string) => void;
}

export default function FilterCategory({ onSelectCategories }: Props ) {
  return (
    <select className="form-select" aria-label="Default select example" onChange={(event) => onSelectCategories(event.target.value)}>
            <option value="">All Categories</option>
            { categories.map((category) => (
                <option value={category} key={category}>{category}</option>
            ))}
    </select>
  )
}
