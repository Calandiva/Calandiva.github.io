from openpyxl import load_workbook, Workbook, drawing
from bs4 import BeautifulSoup
from selenium import webdriver
import time
from selenium.common.exceptions import NoSuchElementException
from tqdm import tqdm

print('*'*50)

now = time.localtime()
s = "%04d_%02d_%02d_%02d_%02d_%02d" % (now.tm_year, now.tm_mon, now.tm_mday, now.tm_hour, now.tm_min, now.tm_sec)



print('== 예스파일 ==')
pg1 = input('시작 페이지 : ')
pg2 = input('종료 페이지 : ')
pg1s = int(pg1)
pg2s = int(pg2)

options = webdriver.ChromeOptions()
options.add_argument('headless')
options.add_argument('window-size=1920x1080')
options.add_argument("disable-gpu")





driver = webdriver.Chrome("C:/Users\Chromedriver.exe", options=options)

wb = Workbook()
ws1 = wb.active

ws1['A%s' % 1] = "순번"
ws1['B%s' % 1] = "페이지"
ws1['C%s' % 1] = "20개순"
ws1['D%s' % 1] = "분류"
ws1['E%s' % 1] = "제목"
ws1['F%s' % 1] = "용량"
ws1['G%s' % 1] = "가격"
ws1['H%s' % 1] = "게시자"
ws1['I%s' % 1] = "주소"


#새 탭 열기
driver.execute_script("window.open('')")
main_w = driver.window_handles[0]
side_w = driver.window_handles[-1]
driver.switch_to.window(main_window)


for io in tqdm(range(pg1s, pg2s+1)):

    driver.switch_to.window(main_window)

    driver.get("https://www.yesfile.com/board/list.php?code=BD_MV&sec=8#BD_MV&" + str(io))

    for i in range(1, 21):
        driver.switch_to.window(main_window)

        try:

            try:
                no = driver.find_element_by_xpath('//*[@id="cList"]/div['+str(i)+']/ul/li[1]')
                no_d = no.text
            except:
                no_d = "오류"


#title
            try:
                title = driver.find_element_by_xpath('//*[@id="cList"]/div[' + str(i) + ']/ul/li[2]/span/a')
                title_data = title.text

            except:
                title_data = '오류'


            try:
                gb = driver.find_element_by_xpath('//*[@id="cList"]/div['+str(i)+']/ul/li[4]')
                gb_data = gb.text
            except:
                gb_data = '오류'

            try:
                cost = driver.find_element_by_xpath('//*[@id="cList"]/div['+str(i)+']/ul/li[5]')
                cost_data = cost.text
            except:
                cost_data = '오류'

            try:
                cate = driver.find_element_by_xpath('//*[@id="cList"]/div['+str(i)+']/ul/li[6]')
                cate_data = cate.text
            except:
                cate_data = '오류'

            try:
                nick = driver.find_element_by_xpath('//*[@id="cList"]/div['+str(i)+']/ul/li[7]')
                nick_data = nick.text
            except:
                nick_data = '오류'

            try:
                ur = driver.find_element_by_xpath("""//*[@id="cList"]/div["""+str(i)+"""]/ul/li[2]/span/a""")
                urr = ur.get_attribute("href")

            except:
                urr = '오류'


            try:
                ua = driver.find_element_by_xpath("""//*[@id="cList"]/div["""+str(i)+"""]/ul/li[2]""")
                tle = ua.get_attribute("title")

                if tle == "":
                    try:
                        uu = driver.find_element_by_xpath("""//*[@id="cList"]/div["""+str(i)+"""]/ul/li[2]/span/a/b/font""")
                        tle = uu.text
                    except:
                        try:
                            uu = driver.find_element_by_xpath("""//*[@id="cList"]/div["""+str(i)+"""]/ul/li[2]/span/a/font""")
                            tle = uu.text
                        except:
                            tle = '에러'

                else:
                    pass

            except:
                tle = '오류'


            numb = (io-1)*20+i+1

            ws1['A%s' % numb] = numb-1
            ws1['B%s' % numb] = io
            ws1['C%s' % numb] = i
            ws1['D%s' % numb] = no_d
            ws1['E%s' % numb] = tle
            ws1['F%s' % numb] = gb_data
            ws1['G%s' % numb] = cost_data
            ws1['H%s' % numb] = cate_data
            ws1['I%s' % numb] = urr





        except:
            pass

driver.quit()

file_name = 'yes_movie' + s + '.xlsx'
wb.save(filename=file_name)



print('*'*50)
