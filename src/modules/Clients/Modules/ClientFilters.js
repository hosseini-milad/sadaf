import StyleInput from "../../../components/Button/Input";
import StyleSelect from "../../../components/Button/AutoComplete";
import { useEffect, useState } from "react";

function ClientFilters(props) {
  const category = props.filters && props.filters.category;
  const [query,setQuery] = useState()
  return (
    <div className="user-filter">
      <div className="serach-input">
        <StyleInput
          title="جستجو" class="hiddenMobile"
          direction={props.lang.dir}
          action={(e) => setQuery({prop:"search", value:e})}
        />
        
        <StyleSelect
          title="فعال" class="hiddenMobile"
          options={["فعال","غیرفعال"]}
          direction={props.lang.dir}
          action={(e) => props.setFilters("fill", e)}

        />

        <i className="tableIcon fas fa-ellipsis-v"></i>
      </div>
      
    </div>
  );
}
export default ClientFilters
