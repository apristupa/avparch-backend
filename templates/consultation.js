exports.consultationRequest = (
  name,
  email,
  phone,
  address,
  adu,
  addition,
  custom,
  remodel,
  tenantImprovement,
  notSure,
  instructions
) => {
  return {
    Source: `AVP Arch <arthurpristupa@gmail.com>`,
    Destination: {
      ToAddresses: ['contact@fabricioguardia.com'],
    },
    Message: {
      Subject: {
        Data: 'Consultation Request',
        Charset: 'UTF-8',
      },
      Body: {
        Text: {
          Data: 'Email service from AVP Arch',
          Charset: 'UTF-8',
        },
        Html: {
          Charset: 'UTF-8',
          Data: `
          <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
          <html xmlns="https://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
          
          <head>
           <meta charset="UTF-8" />
           <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
           <!--[if !mso]><!-- -->
           <meta http-equiv="X-UA-Compatible" content="IE=edge" />
           <!--<![endif]-->
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <meta name="format-detection" content="telephone=no" />
           <meta name="format-detection" content="date=no" />
           <meta name="format-detection" content="address=no" />
           <meta name="format-detection" content="email=no" />
           <meta name="x-apple-disable-message-reformatting" />
           <title>Untitled</title>
           <!-- Made with Postcards by Designmodo https://designmodo.com/postcards -->
           <!--[if !mso]><!-- -->
           <style>
           @media  all {
                                                           /* cyrillic-ext */
                       @font-face {
                           font-family: 'Fira Sans';
                           font-style: normal;
                           font-weight: 400;
                           src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');
                           unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                       }
                       /* cyrillic */
                       @font-face {
                           font-family: 'Fira Sans';
                           font-style: normal;
                           font-weight: 400;
                           src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');
                           unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                       }
                       /* latin-ext */
                       @font-face {
                           font-family: 'Fira Sans';
                           font-style: normal;
                           font-weight: 400;
                           src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');
                           unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                       }
                       /* latin */
                       @font-face {
                           font-family: 'Fira Sans';
                           font-style: normal;
                           font-weight: 400;
                           src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');
                           unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                       }
                                                           /* cyrillic-ext */
                       @font-face {
                           font-family: 'Fira Sans';
                           font-style: normal;
                           font-weight: 700;
                           src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eSxf6Xl7Gl3LX.woff2) format('woff2');
                           unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                       }
                       /* cyrillic */
                       @font-face {
                           font-family: 'Fira Sans';
                           font-style: normal;
                           font-weight: 700;
                           src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eQhf6Xl7Gl3LX.woff2) format('woff2');
                           unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                       }
                       /* latin-ext */
                       @font-face {
                           font-family: 'Fira Sans';
                           font-style: normal;
                           font-weight: 700;
                           src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eSBf6Xl7Gl3LX.woff2) format('woff2');
                           unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                       }
                       /* latin */
                       @font-face {
                           font-family: 'Fira Sans';
                           font-style: normal;
                           font-weight: 700;
                           src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eRhf6Xl7Glw.woff2) format('woff2');
                           unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                       }
                                               /* cyrillic-ext */
                       @font-face {
                           font-family: 'Fira Sans';
                           font-style: normal;
                           font-weight: 800;
                           font-display: swap;
                           src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eSxf6Xl7Gl3LX.woff2) format('woff2');
                           unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                       }
                       /* cyrillic */
                       @font-face {
                           font-family: 'Fira Sans';
                           font-style: normal;
                           font-weight: 800;
                           font-display: swap;
                           src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eQhf6Xl7Gl3LX.woff2) format('woff2');
                           unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                       }
                       /* latin-ext */
                       @font-face {
                           font-family: 'Fira Sans';
                           font-style: normal;
                           font-weight: 800;
                           font-display: swap;
                           src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eSBf6Xl7Gl3LX.woff2) format('woff2');
                           unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                       }
                       /* latin */
                       @font-face {
                           font-family: 'Fira Sans';
                           font-style: normal;
                           font-weight: 800;
                           font-display: swap;
                           src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eRhf6Xl7Glw.woff2) format('woff2');
                           unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                       }
                               }
           </style>
           <!--<![endif]-->
           <style>
           html,
                   body {
                       margin: 0 !important;
                       padding: 0 !important;
                       min-height: 100% !important;
                       width: 100% !important;
                       -webkit-font-smoothing: antialiased;
                   }
           
                   * {
                       -ms-text-size-adjust: 100%;
                   }
           
                   #outlook a {
                       padding: 0;
                   }
           
                   .ReadMsgBody,
                   .ExternalClass {
                       width: 100%;
                   }
           
                   .ExternalClass,
                   .ExternalClass p,
                   .ExternalClass td,
                   .ExternalClass div,
                   .ExternalClass span,
                   .ExternalClass font {
                       line-height: 100%;
                   }
           
                   table,
                   td,
                   th {
                       mso-table-lspace: 0 !important;
                       mso-table-rspace: 0 !important;
                       border-collapse: collapse;
                   }
           
                   u + .body table, u + .body td, u + .body th {
                       will-change: transform;
                   }
           
                   body, td, th, p, div, li, a, span {
                       -webkit-text-size-adjust: 100%;
                       -ms-text-size-adjust: 100%;
                       mso-line-height-rule: exactly;
                   }
           
                   img {
                       border: 0;
                       outline: 0;
                       line-height: 100%;
                       text-decoration: none;
                       -ms-interpolation-mode: bicubic;
                   }
           
                   a[x-apple-data-detectors] {
                       color: inherit !important;
                       text-decoration: none !important;
                   }
           
                   .pc-gmail-fix {
                       display: none;
                       display: none !important;
                   }
           
                   .body .pc-project-body {
                       background-color: transparent !important;
                   }
           
                   @media (min-width: 621px) {
                       .pc-lg-hide {
                           display: none;
                       } 
           
                       .pc-lg-bg-img-hide {
                           background-image: none !important;
                       }
                   }
           </style>
           <style>
           @media (max-width: 620px) {
           .pc-project-body {min-width: 0px !important;}
           .pc-project-container {width: 100% !important;}
           .pc-sm-hide {display: none !important;}
           .pc-sm-bg-img-hide {background-image: none !important;}
           .pc-w620-fontSize-30 {font-size: 30px !important;}
           .pc-w620-lineHeight-133pc {line-height: 133% !important;}
           .pc-w620-fontSize-18 {font-size: 18px !important;}
           .pc-w620-lineHeight-156pc {line-height: 156% !important;}
           .pc-w620-itemsSpacings-0-30 {padding-left: 0px !important;padding-right: 0px !important;padding-top: 15px !important;padding-bottom: 15px !important;}
           .pc-w620-padding-35-35-35-35 {padding: 35px 35px 35px 35px !important;}
           
           .pc-w620-gridCollapsed-1 > tbody,.pc-w620-gridCollapsed-1 > tbody > tr,.pc-w620-gridCollapsed-1 > tr {display: inline-block !important;}
           .pc-w620-gridCollapsed-1.pc-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-width-fill > tr {width: 100% !important;}
           .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
           .pc-w620-gridCollapsed-1 > tbody > tr > td,.pc-w620-gridCollapsed-1 > tr > td {display: block !important;width: auto !important;padding-left: 0 !important;padding-right: 0 !important;}
           .pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-width-fill > tr > td {width: 100% !important;}
           .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;}
           .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-first > .pc-grid-td-first,pc-w620-gridCollapsed-1 > .pc-grid-tr-first > .pc-grid-td-first {padding-top: 0 !important;}
           .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-last > .pc-grid-td-last,pc-w620-gridCollapsed-1 > .pc-grid-tr-last > .pc-grid-td-last {padding-bottom: 0 !important;}
           
           .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-first > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-first > td {padding-top: 0 !important;}
           .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-last > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-last > td {padding-bottom: 0 !important;}
           .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-first,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-first {padding-left: 0 !important;}
           .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-last,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-last {padding-right: 0 !important;}
           
           .pc-w620-tableCollapsed-1 > tbody,.pc-w620-tableCollapsed-1 > tbody > tr,.pc-w620-tableCollapsed-1 > tr {display: block !important;}
           .pc-w620-tableCollapsed-1.pc-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-width-fill > tr {width: 100% !important;}
           .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
           .pc-w620-tableCollapsed-1 > tbody > tr > td,.pc-w620-tableCollapsed-1 > tr > td {display: block !important;width: auto !important;}
           .pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
           .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
           }
           @media (max-width: 520px) {
           .pc-w520-padding-30-30-30-30 {padding: 30px 30px 30px 30px !important;}
           }
           </style>
           <!--[if mso]>
              <style type="text/css">
                  .pc-font-alt {
                      font-family: Arial, Helvetica, sans-serif !important;
                  }
              </style>
              <![endif]-->
           <!--[if gte mso 9]>
              <xml>
                  <o:OfficeDocumentSettings>
                      <o:AllowPNG/>
                      <o:PixelsPerInch>96</o:PixelsPerInch>
                  </o:OfficeDocumentSettings>
              </xml>
              <![endif]-->
          </head>
          
          <body class="body pc-font-alt" style="width: 100% !important; min-height: 100% !important; margin: 0 !important; padding: 0 !important; line-height: 1.5; color: #2D3A41; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-variant-ligatures: normal; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; background-color: #f4f4f4;" bgcolor="#f4f4f4">
           <table class="pc-project-body" style="table-layout: fixed; min-width: 600px; background-color: #f4f4f4;" bgcolor="#f4f4f4" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
            <tr>
             <td align="center" valign="top">
              <table class="pc-project-container" style="width: 600px; max-width: 600px;" width="600" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
               <tr>
                <td style="padding: 20px 0px 20px 0px;" align="left" valign="top">
                 <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width: 100%;">
                  <tr>
                   <td valign="top">
                    <!-- BEGIN MODULE: Transactional 7 -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                     <tr>
                      <td style="padding: 0px 0px 0px 0px;">
                       <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                        <tr>
                         <td valign="top" class="pc-w520-padding-30-30-30-30 pc-w620-padding-35-35-35-35" style="padding: 40px 40px 40px 40px; border-radius: 0px; background-color: #ffffff;" bgcolor="#ffffff">
                          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                           <tr>
                            <td align="left" valign="top" style="padding: 0px 0px 15px 0px;">
                             <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                              <tr>
                               <td valign="top" align="left">
                                <div class="pc-font-alt pc-w620-fontSize-30 pc-w620-lineHeight-133pc" style="line-height: 128%; letter-spacing: -0.6px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 36px; font-weight: 800; font-variant-ligatures: normal; color: #151515; text-align: left; text-align-last: left;">
                                 Consultation requested!</div>
                               </td>
                              </tr>
                             </table>
                            </td>
                           </tr>
                          </table>
                          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                           <tr>
                            <td align="left" valign="top" style="padding: 0px 0px 30px 0px;">
                             <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                              <tr>
                               <td valign="top" align="left">
                                <div class="pc-font-alt pc-w620-fontSize-18 pc-w620-lineHeight-156pc" style="line-height: 150%; letter-spacing: -0.4px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 20px; font-weight: normal; font-variant-ligatures: normal; color: #9b9b9b; text-align: left; text-align-last: left;">
                                 A potential client has requested a consultation.</div>
                               </td>
                              </tr>
                             </table>
                            </td>
                           </tr>
                          </table>
                          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                           <tr>
                            <td style="padding: 0px 0px 40px 0px;">
                             <table class="pc-width-fill pc-w620-gridCollapsed-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                              <tr class="pc-grid-tr-first">
                               <td class="pc-grid-td-first pc-w620-itemsSpacings-0-30" align="left" valign="top" style="width: 50%; padding-top: 0px; padding-right: 20px; padding-bottom: 20px; padding-left: 0px;">
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%;">
                                 <tr>
                                  <td align="left" valign="top">
                                   <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                    <tr>
                                     <td align="left" valign="top">
                                      <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                       <tr>
                                        <td valign="top" style="padding: 0px 0px 10px 0px;">
                                         <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                          <tr>
                                           <td valign="top" align="left">
                                            <div class="pc-font-alt" style="line-height: 156%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: bold; font-variant-ligatures: normal; color: #151515; text-align: left; text-align-last: left;">
                                             Name</div>
                                           </td>
                                          </tr>
                                         </table>
                                        </td>
                                       </tr>
                                      </table>
                                     </td>
                                    </tr>
                                    <tr>
                                     <td align="left" valign="top">
                                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                       <tr>
                                        <td valign="top" style="padding: 0px 0px 10px 0px;">
                                         <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-right: auto;">
                                          <tr>
                                           <!--[if gte mso 9]>
                              <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 1px solid #e5e5e5;">&nbsp;</td>
                          <![endif]-->
                                           <!--[if !gte mso 9]><!-- -->
                                           <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 1px solid #e5e5e5;">&nbsp;</td>
                                           <!--<![endif]-->
                                          </tr>
                                         </table>
                                        </td>
                                       </tr>
                                      </table>
                                     </td>
                                    </tr>
                                    <tr>
                                     <td align="left" valign="top">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="border-collapse: separate; border-spacing: 0;">
                                       <tr>
                                        <td valign="top" align="left">
                                         <div class="pc-font-alt" style="line-height: 156%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: normal; font-variant-ligatures: normal; color: #151515; text-align: left; text-align-last: left;">
                                          ${name}</div>
                                        </td>
                                       </tr>
                                      </table>
                                     </td>
                                    </tr>
                                   </table>
                                  </td>
                                 </tr>
                                </table>
                               </td>
                               <td class="pc-grid-td-last pc-w620-itemsSpacings-0-30" align="left" valign="top" style="width: 50%; padding-top: 0px; padding-right: 0px; padding-bottom: 20px; padding-left: 20px;">
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%;">
                                 <tr>
                                  <td align="left" valign="top">
                                   <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                    <tr>
                                     <td align="left" valign="top">
                                      <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                       <tr>
                                        <td valign="top" style="padding: 0px 0px 10px 0px;">
                                         <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                          <tr>
                                           <td valign="top" align="left">
                                            <div class="pc-font-alt" style="line-height: 156%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: bold; font-variant-ligatures: normal; color: #151515; text-align: left; text-align-last: left;">
                                             Contact</div>
                                           </td>
                                          </tr>
                                         </table>
                                        </td>
                                       </tr>
                                      </table>
                                     </td>
                                    </tr>
                                    <tr>
                                     <td align="left" valign="top">
                                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                       <tr>
                                        <td valign="top" style="padding: 0px 0px 10px 0px;">
                                         <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-right: auto;">
                                          <tr>
                                           <!--[if gte mso 9]>
                              <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 1px solid #e5e5e5;">&nbsp;</td>
                          <![endif]-->
                                           <!--[if !gte mso 9]><!-- -->
                                           <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 1px solid #e5e5e5;">&nbsp;</td>
                                           <!--<![endif]-->
                                          </tr>
                                         </table>
                                        </td>
                                       </tr>
                                      </table>
                                     </td>
                                    </tr>
                                    <tr>
                                     <td align="left" valign="top">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="border-collapse: separate; border-spacing: 0;">
                                       <tr>
                                        <td valign="top" align="left">
                                         <div class="pc-font-alt" style="line-height: 156%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: normal; font-variant-ligatures: normal; color: #151515; text-align: left; text-align-last: left;">
                                          ${email} <br>
                                          ${phone} <br>
                                          ${address}
                                        </div>
                                        </td>
                                       </tr>
                                      </table>
                                     </td>
                                    </tr>
                                   </table>
                                  </td>
                                 </tr>
                                </table>
                               </td>
                              </tr>
                              <tr class="pc-grid-tr-last">
                               <td class="pc-grid-td-first pc-w620-itemsSpacings-0-30" align="left" valign="top" style="width: 50%; padding-top: 20px; padding-right: 20px; padding-bottom: 0px; padding-left: 0px;">
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%;">
                                 <tr>
                                  <td align="left" valign="top">
                                   <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                    <tr>
                                     <td align="left" valign="top">
                                      <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                       <tr>
                                        <td valign="top" style="padding: 0px 0px 10px 0px;">
                                         <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                          <tr>
                                           <td valign="top" align="left">
                                            <div class="pc-font-alt" style="line-height: 156%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: bold; font-variant-ligatures: normal; color: #151515; text-align: left; text-align-last: left;">
                                             Design Direction</div>
                                           </td>
                                          </tr>
                                         </table>
                                        </td>
                                       </tr>
                                      </table>
                                     </td>
                                    </tr>
                                    <tr>
                                     <td align="left" valign="top">
                                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                       <tr>
                                        <td valign="top" style="padding: 0px 0px 10px 0px;">
                                         <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-right: auto;">
                                          <tr>
                                           <!--[if gte mso 9]>
                              <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 1px solid #e5e5e5;">&nbsp;</td>
                          <![endif]-->
                                           <!--[if !gte mso 9]><!-- -->
                                           <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 1px solid #e5e5e5;">&nbsp;</td>
                                           <!--<![endif]-->
                                          </tr>
                                         </table>
                                        </td>
                                       </tr>
                                      </table>
                                     </td>
                                    </tr>
                                    <tr>
                                     <td align="left" valign="top">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="border-collapse: separate; border-spacing: 0;">
                                       <tr>
                                        <td valign="top" align="left">
                                         <div class="pc-font-alt" style="line-height: 156%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: normal; font-variant-ligatures: normal; color: #151515; text-align: left; text-align-last: left;">
                                          ${
                                            adu
                                              ? 'Accessory Dwelling Unit (ADU)'
                                              : ''
                                          }
                                          <br>
                                          ${addition ? 'Addition' : ''}
                                          <br>
                                          ${custom ? 'Custom Home' : ''}
                                          <br>
                                          ${remodel ? 'Remodel' : ''}
                                          <br>
                                          ${
                                            tenantImprovement
                                              ? 'Tenant Improvement'
                                              : ''
                                          }
                                          <br>
                                          ${notSure ? `I'm not sure` : ''}
                                        </div>
                                        </td>
                                       </tr>
                                      </table>
                                     </td>
                                    </tr>
                                   </table>
                                  </td>
                                 </tr>
                                </table>
                               </td>
                               <td class="pc-grid-td-last pc-w620-itemsSpacings-0-30" align="left" valign="top" style="width: 50%; padding-top: 20px; padding-right: 0px; padding-bottom: 0px; padding-left: 20px;">
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; border-spacing: 0; width: 100%;">
                                 <tr>
                                  <td align="left" valign="top">
                                   <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                    <tr>
                                     <td align="left" valign="top">
                                      <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                       <tr>
                                        <td valign="top" style="padding: 0px 0px 10px 0px;">
                                         <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                          <tr>
                                           <td valign="top" align="left">
                                            <div class="pc-font-alt" style="line-height: 156%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: bold; font-variant-ligatures: normal; color: #151515; text-align: left; text-align-last: left;">
                                             Scope</div>
                                           </td>
                                          </tr>
                                         </table>
                                        </td>
                                       </tr>
                                      </table>
                                     </td>
                                    </tr>
                                    <tr>
                                     <td align="left" valign="top">
                                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                       <tr>
                                        <td valign="top" style="padding: 0px 0px 10px 0px;">
                                         <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-right: auto;">
                                          <tr>
                                           <!--[if gte mso 9]>
                              <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 1px solid #e5e5e5;">&nbsp;</td>
                          <![endif]-->
                                           <!--[if !gte mso 9]><!-- -->
                                           <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 1px solid #e5e5e5;">&nbsp;</td>
                                           <!--<![endif]-->
                                          </tr>
                                         </table>
                                        </td>
                                       </tr>
                                      </table>
                                     </td>
                                    </tr>
                                    <tr>
                                     <td align="left" valign="top">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="border-collapse: separate; border-spacing: 0;">
                                       <tr>
                                        <td valign="top" align="left">
                                         <div class="pc-font-alt" style="line-height: 156%; letter-spacing: -0.2px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 18px; font-weight: normal; font-variant-ligatures: normal; color: #151515; text-align: left; text-align-last: left;">
                                          ${instructions}</div>
                                        </td>
                                       </tr>
                                      </table>
                                     </td>
                                    </tr>
                                   </table>
                                  </td>
                                 </tr>
                                </table>
                               </td>
                              </tr>
                             </table>
                            </td>
                           </tr>
                          </table>
                         </td>
                        </tr>
                       </table>
                      </td>
                     </tr>
                    </table>
                    <!-- END MODULE: Transactional 7 -->
                   </td>
                  </tr>
                 </table>
                </td>
               </tr>
              </table>
             </td>
            </tr>
           </table>
           <!-- Fix for Gmail on iOS -->
           <div class="pc-gmail-fix" style="white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
           </div>
          </body>
          
          </html>          
          `,
        },
      },
    },
  };
};
