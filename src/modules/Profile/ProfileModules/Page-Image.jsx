import MyImage from "../../../components/Button/Image"

function PageImage(props){

    return(
        <div className="imageHolderPage">
        <MyImage title="لوگو" require={true} class="imageInput" 
            data={props.changes&&props.changes.logo}
            action={props.setChanges} param="logo"
            defaultValue={props.data&&props.data.logo}/>

        <MyImage title="اسلایدر" require={true} class="imageInput" 
            data={props.changes&&props.changes.bannerThumb}
            action={props.setChanges} param="bannerUrl" thumb="bannerThumb"
            defaultValue={props.data&&props.data.bannerThumb}/>
        
        <MyImage title="تصویر 1" require={true} class="imageInput" 
            data={props.changes&&props.changes.image1}
            action={props.setChanges} param="image1"
            defaultValue={props.data&&props.data.image1}/>
        <MyImage title="تصویر 2" require={true} class="imageInput" 
            data={props.changes&&props.changes.image2}
            action={props.setChanges} param="image2"
            defaultValue={props.data&&props.data.image2}/>
        <MyImage title="تصویر 3" require={true} class="imageInput" 
            data={props.changes&&props.changes.image3}
            action={props.setChanges} param="image3"
            defaultValue={props.data&&props.data.image3}/>
        </div>
    )
}
export default PageImage