import StyleInput from "../../../components/Button/Input";
import StyleSelect from "../../../components/Button/AutoComplete";
import StyleDatePicker from "../../../components/Button/DatePicker";
import tabletrans from "../../../translate/tables";
import { useEffect, useState } from "react";

function CompanyFilters(props) {
  const category = props.filters && props.filters.category;
  const [query,setQuery] = useState()
  return (
    <div className="user-filter">
      <div className="serach-input">
        <StyleInput
          title="عنوان"
          direction={props.lang.dir}
          action={(e)=>setQuery({prop:"title",value:e})}
          //action={createConditionalAction("title", 4)} // Remove the parentheses here

        />
        <StyleInput
          title="مخترع" class="hiddenMobile"
          direction={props.lang.dir}
          action={(e) => setQuery({prop:"malek", value:e})}
        />
        <StyleSelect
          title="ماهیت" class="hiddenMobile"
          options={["حقیقی","حقوقی"]}
          direction={props.lang.dir}
          action={(e) => props.setFilters("mahiat", e)}

        />
        <StyleSelect
          title="فعال" class="hiddenMobile"
          options={["فعال","غیرفعال"]}
          direction={props.lang.dir}
          action={(e) => props.setFilters("fill", e)}

        />

        <StyleDatePicker
          title={tabletrans.selectDate[props.lang.lang]}
          class="filterComponent" 
          direction={props.lang.dir}
          local={props.lang.dir === "ltr" ? "en" : "fa"}
          action={(e) =>
            props.setFilters((prevState) => ({
              ...prevState,
              date: e,
            }))
          }
        />

        <i className="tableIcon fas fa-ellipsis-v"></i>
      </div>
      
    </div>
  );
}
export default CompanyFilters
