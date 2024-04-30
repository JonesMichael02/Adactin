package com.adactin.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.adactin.runner.RunnerClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {

	public static WebDriver driver = RunnerClass.driver;
	@Given("^User Launch The Adactin Application$")
	public void user_Launch_The_Adactin_Application() throws Throwable {
		driver.get("https://adactinhotelapp.com/");

		
	}

	@When("^user Enter The Username in Username Field$")
	public void user_Enter_The_Username_in_Username_Field() throws Throwable {
		WebElement username = driver.findElement(By.xpath("(//input[@type='text'])[1]"));
		username.sendKeys("Jivita04");

	}

	@When("^User Enter The Password In Password Field$")
	public void user_Enter_The_Password_In_Password_Field() throws Throwable {
		WebElement password = driver.findElement(By.xpath("(//input[@type='password'])[1]"));
		password.sendKeys("123456");

	}

	@Then("^User Click The Login Button And It Navigates To Search Hotel Page$")
	public void user_Click_The_Login_Button_And_It_Navigates_To_Search_Hotel_Page() throws Throwable {
		WebElement login = driver.findElement(By.xpath("(//input[@type='Submit'])[1]"));
		login.click();

	}

	@Given("^User Is On The Hotel Booking Page$")
	public void user_Is_On_The_Hotel_Booking_Page() throws Throwable {
		

	}

	@When("^User Click on The Location London$")
	public void user_Click_on_The_Location_London() throws Throwable {
		WebElement SearchLocation = driver.findElement(By.xpath("(//select[@name='location'])[1]"));
		Select s = new Select(SearchLocation);
		Thread.sleep(2000);
		s.selectByVisibleText("Paris");
		
	}

	@When("^User Selects The Hotel as Hotel Creek$")
	public void user_Selects_The_Hotel_as_Hotel_Creek() throws Throwable {
		WebElement SearchHotel = driver.findElement(By.xpath("(//select[@name='hotels'])[1]"));
		Select s1 = new Select(SearchHotel);
		Thread.sleep(2000);
		s1.selectByIndex(2);

	}

	@When("^User Selects The Room Type As Deluxe$")
	public void user_Selects_The_Room_Type_As_Deluxe() throws Throwable {

		WebElement Roomtype = driver.findElement(By.xpath("(//select[@name='room_type'])[1]"));
		Select s2 = new Select(Roomtype);
		Thread.sleep(2000);
		s2.selectByValue("Deluxe");
	}

	@When("^User Selects Number Of Rooms As (\\d+)$")
	public void user_Selects_Number_Of_Rooms_As(int arg1) throws Throwable {

		WebElement NoofRooms = driver.findElement(By.xpath("(//select[@name='room_nos'])[1]"));
		Select s3 = new Select(NoofRooms);
		Thread.sleep(2000);
		s3.selectByValue("1");
	}

	@When("^Select The Check In Date As (\\d+)/(\\d+)/(\\d+)$")
	public void select_The_Check_In_Date_As(int arg1, int arg2, int arg3) throws Throwable {
		WebElement checkin = driver.findElement(By.xpath("(//input[@type='text'])[2]"));
		checkin.sendKeys("16/04/2024");

		
	}

	@When("^User Selects The Check Out Date as (\\d+)/(\\d+)/(\\d+)$")
	public void user_Selects_The_Check_Out_Date_as(int arg1, int arg2, int arg3) throws Throwable {
		WebElement checkout = driver.findElement(By.xpath("(//input[@type='text'])[3]"));
		checkout.sendKeys("17/04/2024");
	}

	@When("^User Selects The Adults Per Room As (\\d+)$")
	public void user_Selects_The_Adults_Per_Room_As(int arg1) throws Throwable {
		WebElement AdultsperRoom = driver.findElement(By.xpath("(//select[@name='adult_room'])[1]"));
		Select s4 = new Select(AdultsperRoom);
		Thread.sleep(2000);
		s4.selectByIndex(2);
	}

	@When("^User Selects The Children Per Room as (\\d+)$")
	public void user_Selects_The_Children_Per_Room_as(int arg1) throws Throwable {
		WebElement ChildrenperRoom = driver.findElement(By.xpath("(//select[@name='child_room'])[1]"));
		Select s5 = new Select(ChildrenperRoom);
		Thread.sleep(2000);
		s5.selectByIndex(1);
	}

	@Then("^User Clicks Search$")
	public void user_Clicks_Search() throws Throwable {
		WebElement next1 = driver.findElement(By.xpath("(//input[@type='submit'])[1]"));
		next1.click();

	}

	@Given("^User Clicks the Radio Button$")
	public void user_Clicks_the_Radio_Button() throws Throwable {
		WebElement next2 = driver.findElement(By.xpath("(//input[@type='radio'])[1]"));
		next2.click();

	}

	@Then("^User Clicks Continue$")
	public void user_Clicks_Continue() throws Throwable {
		WebElement next3 = driver.findElement(By.xpath("(//input[@name='continue'])[1]"));
		next3.click();

	}

	@Given("^User Enters First Name as Jones$")
	public void user_Enters_First_Name_as_Jones() throws Throwable {
		WebElement fname = driver.findElement(By.xpath("(//input[@name='first_name'])[1]"));
		fname.sendKeys("Jones");

	}

	@Given("^User Enters Last Name as Michael$")
	public void user_Enters_Last_Name_as_Michael() throws Throwable {
		WebElement lname = driver.findElement(By.xpath("(//input[@name='last_name'])[1]"));
		lname.sendKeys("Michael");

	    
	}

	@Given("^User Enters The Billing Address$")
	public void user_Enters_The_Billing_Address() throws Throwable {
		WebElement address = driver.findElement(By.xpath("(//textarea[@name='address'])[1]"));
		address.sendKeys("No.15,sivasakthi nagar,rajakilpakkam,Chennai");
		

	    
	}

	@Given("^User Enters The Credit Card No as (\\d+)$")
	public void user_Enters_The_Credit_Card_No_as(int arg1) throws Throwable {
		WebElement cardno = driver.findElement(By.xpath("(//input[@name='cc_num'])[1]"));
		cardno.sendKeys("4567854123547852");

	    
	}

	@Given("^User Selects The Credit Card Type As Visa$")
	public void user_Selects_The_Credit_Card_Type_As_Visa() throws Throwable {

		WebElement CardType = driver.findElement(By.xpath("(//select[@id  ='cc_type'])[1]"));
		Select s6 = new Select(CardType);
		Thread.sleep(2000);
		s6.selectByValue("VISA");
	    
	}

	@Given("^User Selects The Expiry Date And Month as May (\\d+)$")
	public void user_Selects_The_Expiry_Date_And_Month_as_May(int arg1) throws Throwable {

		WebElement selectmonth = driver.findElement(By.xpath("(//select[@id='cc_exp_month'])[1]"));
		Select s7 = new Select(selectmonth);
		Thread.sleep(2000);
		s7.selectByVisibleText("May");
		
		WebElement SelectYear = driver.findElement(By.xpath("(//select[@name='cc_exp_year'])[1]"));
		Select s8 = new Select(SelectYear);
		Thread.sleep(2000);
		s8.selectByValue("2024");
	    
	}

	@Given("^User Enters The CVV Number as (\\d+)$")
	public void user_Enters_The_CVV_Number_as(int arg1) throws Throwable {
		WebElement ccv = driver.findElement(By.xpath("(//input[@name='cc_cvv'])[1]"));
		ccv.sendKeys("7845");

		
	    	}

	@Then("^User Clicks Book Now$")
	public void user_Clicks_Book_Now() throws Throwable {
		WebElement Booking = driver.findElement(By.xpath("(//input[@type='button'])[1]"));
		Booking.click();

	    
	}


}
