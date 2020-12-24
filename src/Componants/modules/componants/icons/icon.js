import React from "react";
import { AccountBookOutlined, AppstoreAddOutlined, UserOutlined, AuditOutlined, StopOutlined } from '@ant-design/icons';

const Icons = (icon) => {
	const { type, } = icon;
	const getIcon = () => {
		switch (type) {
			case "AccountHandling":
				return (
					<AccountBookOutlined />
				);
			case "ProductManagement":
				return (
					<AppstoreAddOutlined />
				);

			case "Products":
				return (
					<UserOutlined />
				);
			case "Card":
				return (
					<AuditOutlined />
				);
			case "Threat-i":
				return (
					<svg
						version="1.1"
						id="Layer_1"
						xmlns="http://www.w3.org/2000/svg"
						x="0px" y="0px"
						viewBox="0 0 306.95 60.53"
						style={{ enableBackground: "new 0 0 306.95 60.53" }}>
						<g>
							<g>
								<g>
									<path style={{ fill: "#659FD5" }} d="M270.74,17.9v16.97h-16.97C253.77,25.49,261.36,17.9,270.74,17.9z" />
								</g>
							</g>
							<g>
								<g>
									<path style={{ fill: "#659FD5" }} d="M238.22,34.26h-2.28C235.94,15.37,251.31,0,270.2,0v2.28C252.57,2.28,238.22,16.63,238.22,34.26z" />
								</g>
							</g>
							<g>
								<g>
									<g>
										<path style={{ fill: "#EDEDED" }} d="M0.13,10.72h30.34v1.27H16.01V60.4h-1.41V11.99H0.13V10.72z" />
									</g>
									<g>
										<path style={{ fill: "#EDEDED" }} d="M16.13,60.53h-1.67V12.12H0v-1.53h30.6v1.53H16.13V60.53z M14.72,60.27h1.15V11.86h14.47v-1.01H0.26v1.01
					h14.47V60.27z"/>
									</g>
								</g>
								<g>
									<g>
										<path style={{ fill: "#EDEDED" }} d="M70.27,35.49H39.29V60.4h-1.41V10.72h1.41v23.5h30.98v-23.5h1.41V60.4h-1.41V35.49z" />
									</g>
									<g>
										<path style={{ fill: "#EDEDED" }} d="M71.81,60.53h-1.67V35.62H39.42v24.91h-1.67V10.59h1.67v23.5h30.72v-23.5h1.67V60.53z M70.4,60.27h1.15
					V10.85H70.4v23.5H39.17v-23.5h-1.16v49.42h1.16V35.36H70.4V60.27z"/>
									</g>
								</g>
								<g>
									<g>
										<path style={{ fill: "#EDEDED" }} d="M112.62,60.4h-1.76L97.58,38.74H85.09V60.4h-1.41V37.4h12.56c10.16,0,14.54-5.43,14.54-12.7
					c0-7.69-4.02-12.56-14.68-12.56H83.68v-1.41H96.1c11.29,0,16.16,5.72,16.16,13.97c0,8.04-4.66,12.98-13.06,13.9L112.62,60.4z"/>
									</g>
									<g>
										<path style={{ fill: "#EDEDED" }} d="M112.84,60.53h-2.07l-0.04-0.06l-13.23-21.6H85.22v21.67h-1.67V37.27h12.69c9.16,0,14.41-4.58,14.41-12.57
					c0-8.37-4.76-12.43-14.55-12.43H83.55v-1.67H96.1c10.5,0,16.29,5.01,16.29,14.1c0,8.05-4.6,13.02-12.97,14L112.84,60.53z
					 M110.92,60.27h1.46L98.99,38.49l0.2-0.02c8.35-0.91,12.94-5.8,12.94-13.77c0-8.93-5.69-13.84-16.03-13.84H83.81v1.16H96.1
					c9.96,0,14.81,4.15,14.81,12.69c0,8.15-5.35,12.83-14.67,12.83H83.81v22.75h1.15V38.61h12.69l0.04,0.06L110.92,60.27z"/>
									</g>
								</g>
								<g>
									<g>
										<polygon style={{ fill: "#EDEDED" }} points="147.83,59.13 147.83,60.4 123.55,60.4 123.55,34.93 145.71,34.93 145.71,36.2 124.97,36.2 
					124.97,59.13 				"/>
									</g>
									<g>
										<path style={{ fill: "#EDEDED" }} d="M147.95,60.53h-24.53V34.8h22.41v1.53h-20.74V59h22.86V60.53z M123.68,60.27h24.02v-1.01h-22.86V36.07
					h20.74v-1.01h-21.9V60.27z"/>
									</g>
								</g>
								<g>
									<g>
										<rect x="123.55" y="10.72" style={{ fill: "#EDEDED" }} width="24.27" height="1.27" />
									</g>
									<g>
										<path style={{ fill: "#EDEDED" }} d="M147.95,12.12h-24.53v-1.53h24.53V12.12z M123.68,11.87h24.02v-1.01h-24.02V11.87z" />
									</g>
								</g>
								<g>
									<g>
										<polygon style={{ fill: "#EDEDED" }} points="189.53,60.4 187.91,60.4 182.76,46.71 182.26,45.44 170.48,14.46 158.69,45.44 158.2,46.71 
					152.98,60.4 151.35,60.4 169.77,12.21 171.18,12.21 				"/>
									</g>
									<g>
										<path style={{ fill: "#EDEDED" }} d="M189.72,60.53h-1.9l-5.68-15.04l-11.67-30.66l-11.67,30.66l-0.49,1.27l-5.25,13.77h-1.9l18.52-48.45h1.59
					l0.03,0.08L189.72,60.53z M188,60.27h1.35L171.1,12.33h-1.23l-18.32,47.94h1.35l5.69-14.88l11.9-31.29l0.12,0.31l11.79,30.98
					l0.49,1.27L188,60.27z"/>
									</g>
								</g>
								<g>
									<g>
										<path style={{ fill: "#EDEDED" }} d="M193.06,10.72h30.34v1.27h-14.47V60.4h-1.41V11.99h-14.47V10.72z" />
									</g>
									<g>
										<path style={{ fill: "#EDEDED" }} d="M209.07,60.53h-1.67V12.12h-14.47v-1.53h30.6v1.53h-14.47V60.53z M207.66,60.27h1.16V11.86h14.47v-1.01
					h-30.09v1.01h14.47V60.27z"/>
									</g>
								</g>
								<g>
									<g>
										<path style={{ fill: "#EDEDED" }} d="M270.81,59.38c-13.52,0-24.51-11-24.51-24.51s11-24.51,24.51-24.51c13.52,0,24.51,11,24.51,24.51
					S284.33,59.38,270.81,59.38z M270.81,11.38c-12.95,0-23.49,10.54-23.49,23.49s10.54,23.49,23.49,23.49s23.49-10.54,23.49-23.49
					S283.76,11.38,270.81,11.38z"/>
									</g>
								</g>
								<g>
									<g>
										<rect x="270.95" y="31.37" style={{ fill: "#EDEDED" }} width="2.08" height="21.91" />
									</g>
								</g>
								<g>
									<g>
										<circle style={{ fill: "#EDEDED" }} cx="272.01" cy="26.75" r="1.8" />
									</g>
								</g>
								<g>
									<g>
										<path style={{ fill: "#EDEDED" }} d="M299.01,3.62v0.72h-1.84v6.04h-0.88V4.34h-1.85V3.62H299.01z" />
									</g>
									<g>
										<path style={{ fill: "#EDEDED" }} d="M306.95,3.67v6.71h-0.88v-5l-2.23,5h-0.62l-2.24-5.01v5.01h-0.88V3.67h0.95l2.48,5.54l2.48-5.54H306.95z" />
									</g>
								</g>
							</g>
						</g>
					</svg>
				);
			case "Ekasha":
				return (
					<svg
						version="1.1"
						id="Layer_1"
						xmlns="http://www.w3.org/2000/svg"
						x="0px" y="0px"
						viewBox="0 0 306.95 60.53"
						style={{ enableBackground: "new 0 0 306.95 60.53" }}>
						<g>
							<g>
								<g>
									<g>
										<g>
											<path style={{ fill: "#EDEDED" }} d="M294.59,29.17c-0.12,0.54-0.25,1.07-0.37,1.61c-1.02,4.46-2.08,9.06-3.47,13.47
						c-2.19,6.94-6.9,11.06-14.01,12.23c-0.46,0.08-0.95,0.07-1.46,0.06c-0.13,0-0.25,0-0.37,0c-1.73,0-3.48,0-5.18,0
						c-4.17,0.01-8.49,0.02-12.73-0.1c-2.21-0.06-4.19-0.67-5.74-1.77c-1.62-1.15-2.72-2.77-3.25-4.81
						c-0.58-2.24-0.36-4.63,0.68-7.31c1.11-2.86,2.66-5.23,4.61-7.03c2.01-1.86,4.51-3.18,7.43-3.92c1.22-0.31,2.48-0.37,4-0.37
						c2.27,0,4.57,0.01,6.81,0.02l0.48,0c2.88,0.01,5.86,0.02,8.79,0.02l0.05,0c0,0.01,0,0.01-0.01,0.02
						c-0.71,2.57-1.37,5.14-1.94,7.64c-0.04,0.17-0.08,0.24-0.09,0.26c-0.02,0.01-0.1,0.03-0.33,0.03
						c-6.26-0.05-11.43-0.07-16.27-0.07c-3.42,0-6.1,2.43-6.24,5.65c-0.08,1.82,0.91,3.15,2.65,3.57c0.59,0.14,1.22,0.22,1.88,0.22
						c5.7,0.04,11.42,0.05,16.27,0.07c3.37,0.01,5.5-1.63,6.34-4.86c1.13-4.35,2.22-8.71,3.33-13.17c0.36-1.45,0.19-2.68-0.51-3.58
						c-0.69-0.89-1.85-1.37-3.34-1.38c-4.73-0.03-9.54-0.05-14.19-0.06c-1.89-0.01-3.78-0.01-5.68-0.02l-0.31,0
						c0.12-0.46,0.24-0.93,0.35-1.39c0.56-2.21,1.09-4.3,1.62-6.44c0-0.01,0-0.02,0.01-0.03c0.03,0,0.07,0,0.13,0
						c2.22,0.01,4.47,0.02,6.65,0.02c4.52,0.01,9.2,0.02,13.8,0.09c3.09,0.04,5.33,0.8,7.05,2.37
						C294.57,22.51,295.43,25.53,294.59,29.17z"/>
										</g>
									</g>
									<g>
										<g>
											<path style={{ fill: "#EDEDED" }} d="M146.23,26.53c-0.1,2.29-0.73,4.56-1.34,6.75c-0.27,0.97-0.55,1.97-0.78,2.98
						c-0.56,2.42-1.12,4.59-1.7,6.64c-0.91,3.21-2.38,5.89-4.37,7.98c-2.03,2.12-4.66,3.68-7.81,4.64
						c-1.09,0.33-2.35,0.48-3.94,0.47c-2.01-0.01-4.04-0.01-6.01,0c-3.9,0.01-7.94,0.02-11.89-0.11c-2.65-0.09-4.91-0.92-6.55-2.4
						c-1.68-1.53-2.61-3.69-2.69-6.26c-0.1-3.18,0.94-6.31,3.07-9.31c1.7-2.38,3.69-4.2,5.94-5.4c2.3-1.23,4.93-1.85,7.81-1.84
						c1.11,0,2.23,0.01,3.34,0.01c0.71,0,1.43,0.01,2.14,0.01c3.54,0.01,7.2,0.03,10.79,0.03l0.02,0c0,0,0,0,0,0
						c-0.7,2.61-1.34,5.21-1.93,7.63c-0.03,0.11-0.05,0.18-0.07,0.22c-0.02,0.04-0.03,0.05-0.03,0.05c0,0-0.06,0.04-0.3,0.04
						c-4.83-0.05-10-0.07-16.27-0.07c-3.24,0-5.56,1.88-6.21,5.04c-0.21,1.02-0.05,1.96,0.45,2.72c0.5,0.77,1.31,1.29,2.32,1.5
						c0.57,0.12,1.17,0.18,1.77,0.19c5.52,0.03,11.04,0.05,16.17,0.07c3.39,0.01,5.54-1.65,6.38-4.93
						c1.02-3.98,2.17-8.49,3.28-12.88c0.4-1.6,0.25-2.88-0.45-3.79c-0.71-0.92-1.93-1.38-3.61-1.39c-4.63-0.02-9.33-0.04-13.88-0.05
						c-1.9-0.01-3.8-0.01-5.7-0.02l-0.34,0c0.12-0.47,0.23-0.93,0.35-1.39c0.42-1.67,0.81-3.25,1.23-4.86
						c0.19-0.75,0.35-1.35,0.51-1.48c0.17-0.13,0.76-0.13,1.59-0.12c1.76,0.01,3.53,0.01,5.29,0.02c4.3,0.01,8.74,0.02,13.11,0.06
						c2.99,0.03,5.1,0.6,6.82,1.85C145.2,20.9,146.38,23.39,146.23,26.53z"/>
										</g>
									</g>
									<g>
										<g>
											<path style={{ fill: "#EDEDED" }} d="M46.95,27.76c-0.62,3.26-1.89,6.06-3.77,8.31c-1.87,2.24-4.39,4-7.5,5.24c-1.75,0.7-3.61,0.79-5.37,0.78
						l-0.04,0c-1.81-0.01-3.62-0.01-5.44-0.02l-1.67-0.01c-0.82,0-1.64-0.01-2.45-0.01c-2.17-0.01-4.41-0.02-6.61-0.01
						c-0.03,0-0.06,0-0.08,0c0-0.01,0.01-0.02,0.01-0.03c0.66-2.36,1.24-4.78,1.81-7.12l0.1-0.43c0.05-0.23,0.1-0.27,0.1-0.27
						c0,0,0.06-0.04,0.3-0.04c5.51,0.05,10.98,0.07,16.08,0.07c3.3,0,5.55-1.68,6.32-4.74c0.32-1.27,0.15-2.45-0.49-3.31
						c-0.64-0.87-1.67-1.36-2.98-1.43c-1.13-0.06-2.27-0.05-3.37-0.05c-0.44,0-0.89,0-1.33,0c-4.06-0.02-8.12-0.03-12.18-0.05
						c-3.76-0.01-5.76,1.53-6.69,5.14l-0.68,2.64c-0.85,3.29-1.72,6.69-2.57,10.04c-0.41,1.6-0.26,2.87,0.44,3.78
						c0.7,0.9,1.89,1.37,3.54,1.38c5.4,0.04,10.68,0.07,15.98,0.04c0.13,0,0.22,0,0.29,0.01c-0.01,0.07-0.04,0.16-0.07,0.29
						c-0.7,2.5-1.33,5.05-1.91,7.44c-0.02,0.09-0.04,0.14-0.05,0.17c-0.03,0-0.07,0.01-0.14,0.01c-1.93-0.01-3.89,0-5.79,0.01
						c-3.85,0.03-7.82,0.05-11.71-0.15c-3.15-0.16-5.67-1.33-7.27-3.39c-1.57-2.01-2.11-4.73-1.53-7.64
						c0.87-4.39,2.02-8.99,3.73-14.91c1.86-6.46,6.01-10.6,12.32-12.3c1.4-0.38,2.85-0.42,4.08-0.42l2.23,0c2.36,0,4.76,0,7.17,0.01
						c2.38,0.01,4.78,0.03,7.15,0.05c3.77,0.05,6.27,1.01,8.12,3.13C46.88,22.15,47.53,24.75,46.95,27.76z"/>
										</g>
									</g>
									<g>
										<g>
											<path style={{ fill: "#EDEDED" }} d="M191.2,17.44c0,0.01-0.01,0.03-0.01,0.04l-0.29,1.13c-0.58,2.22-1.18,4.51-1.71,6.78
						c-0.1,0.43-0.13,0.46-0.59,0.45c-6.09-0.05-12.29-0.07-18.28-0.09l-3.64-0.01l-0.2,0c-0.47,0-0.95-0.01-1.44,0.05
						c-1.03,0.12-1.76,0.7-2.12,1.65c-0.35,0.94-0.35,1.65,0,2.17c0.35,0.51,0.98,0.76,1.95,0.77c2.42,0.02,4.88,0.03,7.26,0.04
						c2.38,0.01,4.84,0.02,7.25,0.04c1.73,0.01,3.55,0.12,5.2,0.81c3.19,1.34,4.93,3.84,5.18,7.43c0.23,3.43-0.74,6.95-2.75,9.92
						c-2,2.96-4.93,5.24-8.24,6.42c-2.21,0.78-4.38,1.15-6.63,1.13c-3.56-0.04-7.16-0.05-10.73-0.07c-2.21-0.01-4.41-0.01-6.58-0.02
						c-2.21-0.01-4.41-0.01-6.62-0.02l-0.43,0c0.12-0.47,0.24-0.94,0.36-1.41c0.61-2.37,1.18-4.62,1.75-6.91
						c0-0.01,0-0.02,0.01-0.03c0.18,0.01,0.35,0.01,0.51,0.01c0.07,0,0.14,0,0.2,0l5.45,0.02c6.23,0.02,12.47,0.05,18.7,0.07l0.01,0
						c1.12,0,2.31-0.06,3.41-0.59c2.06-0.97,3.42-3.8,2.91-6.07c-0.32-1.43-1.51-2.29-3.18-2.31c-2.65-0.03-5.34-0.04-7.95-0.05
						c-1.93-0.01-3.92-0.02-5.89-0.03c-1.02-0.01-2.02-0.05-2.96-0.14c-2.4-0.21-4.34-1.2-5.62-2.87c-1.3-1.7-1.78-3.99-1.35-6.46
						c0.58-3.3,2.33-6.31,4.94-8.49c2.62-2.19,5.93-3.4,9.34-3.42c4.36-0.02,8.79,0,13.07,0.02
						C184.67,17.43,187.96,17.44,191.2,17.44z"/>
										</g>
									</g>
									<g>
										<g>
											<path style={{ fill: "#EDEDED" }} d="M76.52,34.53c-0.08,0.49,0.2,0.89,0.46,1.23c4.36,5.54,8.78,11.17,13.05,16.63
						c0.91,1.16,1.81,2.31,2.72,3.47c-1.38,0-2.77-0.01-4.15-0.01c-2.54-0.01-5.17-0.02-7.75-0.01c-0.31,0-0.43-0.06-0.62-0.3
						c-2.45-3.15-4.95-6.35-7.37-9.45c-2.04-2.6-4.14-5.3-6.21-7.95c-0.99-1.27-1.41-2.5-1.25-3.65c0.16-1.16,0.91-2.23,2.22-3.2
						c1.32-0.96,2.72-1.88,4.07-2.77c0.53-0.35,1.09-0.71,1.63-1.07c4.49-2.99,9.05-6.02,13.46-8.96l1.67-1.11
						c0.36-0.24,0.57-0.37,0.87-0.37l0,0c3.51,0.03,7.07,0.04,10.51,0.05l2.29,0.01c-1.02,0.68-2.04,1.35-3.06,2.03
						c-3.64,2.41-7.08,4.69-10.59,7.03c-1.17,0.78-2.34,1.56-3.51,2.34c-2.5,1.67-5.09,3.4-7.65,5.07
						C76.99,33.75,76.6,34.05,76.52,34.53z"/>
										</g>
									</g>
									<g>
										<g>
											<path style={{ fill: "#EDEDED" }} d="M244.28,29.3c-1.46,6.1-3.04,12.29-4.57,18.27c-0.57,2.24-1.16,4.55-1.74,6.83
						c-0.06,0.25-0.11,0.5-0.15,0.75c-0.09,0.5-0.19,1.07-0.4,1.26c-0.16,0.15-0.73,0.08-1.15,0.03c-0.28-0.03-0.56-0.06-0.84-0.07
						l-0.03,0c-1.67,0.01-3.3,0-5.03-0.01c-0.41,0-0.82,0-1.23-0.01c2.16-8.5,4.28-16.87,6.41-25.24c0.01-0.03,0.03-0.07,0.04-0.12
						c0.45-1.77,0.37-2.98-0.26-3.8c-0.63-0.82-1.77-1.2-3.59-1.21l-2.23-0.01c-4.54-0.02-9.23-0.04-13.84-0.03
						c-0.03,0-0.06,0-0.09,0c0.01-0.03,0.01-0.06,0.02-0.09c0.67-2.46,1.28-4.97,1.88-7.4l0.17-0.69c0.03-0.12,0.06-0.18,0.07-0.2
						c0.02-0.01,0.09-0.02,0.21-0.02c2.58,0.02,5.2,0.03,7.74,0.04c2.86,0.01,5.81,0.02,8.71,0.05c2.95,0.03,5.26,0.75,7.05,2.21
						C244.27,22.15,245.23,25.33,244.28,29.3z"/>
										</g>
									</g>
									<g>
										<g>
											<path style={{ fill: "#EDEDED" }} d="M216.81,0.6l-1.22,4.77c-1.02,4.01-2.03,7.99-3.05,11.98l-1.42,5.6c-2.74,10.76-5.57,21.89-8.33,32.85
						c-0.12,0.48-0.15,0.5-0.63,0.49c-1.29-0.03-2.6-0.04-3.9-0.05c-0.79,0-1.57,0-2.34,0c-0.53,0-1.05,0-1.58,0l0.75-2.94
						c0.69-2.71,1.36-5.39,2.05-8.08c0.81-3.2,1.62-6.39,2.44-9.59c2.87-11.31,5.85-23,8.76-34.51c0.14-0.55,0.18-0.59,0.67-0.58
						c2.07,0.06,4.17,0.06,6.21,0.06C215.74,0.6,216.27,0.6,216.81,0.6z"/>
										</g>
									</g>
									<g>
										<g>
											<path style={{ fill: "#EDEDED" }} d="M70.39,0.05C70.3,0.43,70.2,0.8,70.11,1.17c-0.34,1.36-0.66,2.65-1,3.96l-2.44,9.59
						c-3.38,13.3-6.88,27.05-10.3,40.59c-0.11,0.43-0.11,0.44-0.5,0.43c-1.33-0.03-2.64-0.04-3.97-0.04c-0.78,0-1.57,0-2.38,0
						c-0.53,0-1.06,0-1.6,0c0.63-2.46,1.25-4.9,1.87-7.34c1.52-5.98,3.1-12.16,4.64-18.21l0.03-0.11
						c2.47-9.72,5.03-19.78,7.52-29.68c0.07-0.26,0.12-0.31,0.12-0.32c0,0,0.06-0.04,0.34-0.03c2.11,0.04,4.19,0.04,6.38,0.05
						C69.34,0.05,69.86,0.05,70.39,0.05z"/>
										</g>
									</g>
								</g>
							</g>
							<g>
								<g>
									<g>
										<g>
											<path style={{ fill: "#F99826" }} d="M332.2,30.16c-0.09,0.92-0.81,1.67-1.4,2.13c-1.71,1.34-19.09,13.67-21.73,15.55
						c-0.04,0.03-0.07,0.05-0.09,0.06c-2.21-0.02-4.42-0.03-6.63-0.04c1.97-1.41,16.95-12.08,20.98-14.92
						c0.33-0.23,1.22-0.85,1.36-2.02c0.14-1.16-0.55-1.96-0.85-2.3c-4.24-4.88-8.52-9.86-12.67-14.67l-0.82-0.95
						c2.71,0.01,5.43,0.02,8.14,0.02c1.97,2.29,3.95,4.58,5.93,6.86c2.26,2.62,4.53,5.23,6.79,7.86
						C331.71,28.33,332.29,29.23,332.2,30.16z"/>
											<path style={{ fill: "#F99826" }} d="M309.19,48.61l-0.21,0c-2.21-0.02-4.42-0.03-6.63-0.04l-2.18-0.01l3.16-2.25
						c4.4-3.14,16.09-11.47,19.6-13.94c0.29-0.2,0.96-0.67,1.06-1.53c0.1-0.85-0.43-1.46-0.68-1.75
						c-4.31-4.97-8.62-9.97-12.67-14.68l-1.83-2.12l1.54,0.01c2.67,0.01,5.34,0.02,8,0.02c0.05,0,0.09,0,0.14,0h0.32l0.21,0.24
						c1.91,2.22,3.82,4.43,5.73,6.63l0.35,0.4c2.21,2.56,4.43,5.12,6.64,7.68c0.59,0.68,1.27,1.74,1.15,2.93v0
						c-0.09,0.92-0.67,1.83-1.66,2.61c-1.41,1.11-13.3,9.56-19.01,13.62c-1.28,0.91-2.26,1.61-2.74,1.95
						c-0.06,0.04-0.09,0.06-0.11,0.08L309.19,48.61z M304.54,47.18c1.41,0.01,2.82,0.01,4.22,0.02c0.51-0.36,1.44-1.03,2.65-1.88
						c5.7-4.06,17.57-12.5,18.95-13.58c0.48-0.38,1.07-0.97,1.13-1.65c0.07-0.73-0.48-1.49-0.82-1.88
						c-2.21-2.57-4.42-5.12-6.64-7.68l-0.35-0.4c-1.84-2.13-3.68-4.26-5.52-6.39c-2.09,0-4.19-0.01-6.28-0.01
						c3.99,4.64,8.23,9.57,12.48,14.45c0.33,0.38,1.2,1.38,1.02,2.85c-0.18,1.48-1.29,2.25-1.65,2.51
						C320.33,35.92,309.21,43.85,304.54,47.18z"/>
										</g>
									</g>
								</g>
							</g>
							<g>
								<g>
									<circle style={{ fill: "#F99826" }} cx="28.11" cy="5.6" r="4.39" />
								</g>
							</g>
						</g>
					</svg>
				);
			case "Anrita":
				return (
					<svg
						version="1.1"
						id="Layer_1"
						xmlns="http://www.w3.org/2000/svg"
						x="0px" y="0px"
						viewBox="0 0 306.95 60.53"
						style={{ enableBackground: "new 0 0 306.95 60.53" }}>
						<g>
							<g>
								<path class="st0" d="M237.5,9.89V7.47h-0.88V6.94h2.36v0.53h-0.87v2.43H237.5z" />
								<path class="st0" d="M239.33,9.89V6.94h0.9l0.59,2.25l0.58-2.25h0.9v2.96h-0.57V7.51l-0.6,2.38h-0.62l-0.61-2.38v2.38H239.33z" />
							</g>
							<g>
								<path class="st0" d="M24.11,47.43c-1.3,2.01-3,3.54-5.1,4.59c-2.1,1.05-4.55,1.58-7.34,1.58c-3.73,0-6.61-1.06-8.63-3.19
			C1.01,48.28,0,45.26,0,41.33c0-3.64,1.01-6.42,3.03-8.33c2.02-1.91,5.36-3.23,10.01-3.94c1.06-0.16,2.46-0.35,4.18-0.57
			c4.37-0.57,6.56-1.83,6.56-3.79c0-1.56-0.49-2.68-1.45-3.35c-0.97-0.67-2.59-1.01-4.86-1.01c-2.08,0-3.68,0.41-4.79,1.24
			c-1.11,0.83-1.67,2.01-1.67,3.54v0.57H1.38v-0.71c0-3.95,1.39-7.05,4.18-9.31c2.79-2.26,6.64-3.39,11.56-3.39
			c5.39,0,9.52,0.93,12.39,2.8s4.31,4.56,4.31,8.08v21.91c0,1.61,0.16,2.81,0.5,3.6c0.33,0.79,0.89,1.39,1.67,1.79v1.74H25.24
			c-0.35-0.66-0.63-1.39-0.82-2.2C24.24,49.22,24.13,48.35,24.11,47.43z M23.93,33.25c-1.68,0.78-3.61,1.41-5.8,1.88
			c-2.19,0.47-3.31,0.72-3.39,0.74c-1.82,0.52-3.09,1.17-3.81,1.95c-0.72,0.78-1.08,1.86-1.08,3.23c0,1.42,0.46,2.55,1.38,3.39
			c0.92,0.84,2.16,1.26,3.72,1.26c2.79,0,4.98-0.79,6.58-2.36c1.6-1.57,2.39-3.72,2.39-6.43V33.25z"/>
								<path class="st0" d="M42.82,52.22V13.68h10.1v4.57c1.44-1.87,3.14-3.27,5.1-4.2c1.96-0.93,4.15-1.4,6.56-1.4
			c4.25,0,7.44,1.1,9.55,3.31c2.11,2.21,3.17,5.54,3.17,9.98v26.27H67V28.93c0-2.76-0.47-4.74-1.4-5.92
			c-0.93-1.18-2.45-1.77-4.55-1.77c-2.43,0-4.36,0.73-5.78,2.18c-1.42,1.45-2.13,3.43-2.13,5.94v22.86H42.82z"/>
								<path class="st0" d="M86.18,52.22V13.68h9.57v6.59c1.35-2.65,2.92-4.59,4.71-5.83c1.8-1.24,3.94-1.86,6.42-1.86
			c0.4,0,0.71,0.01,0.94,0.02c0.22,0.01,0.41,0.03,0.55,0.05l0.04,10.46h-3.44c-2.81,0-4.93,0.73-6.35,2.2
			c-1.42,1.47-2.13,3.64-2.13,6.52v20.38H86.18z"/>
								<path class="st0" d="M114.25,9.39V0h10.32v9.39H114.25z M114.25,52.22V13.68h10.32v38.53H114.25z" />
								<path class="st0" d="M150.91,52.5c-0.95,0.02-2.07,0.06-3.39,0.12c-1.31,0.06-2.14,0.09-2.5,0.09c-3.95,0-6.65-0.74-8.1-2.22
			c-1.45-1.48-2.18-4.39-2.18-8.74V20.92h-5.1v-7.23h5.1V3.16h10.21v10.53h5.96v7.23h-5.96v21.34c0,1.02,0.22,1.68,0.67,2
			c0.45,0.32,1.37,0.48,2.76,0.48h2.52V52.5z"/>
								<path class="st0" d="M178.95,47.43c-1.3,2.01-3,3.54-5.1,4.59c-2.1,1.05-4.55,1.58-7.34,1.58c-3.73,0-6.61-1.06-8.63-3.19
			c-2.02-2.13-3.03-5.15-3.03-9.07c0-3.64,1.01-6.42,3.03-8.33c2.02-1.91,5.36-3.23,10.01-3.94c1.06-0.16,2.46-0.35,4.18-0.57
			c4.37-0.57,6.56-1.83,6.56-3.79c0-1.56-0.48-2.68-1.45-3.35c-0.97-0.67-2.59-1.01-4.86-1.01c-2.08,0-3.67,0.41-4.79,1.24
			c-1.11,0.83-1.67,2.01-1.67,3.54v0.57h-9.64v-0.71c0-3.95,1.39-7.05,4.18-9.31c2.79-2.26,6.64-3.39,11.56-3.39
			c5.39,0,9.52,0.93,12.39,2.8c2.87,1.87,4.31,4.56,4.31,8.08v21.91c0,1.61,0.16,2.81,0.5,3.6c0.33,0.79,0.89,1.39,1.67,1.79v1.74
			h-10.74c-0.35-0.66-0.63-1.39-0.82-2.2C179.08,49.22,178.97,48.35,178.95,47.43z M178.77,33.25c-1.68,0.78-3.61,1.41-5.8,1.88
			c-2.19,0.47-3.31,0.72-3.39,0.74c-1.82,0.52-3.09,1.17-3.81,1.95c-0.72,0.78-1.08,1.86-1.08,3.23c0,1.42,0.46,2.55,1.38,3.39
			c0.92,0.84,2.16,1.26,3.72,1.26c2.79,0,4.98-0.79,6.58-2.36c1.6-1.57,2.39-3.72,2.39-6.43V33.25z"/>
							</g>
							<g>
								<g>
									<defs>
										<circle id="SVGID_1_" cx="218.93" cy="31.03" r="23.7" />
									</defs>
									<clipPath id="SVGID_2_">
										<use style={{ overflow: "visible" }} />
									</clipPath>
									<rect x="195.23" y="7.33" class="st1" width="0.19" height="47.4" />
									<rect x="195.42" y="7.33" class="st2" width="0.19" height="47.4" />
									<rect x="195.61" y="7.33" class="st3" width="0.19" height="47.4" />
									<rect x="195.8" y="7.33" class="st4" width="0.19" height="47.4" />
									<rect x="195.99" y="7.33" class="st5" width="0.19" height="47.4" />
									<rect x="196.19" y="7.33" class="st6" width="0.19" height="47.4" />
									<rect x="196.38" y="7.33" class="st7" width="0.19" height="47.4" />
									<rect x="196.57" y="7.33" class="st8" width="0.19" height="47.4" />
									<rect x="196.76" y="7.33" class="st9" width="0.19" height="47.4" />
									<rect x="196.95" y="7.33" class="st10" width="0.19" height="47.4" />
									<rect x="197.14" y="7.33" class="st11" width="0.19" height="47.4" />
									<rect x="197.33" y="7.33" class="st12" width="0.19" height="47.4" />
									<rect x="197.52" y="7.33" class="st13" width="0.19" height="47.4" />
									<rect x="197.71" y="7.33" class="st14" width="0.19" height="47.4" />
									<rect x="197.9" y="7.33" class="st15" width="0.19" height="47.4" />
									<rect x="198.09" y="7.33" class="st16" width="0.19" height="47.4" />
									<rect x="198.28" y="7.33" class="st17" width="0.19" height="47.4" />
									<rect x="198.47" y="7.33" class="st18" width="0.19" height="47.4" />
									<rect x="198.66" y="7.33" class="st19" width="0.19" height="47.4" />
									<rect x="198.85" y="7.33" class="st20" width="0.19" height="47.4" />
									<rect x="199.04" y="7.33" class="st21" width="0.19" height="47.4" />
									<rect x="199.23" y="7.33" class="st22" width="0.19" height="47.4" />
									<rect x="199.42" y="7.33" class="st23" width="0.19" height="47.4" />
									<rect x="199.61" y="7.33" class="st24" width="0.19" height="47.4" />
									<rect x="199.8" y="7.33" class="st25" width="0.19" height="47.4" />
									<rect x="199.99" y="7.33" class="st26" width="0.19" height="47.4" />
									<rect x="200.18" y="7.33" class="st27" width="0.19" height="47.4" />
									<rect x="200.37" y="7.33" class="st28" width="0.19" height="47.4" />
									<rect x="200.56" y="7.33" class="st29" width="0.19" height="47.4" />
									<rect x="200.75" y="7.33" class="st30" width="0.19" height="47.4" />
									<rect x="200.94" y="7.33" class="st31" width="0.19" height="47.4" />
									<rect x="201.13" y="7.33" class="st32" width="0.19" height="47.4" />
									<rect x="201.32" y="7.33" class="st33" width="0.19" height="47.4" />
									<rect x="201.51" y="7.33" class="st34" width="0.19" height="47.4" />
									<rect x="201.71" y="7.33" class="st35" width="0.19" height="47.4" />
									<rect x="201.9" y="7.33" class="st36" width="0.19" height="47.4" />
									<rect x="202.09" y="7.33" class="st37" width="0.19" height="47.4" />
									<rect x="202.28" y="7.33" class="st38" width="0.19" height="47.4" />
									<rect x="202.47" y="7.33" class="st39" width="0.19" height="47.4" />
									<rect x="202.66" y="7.33" class="st40" width="0.19" height="47.4" />
									<rect x="202.85" y="7.33" class="st41" width="0.19" height="47.4" />
									<rect x="203.04" y="7.33" class="st42" width="0.19" height="47.4" />
									<rect x="203.23" y="7.33" class="st43" width="0.19" height="47.4" />
									<rect x="203.42" y="7.33" class="st44" width="0.19" height="47.4" />
									<rect x="203.61" y="7.33" class="st45" width="0.19" height="47.4" />
									<rect x="203.8" y="7.33" class="st46" width="0.19" height="47.4" />
									<rect x="203.99" y="7.33" class="st47" width="0.19" height="47.4" />
									<rect x="204.18" y="7.33" class="st48" width="0.19" height="47.4" />
									<rect x="204.37" y="7.33" class="st49" width="0.19" height="47.4" />
									<rect x="204.56" y="7.33" class="st50" width="0.19" height="47.4" />
									<rect x="204.75" y="7.33" class="st51" width="0.19" height="47.4" />
									<rect x="204.94" y="7.33" class="st52" width="0.19" height="47.4" />
									<rect x="205.13" y="7.33" class="st53" width="0.19" height="47.4" />
									<rect x="205.32" y="7.33" class="st54" width="0.19" height="47.4" />
									<rect x="205.51" y="7.33" class="st55" width="0.19" height="47.4" />
									<rect x="205.7" y="7.33" class="st56" width="0.19" height="47.4" />
									<rect x="205.89" y="7.33" class="st57" width="0.19" height="47.4" />
									<rect x="206.08" y="7.33" class="st58" width="0.19" height="47.4" />
									<rect x="206.27" y="7.33" class="st59" width="0.19" height="47.4" />
									<rect x="206.46" y="7.33" class="st60" width="0.19" height="47.4" />
									<rect x="206.65" y="7.33" class="st61" width="0.19" height="47.4" />
									<rect x="206.84" y="7.33" class="st62" width="0.19" height="47.4" />
									<rect x="207.03" y="7.33" class="st63" width="0.19" height="47.4" />
									<rect x="207.23" y="7.33" class="st64" width="0.19" height="47.4" />
									<rect x="207.42" y="7.33" class="st65" width="0.19" height="47.4" />
									<rect x="207.61" y="7.33" class="st66" width="0.19" height="47.4" />
									<rect x="207.8" y="7.33" class="st67" width="0.19" height="47.4" />
									<rect x="207.99" y="7.33" class="st68" width="0.19" height="47.4" />
									<rect x="208.18" y="7.33" class="st69" width="0.19" height="47.4" />
									<rect x="208.37" y="7.33" class="st70" width="0.19" height="47.4" />
									<rect x="208.56" y="7.33" class="st71" width="0.19" height="47.4" />
									<rect x="208.75" y="7.33" class="st72" width="0.19" height="47.4" />
									<rect x="208.94" y="7.33" class="st73" width="0.19" height="47.4" />
									<rect x="209.13" y="7.33" class="st74" width="0.19" height="47.4" />
									<rect x="209.32" y="7.33" class="st75" width="0.19" height="47.4" />
									<rect x="209.51" y="7.33" class="st76" width="0.19" height="47.4" />
									<rect x="209.7" y="7.33" class="st77" width="0.19" height="47.4" />
									<rect x="209.89" y="7.33" class="st78" width="0.19" height="47.4" />
									<rect x="210.08" y="7.33" class="st79" width="0.19" height="47.4" />
									<rect x="210.27" y="7.33" class="st80" width="0.19" height="47.4" />
									<rect x="210.46" y="7.33" class="st81" width="0.19" height="47.4" />
									<rect x="210.65" y="7.33" class="st82" width="0.19" height="47.4" />
									<rect x="210.84" y="7.33" class="st83" width="0.19" height="47.4" />
									<rect x="211.03" y="7.33" class="st84" width="0.19" height="47.4" />
									<rect x="211.22" y="7.33" class="st85" width="0.19" height="47.4" />
									<rect x="211.41" y="7.33" class="st86" width="0.19" height="47.4" />
									<rect x="211.6" y="7.33" class="st87" width="0.19" height="47.4" />
									<rect x="211.79" y="7.33" class="st88" width="0.19" height="47.4" />
									<rect x="211.98" y="7.33" class="st89" width="0.19" height="47.4" />
									<rect x="212.17" y="7.33" class="st90" width="0.19" height="47.4" />
									<rect x="212.36" y="7.33" class="st91" width="0.19" height="47.4" />
									<rect x="212.55" y="7.33" class="st92" width="0.19" height="47.4" />
									<rect x="212.75" y="7.33" class="st93" width="0.19" height="47.4" />
									<rect x="212.94" y="7.33" class="st94" width="0.19" height="47.4" />
									<rect x="213.13" y="7.33" class="st95" width="0.19" height="47.4" />
									<rect x="213.32" y="7.33" class="st96" width="0.19" height="47.4" />
									<rect x="213.51" y="7.33" class="st97" width="0.19" height="47.4" />
									<rect x="213.7" y="7.33" class="st98" width="0.19" height="47.4" />
									<rect x="213.89" y="7.33" class="st99" width="0.19" height="47.4" />
									<rect x="214.08" y="7.33" class="st100" width="0.19" height="47.4" />
									<rect x="214.27" y="7.33" class="st101" width="0.19" height="47.4" />
									<rect x="214.46" y="7.33" class="st102" width="0.19" height="47.4" />
									<rect x="214.65" y="7.33" class="st103" width="0.19" height="47.4" />
									<rect x="214.84" y="7.33" class="st104" width="0.19" height="47.4" />
									<rect x="215.03" y="7.33" class="st105" width="0.19" height="47.4" />
									<rect x="215.22" y="7.33" class="st106" width="0.19" height="47.4" />
									<rect x="215.41" y="7.33" class="st107" width="0.19" height="47.4" />
									<rect x="215.6" y="7.33" class="st108" width="0.19" height="47.4" />
									<rect x="215.79" y="7.33" class="st109" width="0.19" height="47.4" />
									<rect x="215.98" y="7.33" class="st110" width="0.19" height="47.4" />
									<rect x="216.17" y="7.33" class="st111" width="0.19" height="47.4" />
									<rect x="216.36" y="7.33" class="st112" width="0.19" height="47.4" />
									<rect x="216.55" y="7.33" class="st113" width="0.19" height="47.4" />
									<rect x="216.74" y="7.33" class="st114" width="0.19" height="47.4" />
									<rect x="216.93" y="7.33" class="st115" width="0.19" height="47.4" />
									<rect x="217.12" y="7.33" class="st116" width="0.19" height="47.4" />
									<rect x="217.31" y="7.33" class="st117" width="0.19" height="47.4" />
									<rect x="217.5" y="7.33" class="st118" width="0.19" height="47.4" />
									<rect x="217.69" y="7.33" class="st119" width="0.19" height="47.4" />
									<rect x="217.88" y="7.33" class="st120" width="0.19" height="47.4" />
									<rect x="218.07" y="7.33" class="st121" width="0.19" height="47.4" />
									<rect x="218.27" y="7.33" class="st122" width="0.19" height="47.4" />
									<rect x="218.46" y="7.33" class="st123" width="0.19" height="47.4" />
									<rect x="218.65" y="7.33" class="st124" width="0.19" height="47.4" />
									<rect x="218.84" y="7.33" class="st125" width="0.19" height="47.4" />
									<rect x="219.03" y="7.33" class="st126" width="0.19" height="47.4" />
									<rect x="219.22" y="7.33" class="st127" width="0.19" height="47.4" />
									<rect x="219.41" y="7.33" class="st128" width="0.19" height="47.4" />
									<rect x="219.6" y="7.33" class="st129" width="0.19" height="47.4" />
									<rect x="219.79" y="7.33" class="st130" width="0.19" height="47.4" />
									<rect x="219.98" y="7.33" class="st131" width="0.19" height="47.4" />
									<rect x="220.17" y="7.33" class="st132" width="0.19" height="47.4" />
									<rect x="220.36" y="7.33" class="st133" width="0.19" height="47.4" />
									<rect x="220.55" y="7.33" class="st134" width="0.19" height="47.4" />
									<rect x="220.74" y="7.33" class="st135" width="0.19" height="47.4" />
									<rect x="220.93" y="7.33" class="st136" width="0.19" height="47.4" />
									<rect x="221.12" y="7.33" class="st137" width="0.19" height="47.4" />
									<rect x="221.31" y="7.33" class="st138" width="0.19" height="47.4" />
									<rect x="221.5" y="7.33" class="st139" width="0.19" height="47.4" />
									<rect x="221.69" y="7.33" class="st140" width="0.19" height="47.4" />
									<rect x="221.88" y="7.33" class="st141" width="0.19" height="47.4" />
									<rect x="222.07" y="7.33" class="st142" width="0.19" height="47.4" />
									<rect x="222.26" y="7.33" class="st143" width="0.19" height="47.4" />
									<rect x="222.45" y="7.33" class="st144" width="0.19" height="47.4" />
									<rect x="222.64" y="7.33" class="st145" width="0.19" height="47.4" />
									<rect x="222.83" y="7.33" class="st146" width="0.19" height="47.4" />
									<rect x="223.02" y="7.33" class="st147" width="0.19" height="47.4" />
									<rect x="223.21" y="7.33" class="st148" width="0.19" height="47.4" />
									<rect x="223.4" y="7.33" class="st149" width="0.19" height="47.4" />
									<rect x="223.59" y="7.33" class="st150" width="0.19" height="47.4" />
									<rect x="223.79" y="7.33" class="st151" width="0.19" height="47.4" />
									<rect x="223.98" y="7.33" class="st152" width="0.19" height="47.4" />
									<rect x="224.17" y="7.33" class="st153" width="0.19" height="47.4" />
									<rect x="224.36" y="7.33" class="st154" width="0.19" height="47.4" />
									<rect x="224.55" y="7.33" class="st155" width="0.19" height="47.4" />
									<rect x="224.74" y="7.33" class="st156" width="0.19" height="47.4" />
									<rect x="224.93" y="7.33" class="st157" width="0.19" height="47.4" />
									<rect x="225.12" y="7.33" class="st158" width="0.19" height="47.4" />
									<rect x="225.31" y="7.33" class="st159" width="0.19" height="47.4" />
									<rect x="225.5" y="7.33" class="st160" width="0.19" height="47.4" />
									<rect x="225.69" y="7.33" class="st161" width="0.19" height="47.4" />
									<rect x="225.88" y="7.33" class="st162" width="0.19" height="47.4" />
									<rect x="226.07" y="7.33" class="st163" width="0.19" height="47.4" />
									<rect x="226.26" y="7.33" class="st164" width="0.19" height="47.4" />
									<rect x="226.45" y="7.33" class="st165" width="0.19" height="47.4" />
									<rect x="226.64" y="7.33" class="st166" width="0.19" height="47.4" />
									<rect x="226.83" y="7.33" class="st167" width="0.19" height="47.4" />
									<rect x="227.02" y="7.33" class="st168" width="0.19" height="47.4" />
									<rect x="227.21" y="7.33" class="st169" width="0.19" height="47.4" />
									<rect x="227.4" y="7.33" class="st170" width="0.19" height="47.4" />
									<rect x="227.59" y="7.33" class="st171" width="0.19" height="47.4" />
									<rect x="227.78" y="7.33" class="st172" width="0.19" height="47.4" />
									<rect x="227.97" y="7.33" class="st173" width="0.19" height="47.4" />
									<rect x="228.16" y="7.33" class="st174" width="0.19" height="47.4" />
									<rect x="228.35" y="7.33" class="st175" width="0.19" height="47.4" />
									<rect x="228.54" y="7.33" class="st176" width="0.19" height="47.4" />
									<rect x="228.73" y="7.33" class="st177" width="0.19" height="47.4" />
									<rect x="228.92" y="7.33" class="st178" width="0.19" height="47.4" />
									<rect x="229.11" y="7.33" class="st179" width="0.19" height="47.4" />
									<rect x="229.31" y="7.33" class="st180" width="0.19" height="47.4" />
									<rect x="229.5" y="7.33" class="st181" width="0.19" height="47.4" />
									<rect x="229.69" y="7.33" class="st182" width="0.19" height="47.4" />
									<rect x="229.88" y="7.33" class="st183" width="0.19" height="47.4" />
									<rect x="230.07" y="7.33" class="st184" width="0.19" height="47.4" />
									<rect x="230.26" y="7.33" class="st185" width="0.19" height="47.4" />
									<rect x="230.45" y="7.33" class="st186" width="0.19" height="47.4" />
									<rect x="230.64" y="7.33" class="st187" width="0.19" height="47.4" />
									<rect x="230.83" y="7.33" class="st188" width="0.19" height="47.4" />
									<rect x="231.02" y="7.33" class="st189" width="0.19" height="47.4" />
									<rect x="231.21" y="7.33" class="st190" width="0.19" height="47.4" />
									<rect x="231.4" y="7.33" class="st191" width="0.19" height="47.4" />
									<rect x="231.59" y="7.33" class="st192" width="0.19" height="47.4" />
									<rect x="231.78" y="7.33" class="st193" width="0.19" height="47.4" />
									<rect x="231.97" y="7.33" class="st194" width="0.19" height="47.4" />
									<rect x="232.16" y="7.33" class="st195" width="0.19" height="47.4" />
									<rect x="232.35" y="7.33" class="st196" width="0.19" height="47.4" />
									<rect x="232.54" y="7.33" class="st197" width="0.19" height="47.4" />
									<rect x="232.73" y="7.33" class="st198" width="0.19" height="47.4" />
									<rect x="232.92" y="7.33" class="st199" width="0.19" height="47.4" />
									<rect x="233.11" y="7.33" class="st200" width="0.19" height="47.4" />
									<rect x="233.3" y="7.33" class="st201" width="0.19" height="47.4" />
									<rect x="233.49" y="7.33" class="st202" width="0.19" height="47.4" />
									<rect x="233.68" y="7.33" class="st203" width="0.19" height="47.4" />
									<rect x="233.87" y="7.33" class="st204" width="0.19" height="47.4" />
									<rect x="234.06" y="7.33" class="st205" width="0.19" height="47.4" />
									<rect x="234.25" y="7.33" class="st206" width="0.19" height="47.4" />
									<rect x="234.44" y="7.33" class="st207" width="0.19" height="47.4" />
									<rect x="234.63" y="7.33" class="st208" width="0.19" height="47.4" />
									<rect x="234.83" y="7.33" class="st209" width="0.19" height="47.4" />
									<rect x="235.02" y="7.33" class="st210" width="0.19" height="47.4" />
									<rect x="235.21" y="7.33" class="st211" width="0.19" height="47.4" />
									<rect x="235.4" y="7.33" class="st212" width="0.19" height="47.4" />
									<rect x="235.59" y="7.33" class="st213" width="0.19" height="47.4" />
									<rect x="235.78" y="7.33" class="st214" width="0.19" height="47.4" />
									<rect x="235.97" y="7.33" class="st215" width="0.19" height="47.4" />
									<rect x="236.16" y="7.33" class="st216" width="0.19" height="47.4" />
									<rect x="236.35" y="7.33" class="st217" width="0.19" height="47.4" />
									<rect x="236.54" y="7.33" class="st218" width="0.19" height="47.4" />
									<rect x="236.73" y="7.33" class="st219" width="0.19" height="47.4" />
									<rect x="236.92" y="7.33" class="st220" width="0.19" height="47.4" />
									<rect x="237.11" y="7.33" class="st221" width="0.19" height="47.4" />
									<rect x="237.3" y="7.33" class="st222" width="0.19" height="47.4" />
									<rect x="237.49" y="7.33" class="st223" width="0.19" height="47.4" />
									<rect x="237.68" y="7.33" class="st224" width="0.19" height="47.4" />
									<rect x="237.87" y="7.33" class="st225" width="0.19" height="47.4" />
									<rect x="238.06" y="7.33" class="st226" width="0.19" height="47.4" />
									<rect x="238.25" y="7.33" class="st227" width="0.19" height="47.4" />
									<rect x="238.44" y="7.33" class="st228" width="0.19" height="47.4" />
									<rect x="238.63" y="7.33" class="st229" width="0.19" height="47.4" />
									<rect x="238.82" y="7.33" class="st230" width="0.19" height="47.4" />
									<rect x="239.01" y="7.33" class="st231" width="0.19" height="47.4" />
									<rect x="239.2" y="7.33" class="st232" width="0.19" height="47.4" />
									<rect x="239.39" y="7.33" class="st233" width="0.19" height="47.4" />
									<rect x="239.58" y="7.33" class="st234" width="0.19" height="47.4" />
									<rect x="239.77" y="7.33" class="st235" width="0.19" height="47.4" />
									<rect x="239.96" y="7.33" class="st236" width="0.19" height="47.4" />
									<rect x="240.15" y="7.33" class="st237" width="0.19" height="47.4" />
									<rect x="240.35" y="7.33" class="st238" width="0.19" height="47.4" />
									<rect x="240.54" y="7.33" class="st239" width="0.19" height="47.4" />
									<rect x="240.73" y="7.33" class="st240" width="0.19" height="47.4" />
									<rect x="240.92" y="7.33" class="st241" width="0.19" height="47.4" />
									<rect x="241.11" y="7.33" class="st242" width="0.19" height="47.4" />
									<rect x="241.3" y="7.33" class="st243" width="0.19" height="47.4" />
									<rect x="241.49" y="7.33" class="st244" width="0.19" height="47.4" />
									<rect x="241.68" y="7.33" class="st245" width="0.19" height="47.4" />
									<rect x="241.87" y="7.33" class="st246" width="0.19" height="47.4" />
									<rect x="242.06" y="7.33" class="st247" width="0.19" height="47.4" />
									<rect x="242.25" y="7.33" class="st248" width="0.19" height="47.4" />
									<rect x="242.44" y="7.33" class="st249" width="0.19" height="47.4" />
								</g>
							</g>
							<g>
								<polygon class="st250" points="209.03,14.84 238.29,31.03 209,47.89 209,32.41 215.42,32.41 215.42,37.18 225.65,31.03 
			215.42,25.26 215.42,29.61 209,29.61 		"/>
							</g>
						</g>
					</svg>
				);
			default:
				return <span><StopOutlined /></span>;
		}
	};
	return (
		<span>
			{getIcon()}
		</span>
	);
};

export default Icons;