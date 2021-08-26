import React from 'react'
import { Link } from 'gatsby'
import fotLogo from '../../assets/images/curriki_new_logo 1.png'
import './style.scss'

const Footer = ({data}) => {
    return (
      <div>
      <div className="footer-section"> 
       <div className="footer-container">
       <div className="footer-content">
       <div className="logo">
       <img src={fotLogo}></img>
       </div>
       <div className="col-1">
        <ul>
         <li>
           <a href="#">About</a>
         </li>
         <li>
           <a href="#">Blog</a>
         </li>
         <li>
           <a href="#">Webinars</a>
         </li>
        </ul>
       </div>
       <div className="col-2">
        <ul>
         <li>
           <a href="#">Press</a>
         </li>
         <li>
           <a href="#">Providers</a>
         </li>
         <li>
           <a href="#">Dnate</a>
         </li>
        </ul>
       </div>
       <div className="col-3">
        <ul>
         <li>
           <a href="#">Contact</a>
         </li>
         <li>
           <a href="#">Privacy Policy</a>
         </li>
         <li>
           <a href="#">Terms of Service</a>
         </li>
        </ul>
       </div>
       


       </div>
       </div>
      </div>
      <div className="bottom-footer text-center">
       <p className="pt-4"> <a href="http://curriki.org">curriki.org </a>2004-2021 © Curriki a 501.c.3 Nonprofit</p>
      </div>
      </div>
      // <footer className="et-l et-l--footer">
      //   <div className="et_builder_inner_content et_pb_gutters3">
      //     <div className="et_pb_section et_pb_section_0_tb_footer et_pb_with_background et_section_regular">
      //       <div className="et_pb_row et_pb_row_0_tb_footer et_pb_equal_columns et_pb_gutters2 et_pb_row_5col">
      //         <div className="et_pb_column et_pb_column_1_5 et_pb_column_0_tb_footer  et_pb_css_mix_blend_mode_passthrough">
      //           <div className="et_pb_module et_pb_image et_pb_image_0_tb_footer">
      //             {' '}
      //             <span className="et_pb_image_wrap ">
      //               <noscript>
      //                 &lt;img
      //                 src="https://dev.curriki.org/wp-content/uploads/2021/04/curriki_logo_white.svg"
      //                 alt="" title="curriki_logo_white" height="auto"
      //                 width="auto" /&gt;
      //               </noscript>
      //               <img
      //                 className=" lazyloaded"
      //                 src="https://dev.curriki.org/wp-content/uploads/2021/04/curriki_logo_white.svg"
      //                 data-src="https://dev.curriki.org/wp-content/uploads/2021/04/curriki_logo_white.svg"
      //                 alt=""
      //                 title="curriki_logo_white"
      //                 height="auto"
      //                 width="auto"
      //               />
      //             </span>
      //           </div>
      //         </div>{' '}
      //         {/* .et_pb_column */}
      //         <div className="et_pb_column et_pb_column_1_5 et_pb_column_1_tb_footer  et_pb_css_mix_blend_mode_passthrough">
      //           <div className="et_pb_module et_pb_text et_pb_text_0_tb_footer  et_pb_text_align_left et_pb_bg_layout_light">
      //             <div className="et_pb_text_inner">
      //               <p>
      //                 <a href="/about">About</a>
      //               </p>
      //               <p>
      //                 <a href="/blog">Blog</a>
      //               </p>
      //               <p>
      //                 <a href="/ webinars"> Webinars</a>
      //               </p>
      //             </div>
      //           </div>{' '}
      //           {/* .et_pb_text */}
      //         </div>{' '}
      //         {/* .et_pb_column */}
      //         <div className="et_pb_column et_pb_column_1_5 et_pb_column_2_tb_footer  et_pb_css_mix_blend_mode_passthrough">
      //           <div className="et_pb_module et_pb_text et_pb_text_1_tb_footer  et_pb_text_align_left et_pb_bg_layout_light">
      //             <div className="et_pb_text_inner">
      //               <p>
      //                 <a href="/press">Press</a>
      //               </p>
      //               <p>
      //                 <a href="/providers">Providers</a>
      //               </p>
      //               <p>
      //                 <a href="/donate">Donate</a>
      //               </p>
      //             </div>
      //           </div>{' '}
      //           {/* .et_pb_text */}
      //         </div>{' '}
      //         {/* .et_pb_column */}
      //         <div className="et_pb_column et_pb_column_1_5 et_pb_column_3_tb_footer  et_pb_css_mix_blend_mode_passthrough">
      //           <div className="et_pb_module et_pb_text et_pb_text_2_tb_footer  et_pb_text_align_left et_pb_bg_layout_light">
      //             <div className="et_pb_text_inner">
      //               <p>
      //                 <a href="/contact">Contact</a>
      //               </p>
      //               <p>
      //                 <a href="/privacy-policy">Privacy policy</a>
      //               </p>
      //               <p>
      //                 <a href="/terms-of-service/">Terms of service</a>
      //               </p>
      //             </div>
      //           </div>{' '}
      //           {/* .et_pb_text */}
      //         </div>{' '}
      //         {/* .et_pb_column */}
      //         <div className="et_pb_column et_pb_column_1_5 et_pb_column_4_tb_footer  et_pb_css_mix_blend_mode_passthrough et-last-child">
      //           <ul className="et_pb_module et_pb_social_media_follow et_pb_social_media_follow_0_tb_footer clearfix  et_pb_text_align_right et_pb_text_align_center-tablet et_pb_bg_layout_light">
      //             <li className="et_pb_social_media_follow_network_0_tb_footer et_pb_social_icon et_pb_social_network_link  et-social-twitter et_pb_social_media_follow_network_0_tb_footer">
      //               <a
      //                 href="https://twitter.com/curriki"
      //                 className="icon et_pb_with_border"
      //                 title="Follow on Twitter"
      //                 target="_blank"
      //               >
      //                 <span
      //                   className="et_pb_social_media_follow_network_name"
      //                   aria-hidden="true"
      //                 >
      //                   Follow
      //                 </span>
      //               </a>
      //             </li>
      //             <li className="et_pb_social_media_follow_network_1_tb_footer et_pb_social_icon et_pb_social_network_link  et-social-facebook et_pb_social_media_follow_network_1_tb_footer">
      //               <a
      //                 href="https://www.facebook.com/CurrikiEducation"
      //                 className="icon et_pb_with_border"
      //                 title="Follow on Facebook"
      //                 target="_blank"
      //               >
      //                 <span
      //                   className="et_pb_social_media_follow_network_name"
      //                   aria-hidden="true"
      //                 >
      //                   Follow
      //                 </span>
      //               </a>
      //             </li>
      //             <li className="et_pb_social_media_follow_network_2_tb_footer et_pb_social_icon et_pb_social_network_link  et-social-instagram et_pb_social_media_follow_network_2_tb_footer">
      //               <a
      //                 href="https://www.instagram.com/currikieducation/"
      //                 className="icon et_pb_with_border"
      //                 title="Follow on Instagram"
      //                 target="_blank"
      //               >
      //                 <span
      //                   className="et_pb_social_media_follow_network_name"
      //                   aria-hidden="true"
      //                 >
      //                   Follow
      //                 </span>
      //               </a>
      //             </li>
      //             <li className="et_pb_social_media_follow_network_3_tb_footer et_pb_social_icon et_pb_social_network_link  et-social-youtube et_pb_social_media_follow_network_3_tb_footer">
      //               <a
      //                 href="https://www.youtube.com/channel/UCHj1RYy9PUVWG-sYNvd61kg"
      //                 className="icon et_pb_with_border"
      //                 title="Follow on Youtube"
      //                 target="_blank"
      //               >
      //                 <span
      //                   className="et_pb_social_media_follow_network_name"
      //                   aria-hidden="true"
      //                 >
      //                   Follow
      //                 </span>
      //               </a>
      //             </li>
      //             <li className="et_pb_social_media_follow_network_4_tb_footer et_pb_social_icon et_pb_social_network_link  et-social-linkedin et_pb_social_media_follow_network_4_tb_footer">
      //               <a
      //                 href="https://www.linkedin.com/company/curriki/"
      //                 className="icon et_pb_with_border"
      //                 title="Follow on LinkedIn"
      //                 target="_blank"
      //               >
      //                 <span
      //                   className="et_pb_social_media_follow_network_name"
      //                   aria-hidden="true"
      //                 >
      //                   Follow
      //                 </span>
      //               </a>
      //             </li>
      //           </ul>{' '}
      //           {/* .et_pb_counters */}
      //         </div>{' '}
      //         {/* .et_pb_column */}
      //       </div>{' '}
      //       {/* .et_pb_row */}
      //     </div>{' '}
      //     {/* .et_pb_section */}
      //     <div className="et_pb_section et_pb_section_1_tb_footer et_pb_with_background et_section_regular">
      //       <div className="et_pb_row et_pb_row_1_tb_footer">
      //         <div className="et_pb_column et_pb_column_4_4 et_pb_column_5_tb_footer  et_pb_css_mix_blend_mode_passthrough et-last-child">
      //           <div className="et_pb_module et_pb_text et_pb_text_3_tb_footer  et_pb_text_align_center et_pb_bg_layout_light">
      //             <div className="et_pb_text_inner">
      //               <p>
      //                 <a href="curriki.org" target="_blank" rel="noopener">
      //                   curriki.org
      //                 </a>{' '}
      //                 2004-2021 © Curriki a 501.c.3 Nonprofit
      //               </p>
      //             </div>
      //           </div>{' '}
      //           {/* .et_pb_text */}
      //         </div>{' '}
      //         {/* .et_pb_column */}
      //       </div>{' '}
      //       {/* .et_pb_row */}
      //     </div>{' '}
      //     {/* .et_pb_section */}
      //   </div>
      //   {/* .et_builder_inner_content */}
      // </footer>
      
    );
}

export default Footer
