from openpyxl import load_workbook, Workbook, drawing
from selenium import webdriver
import time
from selenium.webdriver.common.action_chains import ActionChains
import urllib.request
from urllib import request
from requests import get
import cv2
import pytesseract
import numpy as np
from PIL import Image
import shutil, sys, os

#현재 시간 불러오기
now = time.localtime()
s = "%04d_%02d_%02d_%02d_%02d_%02d" % (now.tm_year, now.tm_mon, now.tm_mday, now.tm_hour, now.tm_min, now.tm_sec)

#워크북 생성
wb = Workbook()
#워크시트 생성
ws1 = wb.active

#워크시트 입력
ws1['A%s' % 1] = "순번"
ws1['B%s' % 1] = "이름"
ws1['C%s' % 1] = "제목"
ws1['D%s' % 1] = "날짜"
ws1['E%s' % 1] = "파일수"
ws1['F%s' % 1] = '누락 사진 수'
ws1['G%s' % 1] = '누락 시간'
ws1['H%s' % 1] = "보고사항"
ws1['I%s' % 1] = "특이사항"
ws1['J%s' % 1] = "파일명"
ws1['K%s' % 1] = "OCR"
ws1['L%s' % 1] = "주소"

#파일명 생성
file_name = 'ummubogo' + s + '.xlsx'

#셀이 참조할 숫자
numb = 2

#브라우저 실행 - 웹드라이버 경로 설정 필요
driver = webdriver.Chrome("C:/Users\Chromedriver.exe")

#주소이동 - 그룹웨어(로그인 목적)
driver.get("https://gw.kcopa.or.kr/gw")

#경고창 확인
try:
    # 얼러트 종료
    time.sleep(1)
    alert = driver.switch_to.alert
    alert.accept()
except:
    pass

#아이디 입력
id = driver.find_element_by_name("id")
id.send_keys("아이디")

#패스워드 입력
pw = driver.find_element_by_id("userPw")
pw.send_keys("패스워드")

#로그인 버튼 클릭
driver.find_element_by_class_name("log_btn").click()

#우측 상단 이름 클릭
driver.find_element_by_class_name("divi_txt").click()

#5초 대기
delay = 5
driver.implicitly_wait(delay)

#창 번호 찾기
handles = driver.window_handles
#0번 창(메인윈도우) 이름 설정
b_window = driver.window_handles[0]

#재택근로자 이름 및 근무조, 근무요일
jetek_info = {
'김동수':['야간','월화수목일'],
'김지원':['심야','월화수목일'],
'남미연':['주간','월화수금토'],
'송영민':['야간','월화목금토'],
'김가영':['야간','월화수목토'],
'김은미':['주간','월화수금일'],
'김현정':['심야','월화수목일'],
'노영은':['주간','월화수목일'],
'정민도':['심야','월화목금일'],
'김재필':['주간','월화수목일'],
'박순옥':['야간','화수목금토​'],
'어혜란':['야간','월화수목일'],
'권미정':['주간','월화수목일'],
'김영선':['주간','화수목금토​'],
'김종선':['주간','월화목금일'],
'남유정':['야간','월화수금일'],
'박금배':['야간','월화수목토'],
'정성월':['야간','월화목금일'],
'김기정':['심야','화수목금토​'],
'김수경':['야간','월화수목일'],
'김가람':['주간','화수목금토​'],
'김옥현':['심야','월화수목토'],
'김진영':['주간','화수목금토​'],
'노경화':['주간','화수목금토​'],
'박민영':['주간','월화수금토'],
'하오잉잉':['야간','월화수목일'],
'이상훈':['심야','월화수목일'],
'마하문':['야간','월화수목일'],
'김영호':['심야','월화수목토'],
'임선정':['야간','월화수금일']
}

#테서렉트 경로 설정
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract'


