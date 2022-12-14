

# IoT

### 하드웨어

#### 사용부품

|부품|용도|
|--|--|
|solderless plugboard x 1|회로 연결용 판|
|arduino 25pcs push button x 2|관리자 제어 스위치|
|arduino HC-06 Bluetooth module x 1|측정 앱 연동용 블루투스모듈|
|arduino LCD display x 1|시간/측정개수 확인용 디스플레이 보드|
|arduino HC-SR04 x 1|초음파 거리 감지 센서|
|arduino uno PCB x 1|아두이노 메인 보드|
|COM to USB cable x 1|COM to USB 케이블|
|USB to C HUB x 1|USB to C type 허브|


#### 조립방법

  

<p  align="center">

<img  width="1000px"  height = "500px"  src='https://github.com/osamhack2022/CLOUD_APP_IOT_KeepYourEndeavor_Moment/blob/IOT(FE)/IOT(FE)/img/Swanky%20Migelo.png'/>

</p>

<p  align="center">
<img  width="700px"  height = "700px"  src='https://github.com/osamhack2022/CLOUD_APP_IOT_KeepYourEndeavor_Moment/blob/IOT(FE)/IOT(FE)/img/bluepicture.PNG'/>
</p>

  

위 설계도와 같이 회로를 연결한다.

  

#### 주의점

- 블루투스 모듈의 TX/RX pin과 프로그램 상 TX/RX는 서로 뒤집어서 설정해주어야 한다. ( 프로그램의 TX가 모듈의 RX 이기 때문 )

- 스위치로 가는 저항은 10K옴, LED로 가는 저항은 220옴을 사용한다.

  
  

#### 실물 예시

<p  align="center">

<img  width="700px"  height = "700px"  src='https://github.com/osamhack2022/CLOUD_APP_IOT_KeepYourEndeavor_Moment/blob/IOT(FE)/IOT(FE)/img/allpics.jpg'/>

</p>

<p  align="center">

<img  width="300px"  height = "300px"  src='https://github.com/osamhack2022/CLOUD_APP_IOT_KeepYourEndeavor_Moment/blob/IOT(FE)/IOT(FE)/img/board.jpg'/> <img  width="300px"  height = "300px"  src='https://github.com/osamhack2022/CLOUD_APP_IOT_KeepYourEndeavor_Moment/blob/IOT(FE)/IOT(FE)/img/hypersoundwave.jpg'/> <img  width="300px"  height = "300px"  src='https://github.com/osamhack2022/CLOUD_APP_IOT_KeepYourEndeavor_Moment/blob/IOT(FE)/IOT(FE)/img/btns.jpg'/> 

</p>

  

### 소프트웨어

  

사용 소프트웨어 : `Arduino IDE 2.0.0`

1. COM to USB 케이블을 사용해 UNO PCB와 PC를 연결해준다.

2. PC에서 [arduino.cc](https://www.arduino.cc/en/software)에 접속한 후 Arduino IDE를 설치하고 실행한다.

3. Select Board 토글에서 Arduino uno 를 선택한다

4. [코드](https://github.com/osamhack2022/CLOUD_APP_IOT_KeepYourEndeavor_Moment/blob/IOT(FE)/IOT(FE)/OSAM.ino)를 작성한 뒤 IDE 좌측 상단에 있는 버튼을 Compile -> Upload 순서대로 눌러준다

5. IDE 우측 상단 Serial Monitor를 열어 AT를 입력해 블루투스 모듈이 잘 작동하는지 확인한다.

### 작동 방식
<p  align="left">
<img  width="300px"  height = "300px"  src='https://github.com/osamhack2022/CLOUD_APP_IOT_KeepYourEndeavor_Moment/blob/IOT(FE)/IOT(FE)/img/btns.jpg'/> 
</p>

**파란색** : **`START_BTN`** <br>
**노란색** : **`RESET_BTN`**

1. 측정 준비가 되면 **`START_BTN`** 을 누른다. LED가 들어오면 1초뒤 측정이 시작된다
<p  align="left">
<img  width="300px"  height = "300px"  src='https://github.com/osamhack2022/CLOUD_APP_IOT_KeepYourEndeavor_Moment/blob/IOT(FE)/IOT(FE)/img/startbtn.jpg'/> <img  width="300px"  height = "300px"  src='https://github.com/osamhack2022/CLOUD_APP_IOT_KeepYourEndeavor_Moment/blob/IOT(FE)/IOT(FE)/img/resultstartbtn.jpg'/> 
</p>


2. 시간이 모두 지나면 **Timeout!!!** 이 LCD 패널에 표시된다. 이 시점에 블루투스 모듈이 측정자의 핸드폰으로 결과를 보낸다.
<p  align="left">
<img  width="300px"  height = "300px"  src='https://github.com/osamhack2022/CLOUD_APP_IOT_KeepYourEndeavor_Moment/blob/IOT(FE)/IOT(FE)/img/timeoutLCD.jpg'/> 
</p>


3. 다음 참가자 차례가 되면 **`RESET_BTN`** 을 누른다. LED가 들어오면 1초뒤 리셋이 된다.
<p  align="left">
<img  width="300px"  height = "300px"  src='https://github.com/osamhack2022/CLOUD_APP_IOT_KeepYourEndeavor_Moment/blob/IOT(FE)/IOT(FE)/img/beforereset.jpg'/> <img  width="300px"  height = "300px"  src='https://github.com/osamhack2022/CLOUD_APP_IOT_KeepYourEndeavor_Moment/blob/IOT(FE)/IOT(FE)/img/resultofresetbtn.jpg'/> 
</p>

### IoT 기기 시연
<p  align="center">
<img  width="500px"  height = "350px"  src='https://github.com/osamhack2022/CLOUD_APP_IOT_KeepYourEndeavor_Moment/blob/main/images/iot_result.gif'/>
</p>



