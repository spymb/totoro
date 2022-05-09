const string = `
<style>
* {
	box-sizing: border-box;
}

body {
	background-color: #e1dddd;
}

.container {
	position: relative;
	margin: 100px auto;
	padding: 30px;
	max-width: 500px;
}

#totoro {
	position: relative;
	cursor: pointer;
}

.head {
	position: absolute;
	z-index: 10;
	left: 50%;
	transform: translate(-50%);
	width: 320px;
	height: 200px;
	border-top-left-radius: 50% 60%;
	border-top-right-radius: 50% 60%;
	border-bottom-left-radius: 5% 25%;
	border-bottom-right-radius: 5% 25%;
	background-color: #bdb4b4;
}

.ear {
	position: absolute;
	top: -60px;
	width: 50px;
	height: 80px;
	border-top-left-radius: 30px 100%;
	border-top-right-radius: 30px 100%;
	border-bottom-left-radius: 50% 20%;
	border-bottom-right-radius: 50% 20%;
	background-color: #bdb4b4;
}

.ear::after {
	content: '';
	position: absolute;
	top: calc(100% - 5px);
	left: 50%;
	transform: translate(-50%);
	width: 30px;
	height: 70px;
	background-color: #bdb4b4;
}

.left-ear {
	left: 40px;
	transform: rotate(-15deg);
}

.right-ear {
	right: 40px;
	transform: rotate(15deg);
}

.eye {
	position: absolute;
	top: 50px;
	width: 45px;
	height: 45px;
	border-radius: 50%;
	background-color: white;
	transition: 0.35s 0.2s;
}

.pupil {
	position: absolute;
	top: 10px;
	height: 15px;
	width: 15px;
	border-radius: 50%;
	background-color: black;
	/* transition: 0.35s 0.2s; */
}

.pupil::after {
	content: '';
	position: absolute;
	top: 4px;
	width: 4px;
	height: 5px;
	border-radius: 50%;
	background-color: white;
}

.left-eye {
	left: 50px;
	transition: 0.35s 0.2s;
}

.left-pupil {
	left: 23px;
}

.left-pupil::after {
	left: 7px;
}

.right-eye {
	right: 50px;
}

.right-pupil {
	right: 23px;
}

.right-pupil::after {
	right: 7px;
}

.nose {
	position: absolute;
	top: 70px;
	left: 50%;
	transform: translate(-50%);
	width: 50px;
	height: 20px;
	border-radius: 50%/60%;
	background-color: black;
	/* transition: 0.35s 0.2s; */
}

.nose::before,
.nose::after {
	content: '';
	position: absolute;
	top: 12px;
	width: 43px;
	height: 20px;
	background-color: #bdb4b4;
	border-radius: 50%;
}

.nose::before {
	left: -20px;
}

.nose::after {
	right: -20px;
}

.mouth {
	position: absolute;
	z-index: 30;
	top: 125px;
	left: 50%;
	transform: translate(-50%);
	width: 7px;
	height: 10px;
	border-radius: 50%;
	background-color: black;
	/* overflow: hidden;
    transition: 0.6s; */
}

.whiskers {
	position: absolute;
	top: 120px;
	/* transition: 0.4s 0.15s; */
}

.whisker {
	position: absolute;
	width: 90px;
	height: 2px;
	border-radius: 2px;
	background-color: black;
	/* transition: 0.6s; */
}

.top-whisker {
	top: -10px;
	width: 80px;
}

.bottom-whisker {
	top: 10px;
	width: 80px;
}

.left-whiskers {
	left: 25px;
}

.left-whiskers .whisker {
	right: 0;
	transform-origin: bottom right;
}

.left-whiskers .top-whisker {
	transform: rotate(10deg);
}

.left-whiskers .bottom-whisker {
	transform: rotate(-10deg);
}

.right-whiskers {
	right: 25px;
}

.right-whiskers .whisker {
	left: 0;
	transform-origin: bottom left;
}

.right-whiskers .top-whisker {
	transform: rotate(-10deg);
}

.right-whiskers .bottom-whisker {
	transform: rotate(10deg);
}

.body {
	position: absolute;
	z-index: 1px;
	top: 90px;
	left: 50%;
	transform: translate(-50%);
	width: 400px;
	height: 420px;
	border-top-left-radius: 50% 60%;
	border-top-right-radius: 50% 60%;
	border-bottom-left-radius: 45% 30%;
	border-bottom-right-radius: 45% 30%;
	background-color: #bdb4b4;
	display: inline-block;
}

.belly {
	position: absolute;
	z-index: 20;
	bottom: 10px;
	left: 50%;
	transform: translate(-50%);
	width: 380px;
	height: 300px;
	border-bottom-left-radius: 45% 35%;
	border-bottom-right-radius: 45% 35%;
	border-top-left-radius: 50% 60%;
	border-top-right-radius: 50% 60%;
	background-color: #e1dddd;
	transition: 0.6s;
}

.pattern,
.pattern::after {
	position: absolute;
	top: 60px;
	height: 40px;
	width: 15px;
	border-bottom-left-radius: 20px 100px;
	border-bottom-right-radius: 20px 100px;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	background-color: #bdb4b4;
}

.pattern {
	top: 15px;
	left: calc(50% - 20px);
	transform: rotate(65deg);
}

.pattern::after {
	content: '';
	top: 11px;
	left: -5px;
	transform-origin: top;
	transform: rotate(-130deg);
}

.upper-left-pattern {
	top: 40px;
	left: 80px;
	transform: rotate(50deg);
}

.upper-right-pattern {
	top: 29px;
	left: 265px;
	transform: rotate(78deg);
}

.lower-left-pattern {
	top: 100px;
	left: 45px;
	transform: rotate(50deg);
}

.lower-center-left-pattern {
	top: 80px;
	left: 130px;
	transform: rotate(60deg);
}

.lower-center-right-pattern {
	top: 80px;
	left: 215px;
	transform: rotate(68deg);
}

.lower-right-pattern {
	top: 96px;
	left: 300px;
	transform: rotate(78deg);
}

.arm {
	position: absolute;
	z-index: -1;
	top: 170px;
	height: 160px;
	width: 90px;
	background-color: #b3a9a9;
	transition: 1s;
}

.left-arm {
	left: 50px;
	border-top-left-radius: 35px;
	border-top-right-radius: 15px;
	border-bottom-left-radius: 50px 80%;
	border-bottom-right-radius: 40px 65%;
	transform-origin: top left;
	transform: rotate(35deg);
}

.right-arm {
	right: 50px;
	border-top-left-radius: 15px;
	border-top-right-radius: 30px;
	border-bottom-left-radius: 40px 65%;
	border-bottom-right-radius: 50px 80%;
	transform-origin: top right;
	transform: rotate(-35deg);
}

.nail {
	position: absolute;
	width: 5px;
	height: 20px;
	background-color: white;
	border-bottom-left-radius: 2px 70%;
	border-bottom-right-radius: 2px 70%;
	border-top-left-radius: 2px;
	border-top-right-radius: 2px;
}

.left-arm .nail:nth-child(1) {
	bottom: -10px;
	left: 35px;
}

.left-arm .nail:nth-child(2) {
	bottom: -13px;
	left: 47px;
}

.left-arm .nail:nth-child(3) {
	bottom: -10px;
	left: 59px;
}

.right-arm .nail:nth-child(1) {
	bottom: -10px;
	right: 35px;
}

.right-arm .nail:nth-child(2) {
	bottom: -13px;
	right: 47px;
}

.right-arm .nail:nth-child(3) {
	bottom: -10px;
	right: 59px;
}

.leg {
	position: absolute;
	z-index: -1;
	bottom: -520px;
	width: 150px;
	height: 70px;
	background-color: #b3a9a9;
}

.left-leg {
	right: calc(50%);
	border-radius: 30px;
	border-bottom-left-radius: 70% 100%;
	border-bottom-right-radius: 15px;
	border-top-left-radius: 50% 15px;
	border-top-right-radius: 15px;
}

.right-leg {
	left: calc(50%);
	border-radius: 30px;
	border-bottom-left-radius: 15px;
	border-bottom-right-radius: 70% 100%;
	border-top-left-radius: 15px;
	border-top-right-radius: 50% 15px;
}

.claw {
	position: absolute;
	width: 5px;
	height: 5px;
	background-color: white;
	border-top-left-radius: 70%;
	border-top-right-radius: 70%;
	border-bottom-left-radius: 2px 70%;
	border-bottom-right-radius: 2px 70%;
}

.left-leg .claw:nth-child(1) {
	bottom: 0px;
	left: 80px;
}

.left-leg .claw:nth-child(2) {
	bottom: 0px;
	left: 100px;
}

.left-leg .claw:nth-child(3) {
	bottom: 0px;
	left: 120px;
}

.right-leg .claw:nth-child(1) {
	bottom: 0px;
	right: 80px;
}

.right-leg .claw:nth-child(2) {
	bottom: 0px;
	right: 100px;
}

.right-leg .claw:nth-child(3) {
	bottom: 0px;
	right: 120px;
}
`;
let n = 1;

//初始化
showCSS.innerText = string.substr(0, n);
tCSS.innerHTML = string.substr(0, n);

let id = setInterval(() => {
  n += 1;
  //当打出完整的string后，就不要再重复打了
  if (n > string.length) {
    window.clearInterval(id);
    return;
  }
  showCSS.innerText = string.substr(0, n);
  tCSS.innerHTML = string.substr(0, n);
  showCSS.scrollTop = showCSS.scrollHeight;
}, 0);

btnPause.onclick = () => {
  window.clearInterval(id)
}