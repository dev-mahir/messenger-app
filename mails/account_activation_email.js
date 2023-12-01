import nodemailer from "nodemailer";

export const account_activation_email = async (data, email) => {
	const transport = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 587,
		auth: {
			user: "mdmahir.ds@gmail.com",
			pass: "xiflnjtclrumtyok",
		},
	});

	await transport.sendMail({
		from: "Mail Test <bkdkf@gmail.com>",
		subject: "Account Activation Email",
		to: email,
		text: "Hello world?",
		html: `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
	xmlns="http://www.w3.org/1999/xhtml"
	xmlns:v="urn:schemas-microsoft-com:vml"
	xmlns:o="urn:schemas-microsoft-com:office:office">
	<head>
		<!--[if gte mso 9]>
			<xml>
				<o:OfficeDocumentSettings>
					<o:AllowPNG />
					<o:PixelsPerInch>96</o:PixelsPerInch>
				</o:OfficeDocumentSettings>
			</xml>
		<![endif]-->
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="x-apple-disable-message-reformatting" />
		<!--[if !mso]><!-->
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<!--<![endif]-->
		<title></title>

		<style type="text/css">
			@media only screen and (min-width: 620px) {
				.u-row {
					width: 600px !important;
				}
				.u-row .u-col {
					vertical-align: top;
				}

				.u-row .u-col-100 {
					width: 600px !important;
				}
			}

			@media (max-width: 620px) {
				.u-row-container {
					max-width: 100% !important;
					padding-left: 0px !important;
					padding-right: 0px !important;
				}
				.u-row .u-col {
					min-width: 320px !important;
					max-width: 100% !important;
					display: block !important;
				}
				.u-row {
					width: 100% !important;
				}
				.u-col {
					width: 100% !important;
				}
				.u-col > div {
					margin: 0 auto;
				}
			}
			body {
				margin: 0;
				padding: 0;
			}

			table,
			tr,
			td {
				vertical-align: top;
				border-collapse: collapse;
			}

			p {
				margin: 0;
			}

			.ie-container table,
			.mso-container table {
				table-layout: fixed;
			}

			* {
				line-height: inherit;
			}

			a[x-apple-data-detectors="true"] {
				color: inherit !important;
				text-decoration: none !important;
			}

			table,
			td {
				color: #000000;
			}
			#u_body a {
				color: #0000ee;
				text-decoration: underline;
			}
			@media (max-width: 480px) {
				#u_content_image_1 .v-container-padding-padding {
					padding: 30px 10px 10px !important;
				}
				#u_content_image_1 .v-src-width {
					width: auto !important;
				}
				#u_content_image_1 .v-src-max-width {
					max-width: 20% !important;
				}
				#u_content_heading_2 .v-container-padding-padding {
					padding: 30px 10px !important;
				}
				#u_content_heading_2 .v-font-size {
					font-size: 24px !important;
				}
				#u_content_text_3 .v-container-padding-padding {
					padding: 0px 10px 10px !important;
				}
				#u_content_button_2 .v-size-width {
					width: 51% !important;
				}
				#u_content_button_2 .v-text-align {
					text-align: center !important;
				}
				#u_content_button_2 .v-border-radius {
					border-radius: 25px !important;
					-webkit-border-radius: 25px !important;
					-moz-border-radius: 25px !important;
				}
			}
		</style>

		<!--[if !mso]><!-->
		<link
			href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap"
			rel="stylesheet"
			type="text/css" />
		<!--<![endif]-->
	</head>

	<body
		class="clean-body u_body"
		style="
			margin: 0;
			padding: 0;
			-webkit-text-size-adjust: 100%;
			background-color: #ecf0f1;

			color: #000000;
		">
		<!--[if IE]><div class="ie-container"><![endif]-->
		<!--[if mso]><div class="mso-container"><![endif]-->
		<table
			id="u_body"
			style="
				border-collapse: collapse;
				table-layout: fixed;
				border-spacing: 0;
				mso-table-lspace: 0pt;
				mso-table-rspace: 0pt;
				vertical-align: top;
				min-width: 320px;
				margin: 0 auto;
				background-color: #ecf0f1;
				width: 100%;
			"
			cellpadding="0"
			cellspacing="0">
			<tbody>
				<tr style="vertical-align: top">
					<td
						style="
							word-break: break-word;
							border-collapse: collapse !important;
							vertical-align: top;
						">
						<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ecf0f1;"><![endif]-->

						<div
							class="u-row-container"
							style="padding: 0px; background-color: transparent">
							<div
								class="u-row"
								style="
									margin: 0 auto;
									min-width: 320px;
									max-width: 600px;
									overflow-wrap: break-word;
									word-wrap: break-word;
									word-break: break-word;
									background-color: transparent;
								">
								<div
									style="
										border-collapse: collapse;
										display: table;
										width: 100%;
										height: 100%;
										background-color: transparent;
									">
									<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

									<!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #cddaf7;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
									<div
										class="u-col u-col-100"
										style="
											max-width: 320px;
											min-width: 600px;
											display: table-cell;
											vertical-align: top;
										">
										<div
											style="
												background-color: #f8f7f7;
												height: 100%;
												width: 100% !important;
											">
											<!--[if (!mso)&(!IE)]><!--><div
												style="
													box-sizing: border-box;
													height: 100%;
													padding: 0px;
													border-top: 0px solid
														transparent;
													border-left: 0px solid
														transparent;
													border-right: 0px solid
														transparent;
													border-bottom: 0px solid
														transparent;
												"><!--<![endif]-->
												<table
													id="u_content_image_1"
													style="
														font-family: 'Open Sans',
															sans-serif;
													"
													role="presentation"
													cellpadding="0"
													cellspacing="0"
													width="100%"
													border="0">
													<tbody>
														<tr>
															<td
																class="v-container-padding-padding"
																style="
																	overflow-wrap: break-word;
																	word-break: break-word;
																	padding: 38px
																		10px
																		10px;
																	font-family: 'Open Sans',
																		sans-serif;
																"
																align="left">
																<table
																	width="100%"
																	cellpadding="0"
																	cellspacing="0"
																	border="0">
																	<tr>
																		<td
																			class="v-text-align"
																			style="
																				padding-right: 0px;
																				padding-left: 0px;
																			"
																			align="center">
																			<img
																				align="center"
																				border="0"
																				src="https://lh3.googleusercontent.com/pw/ADCreHcVjSSD8tHEfNonohGv6Y2KvOGWjBNjxDaFvQTMR4dcZD03Pa6xO45hDq1xAhfhphqAkxeoxB304zWgz7JkjWRh8ZD0o6Q-7o3aBjClAop89rErtjgMC3zdvVXXbxZ5HKyTGQvkVNa8IBISRp5aXn3GDmY95lLsitFd6UBiXdlp9uZrnbeWZ4asw_eJdYAnNWCZqQsGWWv269uiOhD8FBQOjcPt0AMGBDtHMyxvLS2yTl-SOxXKAfuwT4hDiecKUws3x_szxVeTj_ggkqJMlvCSzvVEbOsPyCtxjzj8ywd0saY-qIlvc8iF4ikT5fF_d5lb7LT5R73hFJ7HsQuK-oL9znP4ERRcUY7Q4EwM3mjK17-mmMzp0kYEW4PsVC4ypYUMkr_THzB2naKPNFy5NXGTd_s3CTk7swOqShEcu2SN9vtv55M8K4B8TM-O_Mf_2zcfjVA0V5a28NlAFGl4eO1I2mWNyoKSsrVvK8J6556ivygmx0tA2vJzAEpFb1zARQCZmd1N0BTwJwJwXqqfM6cfD_v1dhAE550hT9HAuHT5yi5viOCIAsEJ_h4HIoE3rsVnq1Q7ryKJHOzNZT9vDjhk-T0J3WRk2o3k6-NSuMd0Q4Anczja4H2NIe6Yo6T4w5ru7KWauJXjtBB_rwVuADUcn9S21NkbVpDsTRFtR1HXVVEfoOujspKFkLUP7z4PCLx9sN_RE67j64m8WnxyVoMA-EU3Bn0FZzmtft-OfyfwEUdEniq7VH_FFi5OW-A_bxn8dDiMe95hY3B4-bF_WZiXThDQHC7O5dv7EzxAqYUAcbGlR7tY4WU3BF1rRXUscTYF1hY80P6h0L62a2hMgIhwSM3TBdjFEYa4XAatPSYcQvyG8DytwSB8jT5Qaf0AgA=w629-h629-s-no-gm?authuser=0"
																				alt="image"
																				title="image"
																				style="
																					outline: none;
																					text-decoration: none;
																					-ms-interpolation-mode: bicubic;
																					clear: both;
																					display: inline-block !important;
																					border: none;
																					height: auto;
																					float: none;
																					width: 8%;
																					max-width: 46.4px;
																				"
																				width="46.4"
																				class="v-src-width v-src-max-width" />
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</tbody>
												</table>

												<table
													id="u_content_heading_2"
													style="
														font-family: 'Open Sans',
															sans-serif;
													"
													role="presentation"
													cellpadding="0"
													cellspacing="0"
													width="100%"
													border="0">
													<tbody>
														<tr>
															<td
																class="v-container-padding-padding"
																style="
																	overflow-wrap: break-word;
																	word-break: break-word;
																	padding: 20px
																		15px
																		40px;
																	font-family: 'Open Sans',
																		sans-serif;
																"
																align="left">
																<!--[if mso]><table width="100%"><tr><td><![endif]-->
																<h1
																	class="v-text-align v-font-size"
																	style="
																		margin: 0px;
																		color: #00214d;
																		line-height: 120%;
																		text-align: center;
																		word-wrap: break-word;
																		font-family: 'Open Sans',
																			sans-serif;
																		font-size: 35px;
																		font-weight: 400;
																	">
																	<span
																		><span
																			><span
																				><span
																					>Activate
																					your
																					account</span
																				></span
																			></span
																		></span
																	>
																</h1>
																<!--[if mso]></td></tr></table><![endif]-->
															</td>
														</tr>
													</tbody>
												</table>

												<!--[if (!mso)&(!IE)]><!-->
											</div>
											<!--<![endif]-->
										</div>
									</div>
									<!--[if (mso)|(IE)]></td><![endif]-->
									<!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
								</div>
							</div>
						</div>

						<div
							class="u-row-container"
							style="padding: 0px; background-color: transparent">
							<div
								class="u-row"
								style="
									margin: 0 auto;
									min-width: 320px;
									max-width: 600px;
									overflow-wrap: break-word;
									word-wrap: break-word;
									word-break: break-word;
									background-color: transparent;
								">
								<div
									style="
										border-collapse: collapse;
										display: table;
										width: 100%;
										height: 100%;
										background-color: transparent;
									">
									<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

									<!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #f8f7f7;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
									<div
										class="u-col u-col-100"
										style="
											max-width: 320px;
											min-width: 600px;
											display: table-cell;
											vertical-align: top;
										">
										<div
											style="
												background-color: #f8f7f7;
												height: 100%;
												width: 100% !important;
												border-radius: 0px;
												-webkit-border-radius: 0px;
												-moz-border-radius: 0px;
											">
											<!--[if (!mso)&(!IE)]><!--><div
												style="
													box-sizing: border-box;
													height: 100%;
													padding: 0px;
													border-top: 0px solid
														transparent;
													border-left: 0px solid
														transparent;
													border-right: 0px solid
														transparent;
													border-bottom: 0px solid
														transparent;
													border-radius: 0px;
													-webkit-border-radius: 0px;
													-moz-border-radius: 0px;
												"><!--<![endif]-->
												<table
													id="u_content_text_3"
													style="
														font-family: 'Open Sans',
															sans-serif;
													"
													role="presentation"
													cellpadding="0"
													cellspacing="0"
													width="100%"
													border="0">
													<tbody>
														<tr>
															<td
																class="v-container-padding-padding"
																style="
																	overflow-wrap: break-word;
																	word-break: break-word;
																	padding: 0px
																		50px
																		30px;
																	font-family: 'Open Sans',
																		sans-serif;
																"
																align="left">
																<div
																	class="v-text-align v-font-size"
																	style="
																		font-size: 14px;
																		line-height: 160%;
																		text-align: justify;
																		word-wrap: break-word;
																	">
																	<p
																		style="
																			line-height: 160%;
																			text-align: center;
																		">
																		<span
																			style="
																				font-size: 16px;
																				line-height: 25.6px;
																			"
																			><strong
																				>Your
																				activation
																				code
																				is:
																				${data.code}</strong
																			></span
																		>
																	</p>
																</div>
															</td>
														</tr>
													</tbody>
												</table>

												<table
													id="u_content_button_2"
													style="
														font-family: 'Open Sans',
															sans-serif;
													"
													role="presentation"
													cellpadding="0"
													cellspacing="0"
													width="100%"
													border="0">
													<tbody>
														<tr>
															<td
																class="v-container-padding-padding"
																style="
																	overflow-wrap: break-word;
																	word-break: break-word;
																	padding: 10px;
																	font-family: 'Open Sans',
																		sans-serif;
																"
																align="left">
																<!--[if mso
																	]><style>
																		.v-button {
																			background: transparent !important;
																		}
																	</style><!
																[endif]-->
																<div
																	class="v-text-align"
																	align="center">
																	<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.unlayer.com" style="height:37px; v-text-anchor:middle; width:174px;" arcsize="67.5%"  stroke="f" fillcolor="#385cdf"><w:anchorlock/><center style="color:#FFFFFF;"><![endif]-->
																	<a
																		href="https://www.unlayer.com"
																		target="_blank"
																		class="v-button v-size-width v-border-radius v-font-size"
																		style="
																			box-sizing: border-box;
																			display: inline-block;
																			text-decoration: none;
																			-webkit-text-size-adjust: none;
																			text-align: center;
																			color: #ffffff;
																			background-color: #385cdf;
																			border-radius: 25px;
																			-webkit-border-radius: 25px;
																			-moz-border-radius: 25px;
																			width: 30%;
																			max-width: 100%;
																			overflow-wrap: break-word;
																			word-break: break-word;
																			word-wrap: break-word;
																			mso-border-alt: none;
																			font-size: 14px;
																		">
																		<span
																			style="
																				display: block;
																				padding: 10px
																					20px;
																				line-height: 120%;
																			"
																			><strong
																				><span
																					style="
																						font-size: 14px;
																						line-height: 16.8px;
																					"
																					>Activate
																					now</span
																				></strong
																			></span
																		>
																	</a>
																	<!--[if mso]></center></v:roundrect><![endif]-->
																</div>
															</td>
														</tr>
													</tbody>
												</table>

												<!--[if (!mso)&(!IE)]><!-->
											</div>
											<!--<![endif]-->
										</div>
									</div>
									<!--[if (mso)|(IE)]></td><![endif]-->
									<!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
								</div>
							</div>
						</div>

						<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
					</td>
				</tr>
			</tbody>
		</table>
		<!--[if mso]></div><![endif]-->
		<!--[if IE]></div><![endif]-->
	</body>
</html>

`,
	});
};
