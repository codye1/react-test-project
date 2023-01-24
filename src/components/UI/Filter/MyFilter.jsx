
import React, { useMemo, useRef, useState } from "react";
import MyInput from "../input/MyInput";
import MySelect from "../select/MySelect";




const MyFilter = ({filter,setFilter}) => {
    return (
        <div>
          <MyInput
            value={filter.query}
            onChange={e => setFilter({...filter,query: e.target.value})}
            placeholder='Поиск...'
          />
          <MySelect
            value={filter.sort}
            onChange={selectedSort=>setFilter({...filter,sort: selectedSort})}
            defaultValue='Сортировка'
            option={[
              {value:'title', name:'По названию'},
              {value:'body', name:'По описанию'}
            ]}
          />
      </div>

    );
};

export default MyFilter;