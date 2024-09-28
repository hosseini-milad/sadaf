import errortrans from "../translate/error"

function About(props){
    const lang = props.lang?props.lang.lang:errortrans.defaultLang
    const dir = props.lang?props.lang.dir:errortrans.defaultDir
  
    return(
        <main className={dir=="rtl"?"rtlDir":""}>
            <div class="container">
                <div class="clear30"></div>
                <h1>&nbsp; درباره ما</h1>
                <div class="alert alert-grey noborder">
                    <div class="row">
                    <div class="col-sm-8">
                        <p>
                        بیجیب تریپ از دل ماجراجویی ذاتی یه تیم چشم به جهان گشود.سفر همیشه برای ما یکی از گزینه هاییه که بعد از هفته ها روزمرگی دلمون میخواد تجربه اش کنیم اما باید از جیب مایه میذاشتیم و نصف هرچی رو که تو نبرد تن به تن با کارفرما بدست آورده بودیمو خرج سفر میکردیم.پس تصمیم گرفتیم یه کار خفن کنیم که فردا روزی بعد از 120 سال دور از جونمون اگه نبودیم یه " پروژکتور به قبرت بتابه "برامون بفرستید .حالا کیه که پیشنهاد یه سفر رایگانو رد کنه؟بی برو برگرد هیچ کس!ثبت نام کن تا بقیه ی داستانو برات تعریف کنم.
                        </p>
                    </div>
                    <div class="col-sm-4">
                        <img class="img-responsive" src="/gfx/2015/content/mission_img_1.jpg"/>
                    </div>
                    </div>
                </div>
                <div class="clear20">&nbsp;</div>
                <div class="alert">
                    <div class="row">
                    <div class="col-sm-3">
                        <img class="img-responsive" src="/gfx/2015/content/mission_img_2.jpg"/>
                    </div>
                    <div class="col-sm-9">
                        <p>It always used to amaze us that people would pay thousands of dollars to companies or agents to volunteer or work in a different country. Often these companies would charge to “arrange” a volunteer stay or job whilst taking a huge chunk of the profit for themselves and to pay for their advertising whilst giving a very small percentage to the actual place in need. We feel we have made great strides in disrupting this industry. We know that given the right tools and with the power of the internet people are perfectly capable of arranging their own stay, conducting their own checks and organising their own insurance and&nbsp;transport, not only giving&nbsp;the flexibility they need but also making substantial savings to their travel budget.</p>
                        <p>
                        <strong>We believe that you get out of life what you are willing to put into it!</strong>
                        </p>
                    </div>
                    </div>
                </div>
                <div class="clear20">&nbsp;</div>
                </div>
        </main>
    )
}
export default About