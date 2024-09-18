import { MenuItem, Select } from "@material-ui/core"

function MyInput(props){
    const options = props.options
    const UpdateValue=(value)=>{
        var param = props.param?props.param:'park'
        var updateQuery = `{"${param}":"${value}"}`
        var updateJson = JSON.parse(updateQuery)
        props.action((prevState) => ({
            ...prevState,
            ...updateJson,
        }))
    }
    return(
        <div className={`private-form__set m-bottom-4 ${props.class}`}>
            <div className="private-form__control-wrapper">
                <div className="UIFormControl__LabelWrapper-sc-10n543l-1 dirCog private-form__label-wrapper">
                    <label htmlFor="username" id="UIFormControl-label-2" className="private-form__label UIFormControl__InlineFormLabel-sc-10n543l-0 bOHTmT">
                    <span className="UIFormControl__StyledSpan-sc-10n543l-2 jqHBHp">
                        <i18n-string >{props.title}</i18n-string>
                    </span>
                    </label>
                </div>
                <div className="private-form__input-wrapper">
                    <Select className="form-control private-form__control login-email" 
                    defaultValue={props.defaultValue}
                    onChange={(e) =>UpdateValue(e.target.value)}>
                        {options&&options.map((opt,i)=>(
                            <MenuItem value={opt._id} key={i}>
                                {opt.title}</MenuItem>
                        ))}
                    </Select>
                </div>
                <div className="private-form__meta">
                    {props.defaultChange?
                    <div className="private-form__messages">
                        تغییرات: {props.defaultChange}
                    </div>:<></>}
                </div>
            </div>
        </div>
    )
}
export default MyInput