def go_bogo():
    #메인윈도우로 이동
    driver.switch_to.window(b_window)

    time.sleep(2)

    #업무보고탭 이동
    driver.get("http://gw.kcopa.or.kr/schedule/Views/Common/report/reportCheckList?menu_no=304020000")

    #상세검색 버튼 클릭
    driver.find_element_by_id("all_menu_btn").click()
    time.sleep(2)

    # 시작달력버튼 클릭
    driver.find_element_by_xpath("""/html/body/div[1]/div[3]/dl/dd[1]/div/div/div[1]/input[2]""").click()
    time.sleep(2)

    # 달넘기기(왼쪽)
    #driver.find_element_by_xpath("""/html/body/div[4]/div/div/div[1]/div/div[1]/a[2]""").click()
    #time.sleep(2)
    #driver.find_element_by_xpath("""/html/body/div[4]/div/div/div[1]/div/div[1]/a[2]""").click()
    #time.sleep(2)

    #달넘기기(오른쪽)
    driver.find_element_by_xpath("""/html/body/div[4]/div/div/div[1]/div/div[1]/a[3]""").click()
    time.sleep(2)

    #일클릭(1번줄4번째)
    #driver.find_element_by_xpath("""/html/body/div[4]/div/div/div[1]/div/div[2]/table/tr[2]/td[4]/a""").click()
    #time.sleep(2)

    #일클릭(3번줄3번째-14일)
    driver.find_element_by_xpath("""/html/body/div[4]/div/div/div[1]/div/div[2]/table/tr[4]/td[3]/a""").click()
    time.sleep(2)

    # 일클릭
    #driver.find_element_by_xpath("""/html/body/div[4]/div/div/div[1]/div/div[2]/table/tr[2]/td[4]""").click()
    #time.sleep(2)

    # 확인
    driver.find_element_by_class_name("botBtn").click()
    time.sleep(2)

    # 종료달력
    #driver.find_element_by_xpath("""/html/body/div[1]/div[3]/dl/dd[1]/div/div/div[3]/input[2]""").click()
    #time.sleep(2)

    # 달넘기기
    #driver.find_element_by_xpath("""/html/body/div[4]/div/div/div[2]/div/div[1]/a[2]/span""").click()
    #time.sleep(2)

    # 우측달력일클릭
    #driver.find_element_by_xpath("""/html/body/div[4]/div/div/div[2]/div/div[2]/table/tr[4]/td[3]/a""").click()
    #time.sleep(1)

    # 확인
    #driver.find_element_by_class_name("botBtn").click()
    #time.sleep(2)

    # 검색버튼 클릭
    driver.find_element_by_class_name("submit").click()

    time.sleep(2)



def clickman():
    try:
        for ia in range(1,10):

            driver.switch_to.window(b_window)

            driver.find_element_by_xpath("""/html/body/div[1]/div[4]/div[2]/div[2]/div[1]/ol/li["""+str(ia)+"""]""").click()
            time.sleep(2)

            try:
                for i in range(1, 21):
                    driver.switch_to.window(b_window)
                    one = driver.find_element_by_xpath(
                        "/html/body/div[1]/div[4]/div[2]/div[1]/div[2]/table/tbody/tr[" + str(i) + "]/td[4]")

                    actionChains = ActionChains(driver)

                    actionChains.double_click(one).perform()

                    time.sleep(1)

                    # 창 컨트롤
                    handles = driver.window_handles

                    size = len(handles)

                    count_pic()

            except:
                pass

    except:
        pass





def imgcrop(fileid, filenm):
    global tess

    try:
        img_url1 = "http://gw.kcopa.or.kr/gw/cmm/file/fileDownloadProc.do?fileId=" + fileid

        driver.get(img_url1)

        time.sleep(2)

        try:
            loc = r"C:\\Users\\User\\downloads\\" + filenm
            shutil.copyfile(loc, 'temp.png')
        except:
            try:
                print('10초 프로토콜')
                time.sleep(10)
                loc = r"C:\\Users\\User\\downloads\\" + filenm
                shutil.copyfile(loc, 'temp.png')
            except:
                pass



        time.sleep(2)

        image = cv2.imread("temp.png", 0)
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

        os.remove("temp.png")
        os.remove(loc)

        h, w, c = gray.shape
        print('file name: ', filenm, "/", "file id:  ", fileid, "/", 'width:  ', w, "/" 'height: ', h, "/", 'channel:',
              c)

        garo = w - 215
        sero = h - 50

        crop = gray[sero:h - 10, garo:w - 12]

        kernel = np.array([[0, -1, 0],
                           [-1, 5, -1],
                           [0, -1, 0]])

        i_crop = cv2.filter2D(crop, -1, kernel)

        r_crop = cv2.bitwise_not(i_crop)

        cv2.destroyAllWindows()

        # 6이 젤 좋음
        custom_oem_psm_config = r'--oem 1 --psm 4'
        tess = pytesseract.image_to_string(r_crop, config=custom_oem_psm_config)
        print('tess',tess)

        time.sleep(1)
    except:
        print('사진인식오류')




