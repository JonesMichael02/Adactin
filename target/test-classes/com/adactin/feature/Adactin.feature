Feature: Hotel Booking In Adactin Application 

Scenario: User Login In Web Application
Given User Launch The Adactin Application 
When user Enter The Username in Username Field
And User Enter The Password In Password Field 
Then User Click The Login Button And It Navigates To Search Hotel Page

Scenario: Select Search Hotel
Given User Is On The Hotel Booking Page
When User Click on The Location London
When User Selects The Hotel as Hotel Creek
And User Selects The Room Type As Deluxe 
And User Selects Number Of Rooms As 1
And Select The Check In Date As 16/04/2024
And User Selects The Check Out Date as 20/04/2024
And User Selects The Adults Per Room As 2
And User Selects The Children Per Room as 1
Then User Clicks Search 

Scenario: Select Hotel 
And User Clicks the Radio Button
Then User Clicks Continue 

Scenario:User Fills information
Give User Navigates from Select Hotel To Book A Hotel Page
And User Enters First Name as Jones
And User Enters Last Name as Michael
And User Enters The Billing Address
And User Enters The Credit Card No as 1234567891234567
And User Selects The Credit Card Type As Visa
And User Selects The Expiry Date And Month as May 2029
And User Enters The CVV Number as 555
Then User Clicks Book Now