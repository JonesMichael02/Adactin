$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User Login In Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-web-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User Launch The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The Username in Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User Enter The Password In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Click The Login Button And It Navigates To Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Launch_The_Adactin_Application()"
});
formatter.result({
  "duration": 197646400,
  "error_message": "java.lang.NullPointerException\r\n\tat com.adactin.stepdefinition.StepDefinition.user_Launch_The_Adactin_Application(StepDefinition.java:19)\r\n\tat ✽.Given User Launch The Adactin Application(Adactin.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Username_in_Username_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Password_In_Password_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Login_Button_And_It_Navigates_To_Search_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 9,
  "name": "Select Search Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;select-search-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User Is On The Hotel Booking Page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User Click on The Location London",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User Selects The Hotel as Hotel Creek",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User Selects The Room Type As Deluxe",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User Selects Number Of Rooms As 1",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Select The Check In Date As 16/04/2024",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User Selects The Check Out Date as 20/04/2024",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User Selects The Adults Per Room As 2",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User Selects The Children Per Room as 1",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User Clicks Search",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Is_On_The_Hotel_Booking_Page()"
});
formatter.result({
  "duration": 105100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_on_The_Location_London()"
});
formatter.result({
  "duration": 8789000,
  "error_message": "java.lang.NullPointerException\r\n\tat com.adactin.stepdefinition.StepDefinition.user_Click_on_The_Location_London(StepDefinition.java:53)\r\n\tat ✽.When User Click on The Location London(Adactin.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_Selects_The_Hotel_as_Hotel_Creek()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Selects_The_Room_Type_As_Deluxe()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 32
    }
  ],
  "location": "StepDefinition.user_Selects_Number_Of_Rooms_As(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 28
    },
    {
      "val": "04",
      "offset": 31
    },
    {
      "val": "2024",
      "offset": 34
    }
  ],
  "location": "StepDefinition.select_The_Check_In_Date_As(int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 35
    },
    {
      "val": "04",
      "offset": 38
    },
    {
      "val": "2024",
      "offset": 41
    }
  ],
  "location": "StepDefinition.user_Selects_The_Check_Out_Date_as(int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 36
    }
  ],
  "location": "StepDefinition.user_Selects_The_Adults_Per_Room_As(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 38
    }
  ],
  "location": "StepDefinition.user_Selects_The_Children_Per_Room_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_Search()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "Select Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;select-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "User Clicks the Radio Button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User Clicks Continue",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Clicks_the_Radio_Button()"
});
formatter.result({
  "duration": 628400,
  "error_message": "java.lang.NullPointerException\r\n\tat com.adactin.stepdefinition.StepDefinition.user_Clicks_the_Radio_Button(StepDefinition.java:126)\r\n\tat ✽.And User Clicks the Radio Button(Adactin.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_Continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 25,
  "name": "User Fills information",
  "description": "Give User Navigates from Select Hotel To Book A Hotel Page",
  "id": "hotel-booking-in-adactin-application;user-fills-information",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "User Enters First Name as Jones",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User Enters Last Name as Michael",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User Enters The Billing Address",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User Enters The Credit Card No as 1234567891234567",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User Selects The Credit Card Type As Visa",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User Selects The Expiry Date And Month as May 2029",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User Enters The CVV Number as 555",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User Clicks Book Now",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Enters_First_Name_as_Jones()"
});
formatter.result({
  "duration": 532600,
  "error_message": "java.lang.NullPointerException\r\n\tat com.adactin.stepdefinition.StepDefinition.user_Enters_First_Name_as_Jones(StepDefinition.java:140)\r\n\tat ✽.And User Enters First Name as Jones(Adactin.feature:27)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_Enters_Last_Name_as_Michael()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Enters_The_Billing_Address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567891234567",
      "offset": 34
    }
  ],
  "location": "StepDefinition.user_Enters_The_Credit_Card_No_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Selects_The_Credit_Card_Type_As_Visa()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2029",
      "offset": 46
    }
  ],
  "location": "StepDefinition.user_Selects_The_Expiry_Date_And_Month_as_May(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "555",
      "offset": 30
    }
  ],
  "location": "StepDefinition.user_Enters_The_CVV_Number_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_Book_Now()"
});
formatter.result({
  "status": "skipped"
});
});