import React, { useRef, useEffect, useState } from "react";

import MehvarGoal from "./MehvarGoal";
import MehvarSubject from "./MehvarSubject";
import MehvarSchedule from "./MehvarSchedule";
import env from "../../env";
import { PostReq } from "../../components/PostReq";

function MehvarDetailHolder(props) {
  const url = window.location.pathname.split("/")[2];
  const direction = "rtl";
  const lang = 'fa';
  const [error, setError] = useState({ errorText: "", errorColor: "brown" });

  const [content, setContent] = useState("");
  const [filters, setFilters] = useState({});
  const [goal, setGoal] = useState("");
  const [schedule, setSchedule] = useState("");
  const [subject,setSubject] = useState("")
  const [updateContent, setUpdateContent] = useState(0);
  const [productChange, setProductChange] = useState("");

  useEffect(()=>{initial()},[])
    const initial=async()=>{
        var result = await PostReq(
        {method:"POST",url:"/data/fetch-mehvar",
            body:{mehvarId:url}
        })
        setContent(result&&result.data)
        setGoal(result&&result.goalList)
        setSchedule(result&&result.scheduleList)
        setSubject(result&&result.subjectList)
    }
  const saveChanges=async()=>{
    var result = await PostReq(
      {method:"POST",url:"/data/update-mehvar",
          body:{id:url,...productChange}
      })
  }
  if (!content) return <div className="new-item">{env.loader}</div>;
  else
    return (
      <div className="new-item" style={{ direction: direction }}>
        <div className="create-product">
          <h4>جزئیات {content.title}</h4>
          {content ? (
            <div className="pages-wrapper">
              <MehvarSubject
                  direction={direction}
                  lang={lang}
                  schedule={schedule}
                  content={content}
                  productChange={productChange}
                  setProductChange={setProductChange}
                  setFilters={setFilters}
                />
                
              <MehvarGoal
                direction={direction}
                lang={lang} goal={goal}
                content={content}
                productChange={productChange}
                setProductChange={setProductChange}
                setUpdateContent={setUpdateContent}
                setContent={setContent}
              />
                <MehvarSchedule
                  direction={direction}
                  lang={lang}
                  schedule={schedule}
                  content={content}
                  productChange={productChange}
                  setProductChange={setProductChange}
                  setFilters={setFilters}
                />
              {/*<ProductPrice direction={direction} lang={lang} content={content} 
          productChange={productChange} setProductChange={setProductChange}/>*/}
              <div className="create-btn-wrapper">
                <div className="dense-btn">
                  <input
                    className="switch-input"
                    type="checkbox"
                    id="switch-3"
                  />
                </div>
                <div className="save-btn" onClick={() => saveChanges(false)}>
                  ذخیره
                </div>
                <div className="save-btn" onClick={() => saveChanges(true)}>
                  ذخیره و خروج
                </div>
                <div
                  className="cancel-btn"
                  onClick={() => window.history.back()}>
                  انصراف
                </div>
              </div>
            </div>
          ) : (
            <div>{env.loader}</div>
          )}
        </div>
      </div>
    );
}
export default MehvarDetailHolder;
