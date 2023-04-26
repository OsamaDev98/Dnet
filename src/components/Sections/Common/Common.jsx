import React from "react";
import "./Common.css";

const Common = () => {
  return (
    <section className="common-section section">
      <div className="hero-container">
        <div className="section-title-container">
          <h1 className="section-title">الأسئلة الشائعة للنطاقات السعودية</h1>
          <p className="section-subtitle">
            اعثر على إجابات للأسئلة المتكررة حول النطاقات السعودية.
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="tabs flex flex-col gap-8">
            <div className="tab">
              <input className="tab-radio" type="radio" id="rd1" name="rd" />
              <label
                htmlFor="rd1"
                className="tab-label flex items-center gap-2"
              >
                كيف اقوم بتسجيل نطاق سعودي جديد؟
              </label>
              <ol className="tab-content flex flex-col gap-2 list-decimal">
                <li>
                  من القائمة العلوية الرجاء الضغط على صفحة تسجيل النطاقات
                  السعودية.
                </li>
                <li>
                  يتم التأكد من توفر النطاق المطلوب و تسجيل حساب في الموقع
                </li>
                <li>ثم يتم تعبئة النموذج وإرفاق المستندات المطلوبة</li>
                <li>
                  سيقوم المسؤول الإداري بالموافقة على البريد الإلكتروني ورقم
                  الجوال
                </li>
                <li>
                  بعد ذلك يتقدم العميل بعملية الدفع لتتم المراجعة على التسجيل في
                  خلال 24 ساعة في حال كانت النطاقات (com.sa،.sa.،
                  net.sa،.pub.sa. )
                </li>
                <span>
                  أما في حال النطاقات (sch.sa ،.med.sa ،.org.sa ،.edu.sa) يجب
                  اعتماد النطاق من قبل المركز السعودي لمعلومات الشبكة.
                </span>
              </ol>
            </div>
            <div className="tab">
              <input className="tab-radio" type="radio" id="rd2" name="rd" />
              <label
                htmlFor="rd2"
                className="tab-label flex items-center gap-2"
              >
                ما هي مزايا الحصول على دومين ذو نطاق سعودي ينتهي بـ (.sa)؟
              </label>
              <ol className="tab-content flex flex-col gap-2 list-disc">
                <li>نطاق يحمل الصبغة الوطنية.</li>
                <li>
                  مصداقية الجهة المسجلة للنطاق للمواطن والمقيم بالمملكة وخارجها.
                </li>
                <li>ضمان ملكية النطاق للجهة المسجلة من اختطاف النطاقات.</li>
                <li>الدعم الفني للجهات المسجلة للنطاق من جودة الإستضافة.</li>
              </ol>
            </div>
            <div className="tab">
              <input className="tab-radio" type="radio" id="rd3" name="rd" />
              <label
                htmlFor="rd3"
                className="tab-label flex items-center gap-2"
              >
                ماهي المستندات المطلوبة لتسجيل نطاق جديد؟
              </label>
              <div className="tab-content">
                لتسجيل نطاق جديد يجب ارفاق صورة من الوثائق الرسمية لإثبات
                العلاقة بين النطاق المطلوب والاسم المسجل في الوثائق الرسمية مع
                توضيح العلاقة بينهم ليتم حجز النطاق.
              </div>
            </div>
            <div className="tab">
              <input className="tab-radio" type="radio" id="rd4" name="rd" />
              <label
                htmlFor="rd4"
                className="tab-label flex items-center gap-2"
              >
                كم مدة التسجيل لحجز نطاق جديد؟
              </label>
              <div className="tab-content">
                بعد ارفاق المستندات المطلوبة بالطريقة الصحيحة يتم مراجعة طلب حجز
                النطاق خلال ٢٤ ساعة فقط.
              </div>
            </div>
            <div className="tab">
              <input className="tab-radio" type="radio" id="rd5" name="rd" />
              <label
                htmlFor="rd5"
                className="tab-label flex items-center gap-2"
              >
                ماهو المطلوب لتجديد نطاق؟
              </label>
              <div className="tab-content">
                ينبغي تجديد النطاق المطلوب تجديده، و من ثم دفع الرسوم ليتم تجديد
                النطاق تلقائيًا.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Common;
