/* eslint-disable no-tabs */
import { LOGO } from 'utils/constants';

export const MainLayout = (content: string): string => `
<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">

  <tbody>
		<tr>
			<td align="center">
				<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9; ">
					<tbody>
            
          <!-- Header - start -->
					<tr>
						<td>


							<table class="col3" width="183" border="0" align="left" cellpadding="0" cellspacing="0">
								<tbody><tr>
									<td height="30"></td>
								</tr>
								<tr>
									<td align="center">
										<table class="insider" width="133" border="0" align="center" cellpadding="0" cellspacing="0">

											<tbody><tr align="center" style="line-height:0px;">
												<td>
													// <img style="display:block; line-height:0px; font-size:0px; border:0px;padding-left: 20px;" src=${LOGO} alt="icon">
												</td>
											</tr>

										</tbody></table>
									</td>
								</tr>
								<tr>
									<td height="30"></td>
								</tr>
							</tbody></table>


						</td>
					</tr>
				</tbody></table>
			</td>
    </tr> 
    <!-- Header - end -->

    ${content}

    <!-- START FOOTER -->
		<tr>
			<td align="center">
				<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-left:20px; margin-right:20px;">

		<tbody>

		<tr>
			<td align="center">
				<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style=" border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
					<tbody><tr>
						<td height="10"></td>
					</tr>
					<tr>
						<td align="center" bgcolor="#34495e" background="https://designmodo.com/demo/emailtemplate/images/footer.jpg" height="185">
							<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
								<tbody>
									<tr>
									<td align="center" style="font-family: 'Raleway',  sans-serif; font-size:26px; font-weight: 500; color:#f1c40f;">Follow us for some cool stuffs</td>
									</tr>


								<tr>
									<td height="25"></td>
								</tr>



								</tbody></table><table align="center" width="35%" border="0" cellspacing="0" cellpadding="0">
								<tbody><tr>
									<td align="center" width="30%" style="vertical-align: top;">
											<a href="https://www.facebook.com/" target="_blank"> <img src="https://designmodo.com/demo/emailtemplate/images/icon-fb.png"> </a>
									</td>

									<td align="center" class="margin" width="30%" style="vertical-align: top;">
										 <a href="https://twitter.com/" target="_blank"> <img src="https://designmodo.com/demo/emailtemplate/images/icon-twitter.png"> </a>
									</td>

									<td align="center" width="30%" style="vertical-align: top;">
											<a href="https://plus.google.com/" target="_blank"> <img src="https://designmodo.com/demo/emailtemplate/images/icon-googleplus.png"> </a>
									</td>
								</tr>
								</tbody></table>



							</td></tr></tbody></table>
						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>

<!-- END FOOTER -->
					
</tbody>
</table>
`;
