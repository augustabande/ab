/* global SimplybookWidget */
import React, { useEffect, useRef } from 'react';

function BookingWidget() {
    const widgetContainerRef = useRef(null);
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = "//widget.simplybook.it/v2/widget/widget.js";
        script.onload = () => {
            new SimplybookWidget({"widget_type":"iframe","url":"https:\/\/augustabandeweb.simplybook.it","theme":"default","theme_settings":{"timeline_hide_unavailable":"1","hide_past_days":"0","timeline_show_end_time":"0","timeline_modern_display":"as_slots","sb_base_color":"#4f5f6c","display_item_mode":"block","booking_nav_bg_color":"#4f5f6c","body_bg_color":"#f3f8fc","sb_review_image":"","dark_font_color":"#212528","light_font_color":"#ffffff","btn_color_1":"#b9c4ce","sb_company_label_color":"#ffffff","hide_img_mode":"1","show_sidebar":"1","sb_busy":"#c7b3b3","sb_available":"#ebddde"},"timeline":"modern","datepicker":"top_calendar","is_rtl":false,"app_config":{"clear_session":0,"allow_switch_to_ada":0,"predefined":{"provider":"2","service":"2"}},"container_id":"sbw_9mtuec"});
        };
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script);
        };
    }, []);
    return (
       <div id="sbw_9mtuec" ref={widgetContainerRef}></div>
    );
}

export default BookingWidget;
