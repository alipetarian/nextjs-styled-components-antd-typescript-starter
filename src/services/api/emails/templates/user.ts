import { MainLayout } from './layout';

export const VERIFY_USER_CONTENT = (user: any): string => {
  const url = `/verify/${user.token}`;
  return MainLayout(`
    <tr>
      <td align="center">
          <table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-left:20px; margin-right:20px; border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
          <tbody><tr>
              <td height="35"></td>
          </tr>

          <tr>
              <td align="center" style="font-family: 'Raleway', sans-serif; font-size:22px; font-weight: bold; color:#2a3a4b;">Welcome ${user.fullName}</td>
          </tr>
          </tbody></table>
      </td>
    </tr>

    <tr>
      <td align="center">
        <table align="center" class="col-600" width="600" border="0" cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <td align="center" bgcolor="#2a3b4c">
                <table class="col-600" width="600" align="center" border="0" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td height="33"></td>
                    </tr>
                  <tr>
                    <td>
                      <table class="col1" width="183" border="0" align="left" cellpadding="0" cellspacing="0">

                        <tbody>
                          <tr>
                            <td height="18"></td>
                          </tr>

                          <tr>
                            <td align="center">
                              <img style="display:block; line-height:0px; font-size:0px; border:0px;" class="images_style" src="https://designmodo.com/demo/emailtemplate/images/icon-title.png" alt="img" width="156" height="136">
                            </td>
                          </tr>
                        </tbody>
                      </table>


                      <table class="col3_one" width="380" border="0" align="right" cellpadding="0" cellspacing="0">

                        <tbody>
                          <tr align="left" valign="top">
                            <td style="font-family: 'Raleway', sans-serif; font-size:20px; color:#f1c40f; line-height:30px; font-weight: bold;">Thank you for registration!</td>
                          </tr>
                          <tr>
                            <td height="5"></td>
                          </tr>

                          <tr align="left" valign="top">
                            <td style="font-family: 'Lato', sans-serif; font-size:14px; color:#fff; line-height:24px; font-weight: 300;">
                            Please click on verify button to continue.
                            </td>
                          </tr>

                          <tr>
                            <td height="10"></td>
                          </tr>

                          <tr align="left" valign="top">
                            <td>
                              <table class="button" border="0" cellpadding="0" cellspacing="0">
                                <tbody>
                                  <tr>
                                    <td>
                                      <a href=${url} style="color:#ffffff;font-family: 'Open Sans', Arial, sans-serif; font-size:14px; color:#ffffff;text-decoration: none;border: 1px solid #fff;padding:3px 20px;"
                                        target="_blank">Verify</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  `);
};

export const RESET_USER_PASSWORD_CONTENT = (user: any): string => {
  const url = `/reset-password/${user.token}`;
  return MainLayout(`
    <tr>
      <td align="center">
        <table align="center" class="col-600" width="600" border="0" cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <td align="center" bgcolor="#2a3b4c">
                <table class="col-600" width="600" align="center" border="0" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td height="33"></td>
                    </tr>
                  <tr>
                    <td>
                      <table class="col1" width="183" border="0" align="left" cellpadding="0" cellspacing="0">

                        <tbody>
                          <tr>
                            <td height="18"></td>
                          </tr>

                          <tr>
                            <td align="center">
                              <img style="display:block; line-height:0px; font-size:0px; border:0px; padding-bottom: 20px;" class="images_style" src="https://cdn.onlinewebfonts.com/svg/img_398183.png" alt="img" width="156" height="136">
                            </td>
                          </tr>
                        </tbody>
                      </table>


                      <table class="col3_one" width="380" border="0" align="right" cellpadding="0" cellspacing="0">

                        <tbody>
                          <tr align="left" valign="top">
                            <td style="font-family: 'Lato', sans-serif; font-size:14px; color:#fff; line-height:24px; font-weight: 300;">
                              ${user.fullName}, please click on Reset button to continue.
                            </td>
                          </tr>

                          <tr>
                            <td height="10"></td>
                          </tr>

                          <tr align="left" valign="top">
                            <td>
                              <table class="button" border="0" cellpadding="0" cellspacing="0">
                                <tbody>
                                  <tr>
                                    <td>
                                      <a href=${url} style="color:#ffffff;font-family: 'Open Sans', Arial, sans-serif; font-size:14px; color:#ffffff;text-decoration: none;border: 1px solid #fff;padding:3px 20px;"
                                        target="_blank">Reset Password</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  `);
};

export const UPDATE_USER_PASSWORD_CONTENT = (user: any): string => MainLayout(`
    <tr>
      <td align="center">
        <table align="center" class="col-600" width="600" border="0" cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <td align="center" bgcolor="#2a3b4c">
                <table class="col-600" width="600" align="center" border="0" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td height="33"></td>
                    </tr>
                  <tr>
                    <td>
                      <table class="col1" width="183" border="0" align="left" cellpadding="0" cellspacing="0">

                        <tbody>
                          <tr>
                            <td height="18"></td>
                          </tr>

                          <tr>
                            <td align="center">
                              <img style="display:block; line-height:0px; font-size:0px; border:0px; padding-bottom: 20px;" class="images_style" src="https://cdn.onlinewebfonts.com/svg/img_398183.png" alt="img" width="156" height="136">
                            </td>
                          </tr>
                        </tbody>
                      </table>


                      <table class="col3_one" width="380" border="0" align="right" cellpadding="0" cellspacing="0">

                        <tbody>
                          <tr align="left" valign="top">
                            <td style="font-family: 'Lato', sans-serif; font-size:14px; color:#fff; line-height:24px; font-weight: 300;">
                              ${user.firstName} ${user.lastName}, your password is updated.
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  `);
