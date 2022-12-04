# 한밭대학교 컴퓨터공학과 TGB팀

## 팀 구성
- 20191768 김원겸(팀장) 
- 20191765 김도연
- 20191776 손정선

## <u>Customized Smart Home with Virtual Room</u> Project Background
- ### 배경 - 기존 스마트 홈 서비스의 문제점
  - 스마트 홈 서비스 시장은 지속적으로 성장하고 있으며, 스마트 홈 기기는 대중의 생활을 더욱 편리하게 해준다.
  - 하지만, 스마트 홈 서비스를 위한 기기의 가격과 요금제로 인한 저항이 존재한다는 것 또한 사실이다.
  - 더불어, 기존 스마트 홈 서비스 소프트웨어는 제조사가 형성한 생태계에 의존해야하며, 조작 외 컨텐츠 부족으로 관심층 외의 잠재 고객에게 끌어들이기에는 역부족하다.
  
- ### 사용자에게 친화적인 스마트 홈 서비스의 필요성
  - 본 과제는 우선 소비자의 기기 구매에 발생하는 부담을 줄이고자 한다. 가전기기 조작 기능을 구현해둔 아두이노만 있다면 소비자가 기존에 사용 중인 가전 기기의 교체 없이도 스마트 홈 서비스를 이용할 수 있도록 하는 것이다.
  - 아두이노 장치는 기기를 조작하는 것뿐만 아니라, 주변 환경 정보를 통해 기기를 조작할 수 있도록 온습도 및 이산화탄소 농도를 조회할수 있도록 한다. 
  - 앞서 설명된 기능은 가상의 그래픽 룸을 통해 환경 정보를 그래프 형태로 확인하거나, 가전기기를 배치하여 기기를 조작할 수 있다.
  - 또한, 사용자가 외부에 있는 등 해당 프로그램을 실행하지 못할 상황에서도 웹페이지를 통해 실시간으로 환경정보를 확인할 수 있도록 하였다.
  
  ![image](https://user-images.githubusercontent.com/90492809/205497227-619f1790-a953-41b9-9080-1f3a7785f22d.png)

## System Design
<img src="https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Amazon EC2-FF9900.svg?style=for-the-badge&logo=AmazonEC2&logoColor=white"> <img src="https://img.shields.io/badge/MariaDB-003545.svg?style=for-the-badge&logo=MariaDB&logoColor=white"> <img src="https://img.shields.io/badge/Arduino-00979D.svg?style=for-the-badge&logo=Arduino&logoColor=white"> <img src="https://img.shields.io/badge/c%23-239120.svg?style=for-the-badge&logo=Csharp&logoColor=white"> <img src="https://img.shields.io/badge/OpenGL-5586A4.svg?style=for-the-badge&logo=OpenGL&logoColor=white"> 
- ### System Requirements
    - Nodemcu ESP-12E, IR Receiver, IR Transmitter를 활용하여 기기 조작 장치 구축
    - Wemos D1, DHT11, MH-Z19B Sensor를 활용하여 환경 정보 취득
    - MariaDB에 아두이노 센서로 수집한 환경 정보 저장 
    - Node.js의 express를 활용하여 웹서버를 구축하고 React를 활용하여 웹페이지를 구성
    - OpenGL으로 기기를 조작할 수 있는 그래픽 구축
    - Amazon EC2에서 실행시켜 API 서버를 구축해 DB로부터 추출한 정보를 클라이언트(웹페이지와 그래픽 룸)에게 공유
- ### System Architecture
![image](https://user-images.githubusercontent.com/90492809/205498167-2d61f375-e238-40a2-aa64-b8708829215f.png)
  
  
## Conclusion

- IR Receiver로 프로토콜 취득이 가능한 리모컨이 있는 제품이라면 대부분 조작 구현이 가능하기 때문에 조작할 수 있는 기기의 범위를 늘려가며 제품화를 기대할 수 있다.
- 지금은 단순히 환경정보 조회 기능만을 제공하고 있으나 사용자에게 밀접한 어플리케이션을 활용해 이산화탄소가 일정 농도를 초과하는 경우 환기 권유 알림을 주거나 실내 권장 온도를 벗어날시 가동 중지 알림을 주는 등의 챗봇을 접목시킬 수 있다면 더욱 의미 있는 정보가 될 것이라고 생각한다

 
