# ava-pricefinder



A Google Script that via scraping the Avanza network traffic returns a stocks lastprice or a funds latest known NAV, reachable by custom functions in Google Spreadsheet

## Getting started


Theese instructions will help you set up the script, and use it in for example Google Spreadsheet

### Prerequisites

None really, all is done in the browser


## How to use the script in Google Spreadsheet


1. Open up the Spreadsheet you want to use the functions in
2. Head to Tools -> Script Editor
3. Copy and paste the code in code.gs (or download code.gj and go "file -> open -> locate code.gs on your computer")
4. Go to Triggers (the clock) -> add trigger

    ![alt text](https://imgur.com/2493bf83-0485-45de-8fc8-507940014ae4 "the clock selected in a red square")
    
5. Choose lastPrice as function to run, and On Open as event type -> Save
6. Add trigger -> choose nav as function to run an on Open as event type -> Save 
7. Use the functions as follows:

    ### lastPrice:
    ```excel
    =lastPrice(id, $A$1)
    ```
    Where id is the ID that Avanza provides in the URL. 

    ![alt text](https://i.imgur.com/dzunmFO.png "url with the id underlined")

    Obs! The $A$1 is important to make the script update correctly

    ### nav:
    ```excel
    =nav(id, $A$1)
    ```
    Where id is the ID that Avanza provides in the URL

    ![alt text](https://i.imgur.com/offfiSk.png "url with the id underlined")

    Obs! The $A$1 is important to make the script update correctly