def count_pic():
    global b_window
    global a_window
    global numb
    global jetek
    global tess

    b_window = driver.window_handles[0]

    a_window = driver.window_handles[1]

    driver.switch_to.window(a_window)

    cu = driver.current_url

    print(cu)

    title = driver.find_element_by_xpath("""/html/body/div[2]/div[3]/div[3]/table/tbody/tr[2]/td""").text
    date = driver.find_element_by_xpath("""/html/body/div[2]/div[3]/div[1]/table/tbody/tr[1]/td[2]""").text

    repo = driver.find_element_by_id("repo_emp").text

    bogosh = driver.find_element_by_xpath("""/html/body/div[2]/div[3]/div[3]/table/tbody/tr[3]/td""").text
    tesh = driver.find_element_by_xpath("""/html/body/div[2]/div[3]/div[3]/table/tbody/tr[4]/td""").text

    jys = jetek_info[repo][0]
    yo1 = jetek_info[repo][1]

    print(jys, yo1)

    aia = {'주간':[10,11,12,13,14,15,16],'야간':[19,20,21,22,23,00],'심야':[1,2,3,4]}

    ea_time = aia[jys]
    ea_pics = len(ea_time)

    print(ea_time, ea_pics)


    driver.switch_to.frame("voovoUpload")

    thum = driver.find_elements_by_class_name("file_set")
    thum_fn = driver.find_elements_by_name("fileNm")

    len_t = len(thum)
    len_t = int(len_t)

    len_t = len_t - 1

    li = list()
    ln = list()
    filetime = list()

    #날짜저장함
    olta_pic_s = list()
    nalza_s = list()
    pic_er = list()


    for i in range(0, len_t):

        driver.switch_to.window(a_window)

        driver.switch_to.frame("voovoUpload")

        aa = thum[i]
        bb = thum_fn[i]

        fileid = aa.get_attribute("fileid")

        filenm = bb.text

        li.append(fileid)
        ln.append(filenm)

        len_fn = len(filenm)

        pnj = filenm[len_fn - 3:len_fn]

        if pnj.lower() == 'png':

            print('사진OCR시작')
            imgcrop(fileid, filenm)

            print(tess[0:4])

            if tess[0:4] == '2020':

                nalza = tess[0:10]
                olta_pic = tess[11:19]

                olta_h = olta_pic[0:2]
                olta_m = olta_pic[3:5]
                olta_s = olta_pic[6:8]

                print(olta_h, olta_m, olta_s)

                if int(olta_m) > 50:

                    if int(olta_h) == 23:
                        olta_h = '00'

                    else:
                        olta_h = int(olta_h) + 1

                    print(olta_h,'시')

                    try:
                        ea_time.remove(int(olta_h))
                    except:
                        pass


                elif int(olta_m) < 10:
                    print(olta_h,'시')

                    try:
                        ea_time.remove(int(olta_h))
                    except:
                        pass

                else:
                    print('해당안됨')


                olta_pic_s.append(olta_pic)
                nalza_s.append(nalza)

                print(nalza)
                print(olta_pic)

                filetime.append(tess)

            else:
                pic_er.append('에러')
                print('er')
                pass

        else:
            print('아니')
            pass


    print(ea_time)
    l_ea_time = len(ea_time)

    if int(l_ea_time) == 0:
        ea_time = ''
    else:
        print(ea_time, l_ea_time,'이거')
        pass


    ln = str(ln)

    filetime = str(filetime)

    ws1['A%s' % numb] = numb - 1
    ws1['B%s' % numb] = repo
    ws1['C%s' % numb] = title
    ws1['D%s' % numb] = date
    ws1['E%s' % numb] = len_t
    ws1['F%s' % numb] = l_ea_time
    ws1['G%s' % numb] = str(ea_time)
    ws1['H%s' % numb] = bogosh
    ws1['I%s' % numb] = tesh
    ws1['J%s' % numb] = ln
    ws1['K%s' % numb] = filetime
    ws1['L%s' % numb] = cu

    numb = numb + 1

    driver.switch_to.window(a_window)
    driver.close()

    wb.save(filename=file_name)













go_bogo()

clickman()







