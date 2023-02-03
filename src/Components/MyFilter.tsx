
import React, { useMemo, useRef, useState } from "react";
import {APIPost} from "../interface";
import MyInput from "../UI/MyInput/MyInput";
import MySelect from "../UI/MySelect/MySelect";

interface Filter extends APIPost{
    filter:{
        sort:string,
        query:string
    }

    setFilter:React.Dispatch<React.SetStateAction<{
        sort: string;
        query: string;
    }>>
}

const MyFilter:React.FC<Filter> = ({filter,setFilter}) => {
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